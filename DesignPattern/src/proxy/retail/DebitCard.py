from Payment import Payment as pay
from Bank import Bank as bk

class DebitCard(pay):

    def __init__(self):
        self.bank = bk()
    
    def do_pay(self):
        card = input("Proxy::Punci in Card number:")
        self.bank.setCard(card)
        return self.bank.do_pay()