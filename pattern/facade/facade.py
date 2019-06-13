"""
파사드란 건물의 정면을 뜻함
상점에 고객이 물품을 구입하러 왔을때 고객은 상점의 구조를 알 필요 없음. 주인에게 물어보면 됨.
퍼사드 패턴은 인터페이스를 통합시킨 단일 인터페이슬 제공해 클라이언트가 쉽게 서브시스템에 접근할 수 있게 한다
단일 인터페이스 객체로 복잡한 서브시스템을 대체한다. 서브시스템을 캡슐화 하는 것이 아니라 모든 서브시스템들을 결합한다
클라이언트와 내부 구현을 분리한다.

퍼사드 구조는 3개로 구성 : 퍼사드, 시스템, 클라이언트
퍼사드 : 외부에서 보기 깔끔하게 서브 시스템을 감싼다
시스템 : 여러 서브시스템의 집합
클라이언트 : 퍼사드를 통해 서브시스템과 통신, 복잡한 시스템 구조를 알 필요 없다

상황 : 지인의 결혼 준비를 도와줘야한다. 여러개를 신경써야하지만 이제는 웨딩플래너를 통해서 할 수 있다
클라이언트 : 결혼식 전까지 준비를 해야하는 나
퍼사드 : 웨딩플래너
서브시스템 : 음식, 호텔, 장식 등의 업체

"""

class EventManager(object):
    """퍼사드, 웨딩플래너"""
    def __init__(self):
        print("Event Manager:: Let ma talk to the folks\n")

    def arrange(self):
        self.hotelier = Hotelier()
        self.hotelier.bookHotel()

        self.florist = Florist()
        self.florist.setFlowerRequirements()

        self.caterer = Caterer()
        self.caterer.setCuisine()

        self.musician = Musician()
        self.musician.setMusicType()

class Hotelier(object):
    def __init__(self):
        print("Arranging the hotel for Marriage? --")

    def __isAvailable(self):
        print("Is the hotel free for the event on Given Day")
        return True
    def bookHotel(self):
        if self.__isAvailable():
            print("Registerd the booking \n\n")

class Florist(object):
    def __init__(self):
        print("Flower Decorations for the Event --")
    
    def setFlowerRequirements(self):
        print("carnations, Roses and lilies would be used for Decorations \n\n")
    
class Caterer(object):
    def __init__(self):
        print("Food Arrangements for the Event --")
    def setCuisine(self):
        print("Chinese & delicous")

class Musician(object):
    def __init__(self):
        print("Musical Arrangements for the Marriage --")
    
    def setMusicType(self):
        print("Jazz and Classical will be played \n\n")

class Client(object):
    """일을 맡기는 사람(나, 당신)"""
    def __init__(self):
        print('You : Whoa Marriage Arrangemetns?!!')
    
    def askEventManager(self):
        print('You: Lets Contact the Event Manager\n\n')
        em = EventManager()
        em.arrange()
    
    def __del__(self):
        print('You:: Thanks to Evnet Manager all!')

if __name__ == '__main__':
    cli = Client()
    cli.askEventManager()