class Singleton(object):
    def __new__(cls):
        if not hasattr(cls, 'instance'):
            cls.instance = super(Singleton, cls).__new__(cls)
        return cls.instance

class Borg:
    __shared_state={'1':'2'}
    def __init__(self):
        self.x = 1
        self.__dict__ = self.__shared_state
        pass
# 모노스테이트 패턴 -> 공유하는 데이터가 있는 싱글톤 패턴

import sqlite3

# DB 싱글톤 패턴
class MetaSingleton(type):
    _instance = {}
    def __call__(cls, *args, **kwargs):
        if cls not in cls._instance:
            cls._instance[cls] = super(MetaSingleton, cls).__call__(*args, **kwargs)
        return cls._instance[cls]

class Database(metaclass=MetaSingleton):
    connection = None
    def connect(self):
        if self.connection is None:
            self.connection = sqlite3.connect('db.sqlite3')
            self.cursorobj = self.connection.cursor()
        return self.cursorobj


if __name__ == '__main__':
    db1 = Database().connect()
    db2 = Database().connect()
    print('Database Objects DB1', db1) #Database Objects DB1 <sqlite3.Cursor object at 0x106f46650>
    print('Database Objects DB2', db2) #Database Objects DB2 <sqlite3.Cursor object at 0x106f46650>

