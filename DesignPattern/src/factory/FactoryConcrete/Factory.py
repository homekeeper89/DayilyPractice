from abc import ABCMeta, abstractclassmethod, abstractmethod

class Section(metaclass=ABCMeta):
    @abstractclassmethod
    def describe(self):
        pass

class PersonalSection(Section):
    def describe(self):
        print('Personal Section')

class AlbumSection(Section):
    def describe(self):
        print('Album Section')

class PatentSection(Section):
    def describe(self):
        print('Patent section')

class PublicationSection(Section):
    def describe(self):
        print('Publication Section')
