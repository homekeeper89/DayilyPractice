from FactoryConcreate import *
# 사례 설명
# 링크드인이나 페이스북 같은 소셜 네트워크에 특정 사용자나 기업의 프로필을 작성하는 경우
# 프로필에는 여러 섹션이 존재 > 링크드인에는 출원한 특허나 출판경력을 기입할 수 있음
# 페이스북에는 최근에 다녀온 여행지에서 찍은 사진이 존재
# 두 서비스에는 공통적으로 기입되어야할 부분도 있음.

if __name__ == '__main__':
    profile_type = input('Which Profie Youd like to create?')
    profile = eval(profile_type.lower())()
    print('Creating', type(profile).__name__)
    print('Profile has Sections', profile.getSections())