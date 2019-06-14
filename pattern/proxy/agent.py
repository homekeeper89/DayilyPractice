"""
프록시란 요청자와 공급자 사이의 중재자를 일컫음.
프록시 클래스는 객체의 인터페이스 역할을 한다. 여기서 객체란 네트워크 연결 또는 메모리, 파일에 저장된 객체 등 다양한 종류
즉 프록시 클래스는 반환해 사용할 객체를 감싸는 포장지 또는 에이전트 객체다.
프록시 패턴의 주목적은 실제 객체에 접근 할 수 있는 대리 객체나 껍데기를 제공하는 것

상황 : 배우와 에이전트, 영화 제작사가 배우를 모집할때 에이전트를 통해 진행함
"""

class Actor(object):
    def __init__(self):
        self.isBusy = False
    
    def occupied(self):
        self.isBusy = True
        print(type(self).__name__, "is occupied with current movie") 

    def available(self):
        self.isBusy = False
        print(type(self).__name__, "is free for the movie")
    
    def getStatus(self):
        return self.isBusy
    
class Agent(object):
    def __init__(self):
        self.principal = None
    def work(self):
        self.actor = Actor()
        if self.actor.getStatus():
            self.actor.occupied()
        else:
            self.actor.available()

if __name__ == '__main__':
    """
    프록시 패턴 역할
    특정 객체의 대리 객체를 제공해 접근을 제어
    분산 구조를 지원하기 위한 레이어 또는 인터페이스 제공
    의도하지 않은 케이스로부터 객체를 보호
    """
    r = Agent()
    r.work()