from src.singleton.singleton import Singleton

def test_singleton():
    ss = Singleton()
    assert ss is not None