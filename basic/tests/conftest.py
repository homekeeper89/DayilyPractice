from . import *

def compare_lists(target, res):
    res.sort()
    for index, value in enumerate(target):
        if value != res[index]:
            return False
    return True

@pytest.fixture()
def make_random_range():
    return random.sample(range(1,100), 10)

@pytest.hookimpl(tryfirst=True, hookwrapper=True)
def pytest_runtest_makereport(item, call):
    # execute all other hooks to obtain the report object
    outcome = yield
    rep = outcome.get_result()
    time = datetime.now().strftime('%Y-%m-%d %H:%M:%S')
    # we only look at actual failing test calls, not setup/teardown
    if rep.when == "call" and rep.failed:
        mode = "a+" if os.path.exists("failures") else "w"
        if mode =='a+':
            with open("failures", "r") as original:
                line = original.read()
            print(line)
            with open("failures", "w") as modified:
                modified.write(time + "\n" + rep.longreprtext+"\n")
                modified.write(line)
        else:
            with open("failures", mode) as f:
                f.write(time + "\n" + rep.longreprtext)
        # with open('filename', 'r') as original: 
        #     data = original.read()
        # with open('filename', 'w') as modified: 
        #     modified.write("new first line\n" + data)