#USPizzaFactory
from PizzaFactory import PizzaFactory
from ConcreatePizza import *

class USPizzaFactory(PizzaFactory):
    def createVegPizza(self):
        return MexicanVegPizza()

    def createNonVegPizza(self):
        return HamPizza()
