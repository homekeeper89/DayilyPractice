#IndianPizzaFactory
from PizzaFactory import PizzaFactory
from ConcreatePizza import *

class IndianPizzaFactory(PizzaFactory):
    def createVegPizza(self):
        return DeluxVeggiePizza()

    def createNonVegPizza(self):
        return ChickenPizza()
    