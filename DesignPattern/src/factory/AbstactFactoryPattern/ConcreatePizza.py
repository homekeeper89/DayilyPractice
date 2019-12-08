#ConcreatePizza
from abc import ABCMeta, abstractmethod


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
        print("prepare", type(self).__name__)


class ChickenPizza(NonVegPizza):
    def serve(self, VegPizza):
        print(type(self).__name__, " is served with chicken on",
              type(VegPizza).__name__)


class MexicanVegPizza(VegPizza):
    def prepare(self):
        print('Prepare', type(self).__name__)


class HamPizza(NonVegPizza):
    def serve(self, VegPizza):
        print(type(self).__name__, "is served with Ham on",
              type(VegPizza).__name__)
