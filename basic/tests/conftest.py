from . import *

def compare_lists(target, res):
    for index, value in enumerate(target):
        if value != res[index]:
            return False
    return True

