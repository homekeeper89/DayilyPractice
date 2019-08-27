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

@given(lists(integers(min_value=0), min_size=1))
def test_sum_above_max(xs):
    assert sum(xs) >= max(xs)