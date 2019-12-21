from abc import ABCMeta, abstractmethod
# 추상 클래스 , EmailSubscriber, SMSSubscriber 의 인터페이스를 구현함

class Subscriber(metaclass=ABCMeta):

    @abstractmethod
    def update(self):
        pass