# proxy, realsubject가 구현하는 인터페이스
from abc import ABCMeta, abstractclassmethod

class Payment(metaclass=ABCMeta):

    @abstractclassmethod
    def do_pay(self):
        pass