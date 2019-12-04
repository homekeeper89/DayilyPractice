from FactoryConcreate import *

if __name__ == '__main__':
    profile_type = input('Which Profie Youd like to create?')
    profile = eval(profile_type.lower())()
    print('Creating', type(profile).__name__)
    print('Profile has Sections', profile.getSections())