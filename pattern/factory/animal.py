from abc import ABCMeta, abstractmethod

"""
cat, dog는 animal을 상속받고 추상메서드를 구체화 하였음
ForestFactory는 인자에 따라 Animal 인스턴스를 생성하고 사운드를 출력함
클라이언트는 인자만 전달해주면 됨.
"""
class Animal(metaclass=ABCMeta):
    @abstractmethod
    def do_say(self):
        pass

class Dog(Animal):
    def do_say(self):
        print("Bhow Bhow")

class Cat(Animal):
    def do_say(self):
        print("Meow Meow")

class ForestFactory(object):
    def make_sound(self, object_type):
        return eval(object_type)().do_say()

if __name__ == '__main__':
    ff = ForestFactory()
    animal = input('Which animal should make sound ')
    ff.make_sound(animal)