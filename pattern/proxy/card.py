"""
상황 : 백화점에서 쇼핑을 하는데 현금이 부족할 경우 이를 현금 카드가 대체해줄 수 있다

"""
from abc import ABCMeta, abstractmethod

class Payment(metaclass=ABCMeta):
    @abstractmethod
    def do_pay(self):
        pass

class Bank(Payment):
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