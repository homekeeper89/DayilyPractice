"""
상황 : 백화점에서 쇼핑을 하는데 현금이 부족할 경우 이를 현금 카드가 대체해줄 수 있다

장점 : 무거운 객체, 자주 사용되는 객체를 캐싱해 어플리케이션 성능 향상
RealSubject에 대한 접근 요청을 인증
시스템 모니터링 용도로 사용
RealSubject 코드를 수정하지 않고 기능을 추가할 수 있다. 

"""
from abc import ABCMeta, abstractmethod

class Payment(metaclass=ABCMeta):
    """Subject 클래스, Proxy와 RealSubject를 구현하는 인터페이스"""
    @abstractmethod
    def do_pay(self):
        pass

class Bank(Payment):
    """you 계좌에서 판매자에게 돈을 인출"""
    def __init__(self):
        self.card = None
        self.account = None

    def __getAccount(self):
        self.account = self.card
        return self.account

    def __hasFunds(self):
        print("Bank:: Checking if Account", self.__getAccount(), "has enough funds")
        return True

    def setCard(self, card):
        self.card = card

    def do_pay(self):
        if self.__hasFunds():
            print('Bank:: Paying the merchant')
            return True
        else:
            print("Bank:: Sorry, not enough funds")
            return False

class DebitCard(Payment):
    """Proxy 역할을 수행, You가 결제 요청시 은행에 가서 돈을 인출, 지불하는 do_pay 메서드 호출
    Debitcard 는 RealSubject인 Bank의 대리 객체
    """
    def __init__(self):
        self.bank = Bank()
    def do_pay(self):
        card = input("Proxy : Punch in Card Number")
        self.bank.setCard(card)
        return self.bank.do_pay()

class You:
    def __init__(self):
        print('You:; Lets Buy the denim shirt')
        self.debitCard = DebitCard()
        self.isPurchased = None
    
    def make_payment(self):
        self.isPurchased = self.debitCard.do_pay()
    
    def __del__(self):
        if self.isPurchased:
            print("Yopu:: Wow Denim shirt is Mine :-)")
        else:
            print("You:: I should earn more:")

if __name__ == '__main__':
    you = You()
    you.make_payment()