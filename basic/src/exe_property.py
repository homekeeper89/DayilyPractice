class Celsius:
    def __init__(self, temperature=0):
        self.temperature = temperature
    
    def to_fahrenheit(self):
        return (self.temperature * 1.8) + 32

    def __repr__(self):
        return 'temp {} fahr {}'.format(self.temperature, self.to_fahrenheit())

if __name__ =='__main__':
    man =Celsius()
    man.temperature =37
    print(man)
    print(man.__dict__)
    