<<<<<<< HEAD
<<<<<<< HEAD
from abc import ABCMeta, abstractmethod
"""
상황 : 링크드인 또는 페이스북 같은 SNS에 사용자가 프로필을 작성하는 경우, 프로필에는 여러 섹션이 있다.
두 서비스에 공통적으로 기입해야 하는 정보도 있다. 이처럼 서비스 종류에 따라 알맞은 내용을 포함하는 프로필을 생성하는
프로그램을 구현해야한다.

구성 : 팩토리 메서드 패턴은 크게 Creator, ConcreateCreator, ConcreateProduct, Product 로 구성됨
Creator : factoryMethod를 포함하는 추상클래스
ConcreateCreator : Create 추상클래스를 상속받고 생성된 객체를 런타임에 변환한다(ConcreateProduct 생성)
Product:
ConcreateProduct

위 상황을 구성에 맞춰본다면
0. 유저는 프로필을 만들어야한다 > 공통 결과물, creator의 목표
1. 유저는 SNS를 선택해야한다 > SNS는 프로필을 만드는 주체, ConcreateCreator
2. 선택된 SNS는 여러 섹션을 선택할 수 있다 > 여러 섹션은 프로필의 종류, Product

즉 각각의 SNS 클래스는 프로필을 만드는 인터페이스를 상속 받은 후, 섹션을 생성하는 팩토리 패턴을 만들어야 한다.

"""

class Section(metaclass=ABCMeta):
    @abstractmethod
    def describe(self):
        pass

class PersonalSection(Section):
    def describe(self):
        print("Person Section")
    
class AlbumSection(Section):
    def describe(self):
        print("Album Section")

class PatentSection(Section):
    def describe(self):
        print("Album Section")

class PublicationSection(Section):
    def describe(self):
        print('Publication Section')

class Profile(metaclass=ABCMeta):
    def __init__(self):
        self.sections=[]
        self.createProfile()

    @abstractmethod
    def createProfile(self):
        pass
    
    def getSections(self):
        return self.sections
    
    def addSections(self, section):
        self.sections.append(section)

class linkedin(Profile):
    def createProfile(self):
        self.addSections(PersonalSection())
        self.addSections(PatentSection())
        self.addSections(PublicationSection())

class facebook(Profile):
    def createProfile(self):
        self.addSections(PersonalSection())
        self.addSections(AlbumSection())

if __name__ =='__main__':
    profile_type = input("Which profile you'd like to create? [Linkedin or Facebook]")
    profile = eval(profile_type.lower())()
    print("Create profile...", type(profile).__name__)
=======
=======
>>>>>>> 6f598cd0b3dca1c89e132e7acafafb0f93c4a482
from abc import ABCMeta, abstractmethod
"""
상황 : 링크드인 또는 페이스북 같은 SNS에 사용자가 프로필을 작성하는 경우, 프로필에는 여러 섹션이 있다.
두 서비스에 공통적으로 기입해야 하는 정보도 있다. 이처럼 서비스 종류에 따라 알맞은 내용을 포함하는 프로필을 생성하는
프로그램을 구현해야한다.

구성 : 팩토리 메서드 패턴은 크게 Creator, ConcreateCreator, ConcreateProduct, Product 로 구성됨
Creator : factoryMethod를 포함하는 추상클래스
ConcreateCreator : Create 추상클래스를 상속받고 생성된 객체를 런타임에 변환한다(ConcreateProduct 생성)
Product:
ConcreateProduct

위 상황을 구성에 맞춰본다면
0. 유저는 프로필을 만들어야한다 > 공통 결과물, creator의 목표
1. 유저는 SNS를 선택해야한다 > SNS는 프로필을 만드는 주체, ConcreateCreator
2. 선택된 SNS는 여러 섹션을 선택할 수 있다 > 여러 섹션은 프로필의 종류, Product

즉 각각의 SNS 클래스는 프로필을 만드는 인터페이스를 상속 받은 후, 섹션을 생성하는 팩토리 패턴을 만들어야 한다.

장점 : 유연성과 포괄성을 갖추어, 한 클래스에 종속 되지않는다.
"""

class Section(metaclass=ABCMeta):
    @abstractmethod
    def describe(self):
        pass

class PersonalSection(Section):
    def describe(self):
        print("Person Section")
    
class AlbumSection(Section):
    def describe(self):
        print("Album Section")

class PatentSection(Section):
    def describe(self):
        print("Album Section")

class PublicationSection(Section):
    def describe(self):
        print('Publication Section')

class Profile(metaclass=ABCMeta):
    def __init__(self):
        self.sections=[]
        self.createProfile()

    @abstractmethod
    def createProfile(self):
        pass
    
    def getSections(self):
        return self.sections
    
    def addSections(self, section):
        self.sections.append(section)

class linkedin(Profile):
    def createProfile(self):
        self.addSections(PersonalSection())
        self.addSections(PatentSection())
        self.addSections(PublicationSection())

class facebook(Profile):
    def createProfile(self):
        self.addSections(PersonalSection())
        self.addSections(AlbumSection())

if __name__ =='__main__':
    profile_type = input("Which profile you'd like to create? [Linkedin or Facebook]")
    profile = eval(profile_type.lower())()
    print("Create profile...", type(profile).__name__)
<<<<<<< HEAD
>>>>>>> master
=======
>>>>>>> 6f598cd0b3dca1c89e132e7acafafb0f93c4a482
    print("Profile has sections --", profile.getSections())