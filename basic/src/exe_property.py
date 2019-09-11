class Celsius:
    def __init__(self, temperature=0):
        self.temperature = temperature
    
    def to_fahrenheit(self):
        return (self.temperature * 1.8) + 32
    
    def get_temperature(self):
        print('Getting Value')
        return self._temperature
    
    def set_temperature(self, value):
        if value < -273:
            raise ValueError('Temperature below -273 is not possible')
        print('Setting value')
        self._temperature = value
    # any code that retrieves the value of temperature will automatically
    # call get_temperature() instead of a dictionay(__dict__) look-up.
    # any code that assigns a value to temperature will automacatically call set_temperature()
    # 얘가 어떻게 get, set으로...  property안에 순서대로인가?
    temperature = property(get_temperature, set_temperature)

    def __repr__(self):
        return 'temp {} fahr {}'.format(self._temperature, self.to_fahrenheit())

if __name__ =='__main__':
    c = Celsius()
    c.temperature = 37
    c.to_fahrenheit()