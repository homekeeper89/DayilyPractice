from .src.singleton import singleton

def test_singleton():
    ss = Singleton()
    assert ss is not None