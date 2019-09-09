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

