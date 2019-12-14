from DebitCard import *

class Client:

    def __init__(self):
        print("You:: Lets buy the Denim shirt")
        self.debitCard = DebitCard()
        self.isPurchased = None

    def make_payment(self):
        self.isPurchased = self.debitCard.do_pay()

    def __del__(self):
        if self.isPurchased:
            print("You:: Wow Denim")
        else:
            print("You:: I should earn mord")

if __name__ =='__main__':
    you = Client()
    you.make_payment()