# 서브젝트는 옵저버를 관리한다.
class Subject:
    def __init__(self):
        self.__observers = []

    def register(self, observer):
        self.__observers.append(observer)

    def notifyAll(self, *args, **kwargs):
        for observer in self.__observers:
            observer.notify(self, *args, **kwargs)

# 옵저버는 서브젝트를 감시하는 객체를 위한 인터페이스를 제공 : 여기서는 notify
class Observer1:
    def __init__(self, subject):
        subject.register(self)

    def notify(self, subject, *args):
        print(type(self).__name__, ':: GOt', args, 'from', subject)
    
class Observer2:
    def __init__(self, subject):
        subject.register(self)

    def notify(self, subject, *args):
        print(type(ㅎself).__name__, ':: GOt', args, 'from', subject)

if __name__ == '__main__':
    subject = Subject()
    observer1 = Observer1(subject)
    observer2 = Observer2(subject)

    subject.notifyAll('notification')

# ConcreateObserver는 observer 인터페이스를 구현해 자신의 subject에 등록한다.