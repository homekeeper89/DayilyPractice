#PizzaStore
from IndianPizzaFactory import IndianPizzaFactory
from USPizzaFactory import USPizzaFactory


class PizzaStore:
    def __init__(self):
        pass

    def makePizza(self):
        for factory in [IndianPizzaFactory(), USPizzaFactory]:
            self.factory = factory
            self.NonVegPizza = self.factory.createNonVegPizza()
            self.VegPizza = self.factory.createVegPizza()
            self.VegPizza.prepare()
            self.NonVegPizza.serve(self.VegPizza)


if __name__ == '__main__':
    pizza = PizzaStore()
    pizza.makePizza()
