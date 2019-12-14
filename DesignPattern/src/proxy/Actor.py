class Actor(object):
    def __init__(self):
        self.isBusy = False

    def occupied(self):
        self.isBusy = True
        print('바쁨')

    def available(self):
        self.isBusy = False
        print('안바쁨')
    
    def getStatus(self):
        return self.isBusy
    