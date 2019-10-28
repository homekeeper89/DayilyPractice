from .conftest import *
import pytest

sub_data = [
    pytest.param(5, 1, 4, id="5 subtract 1 is 4"),
    pytest.param(5,1,6, marks=pytest.mark.xfail, id="wrong")
    # pytest.param(3, 2, 1, id="3 subtract 2 is 1"),
    # pytest.param(10, 2, 8, id="10 subtract 2 is 8"),
    # pytest.param(5, 1, 6, marks=pytest.mark.xfail, id="5 subtract 1 is 6"),    
    # pytest.param(3, 2, 2, marks=pytest.mark.xfail, id="3 subtract 2 is 2"),    
    # pytest.param(10, 2, 1, marks=pytest.mark.xfail, id="10 subtract 2 is 1")
]

def sub(a,b):
    return a-b

@pytest.mark.parametrize(
    "a,b,exp", sub_data
)
def test_sub(a,b,exp):
    assert sub(a,b) == exp