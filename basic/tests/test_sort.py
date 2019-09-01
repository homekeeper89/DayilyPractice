from .conftest import *

def test_bubble():
    num = [9,2,4,5]
    res = bubble_sort(num)
    res_ = compare_lists(res, num)
    assert res_ == True

def test_selection():
    num = [5,3,8,6,7,2]
    res = selection_sort(num)
    res_ = compare_lists(res, num)
    assert res_ == True

def test_insertion():
    num = [5,3,8,6,7,2]
    res = insertion_sort(num)
    res_ = compare_lists(res, num)
    import ipdb; ipdb.set_trace()
    assert res_ == True

def test_bubble_two():
    num = [5,3,8,6,7,2]
    res = bubble_sort_two(num)
    res_ = compare_lists(res,num)
    assert res_ == True

def test_selection_two():
    num = random.sample(range(1,100), 10)
    res = selection_sort_two(num)
    res_ = compare_lists(res,num)
    assert res_ == True

def test_insertion_two(make_random_range):
    num = make_random_range
    res = insertion_sort_two(num)
    res_ = compare_lists(res,num)
    assert res_ == True

@given(lists(integers(min_value=0), min_size=1))
def test_sum_above_max(xs):
    assert sum(xs) >= max(xs)