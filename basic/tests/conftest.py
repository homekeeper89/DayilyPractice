from . import *

def compare_lists(target, res):
    res.sort()
    for index, value in enumerate(target):
        if value != res[index]:
            return False
    return True

