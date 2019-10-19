"""
클래스 직접 호출 않고 관련된 객체를 생성하는 인터페이스를 제공하는 것이 목적
<-> 팩토리 메서드 패턴의 경우 인스턴스 생성을 서브클래스에게 맡기는 반면 추상 팩토리 메서드는 관련된 객체의 집합을 생성한다

상황 : 인도식 피자와 미국식 피자를 판매하는 식당을 연다
추상 기본 클래스 PizzaFactory를 선언
PizzaFactory 클래스에는 ConcreateFactory가 상속 받을 createVegPizza() 와 createNonVegPizza(), 두개의 추상 메서드가 있다

이건 진짜 모르겠다.
"""
from abc import ABCMeta, abstractmethod

class PizzaFactory(metaclass=ABCMeta):
    @abstractmethod
    def createVegPizza(self):
        pass
    @abstractmethod
    def createNonVegPizza(self):
        pass
class IndianPizzaFactory(PizzaFactory):

    def createVegPizza(self):
        return DeluxVeggiePizza()

    def createNonVegPizza(self):
        return ChickenPizza()
    
class USPizzaFactory(PizzaFactory):

    def createVegPizza(self):
        return MexicanVegPizza()
    
    def createNonVegPizza(self):
        return HamPizza()

class VegPizza(metaclass=ABCMeta):

    @abstractmethod
    def prepare(self, VegPizza):
        pass

class NonVegPizza(metaclass=ABCMeta):
    @abstractmethod
    def serve(self, VegPizza):
        pass
    
class DeluxVeggiePizza(VegPizza):
    def prepare(self):
        print("Prepare", type(self).__name__)

class ChickenPizza(NonVegPizza):
    def serve(self, VegPizza):
        print(type(self).__name__, "is served with chicken on", type(VegPizza).__name__)

class MexicanVegPizza(VegPizza):
    def prepare(self):
        print("Prepare ", type(self).__name__)

class HamPizza(NonVegPizza):
    def serve(self, VegPizza):
        print(type(self).__name__, "is served with Ham on" , type(VegPizza).__name__)

class PizzaStore:
    def __init__(self):
        pass
    
    def makePizzas(self):
        for factory in [IndianPizzaFactory(), USPizzaFactory()]:
            self.factory = factory
            self.NonVegPizza = self.factory.createNonVegPizza()
            self.VegPizza = self.factory.createVegPizza()
            self.VegPizza.prepare()
            self.NonVegPizza.serve(self.VegPizza)

if __name__ =='__main__':
    pizza = PizzaStore()
    pizza.makePizzas()