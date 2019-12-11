from Payment import Payment as pay

class Bank(pay):

    def __init__(self):
        self.card = None
        self.account = None

    def __getAccount(self):
        self.account = self.card
        return self.account
    
    def __hasFunds(self):
        print("Bank:: Checkoing if accoutn", self.__getAccount(), "has enough")
        return True
    
    def setCard(self, card):
        self.card = card

    def do_pay(self):
        if self.__hasFunds():
            print("Bank::Paying the merchant")
        else:
            print("Bank sorry")
            return False