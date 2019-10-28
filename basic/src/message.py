class message:
    def __init__(self, total=0):
        self.total = total
        self.read = 0
        self.left = 0

    def __repr__(self):
        return 'tot {} read {} left {}'.format(self.total, self.read, self.left)
    @property
    def left(self):
        return self._left
    @left.setter
    def left(self, count):
        self._left = count
        
    @property
    def read(self):
        return self._read

    @read.setter
    def read(self, count):
        if count > self.total:
            raise ValueError('No more than total')
        self._read = count
        self._left = self._total - count

    @property
    def total(self):
        return self._total
    
    @total.setter
    def total(self, value):
        if value < 0:
            raise ValueError('No Under Zero')
        self._total = value
if __name__ == '__main__':
    import ipdb; ipdb.set_trace()
    msg = message()