class Message:
    def __init__(self, total):
        self.total = total
        self.read = 0
        self.left = 0
    
    @property
    def read_percentage(self):
        return self.read / self.total

    @read_percentage.setter
    def read_percentage(self, amount):
        self.read = amount

import ipdb; ipdb.set_trace()
msg = Message(100)
print(msg)
