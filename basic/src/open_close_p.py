# 개방 폐쇄원칙

class Event:
    def __init__(self, raw_data):
        self.raw_data = raw_data
    
class UnknownEvent(Event):
    """ 식별 불가 이벤트"""

class LoginEvent(Event):
    """로그인 사용자 이벤트"""
class LogoutEvent(Event):
    """로그아웃 사용자 이벤트 """

class SystemMonitor:
    """이벤트를 분류함"""
    def __init__(self, event_data):
        self.event_data = event_data

    def identify_event(self):
        if(
            self.event_data["before"]["session"] == 0
            and self.event_data["after"]["session"] == 1
        ):
            return LoginEvent(self.event_data)
        elif(
            self.event_data["before"]["session"] == 1
            and self.event_data["after"]["session"] == 0
        ):
            return LogoutEvent(self.event_data)
        return UnknownEvent(self.event_data)

# 위 코드의 문제점 : 이벤트 유형을 결정하는 논리가 일체형으로 중항 집중화 되었다.
# -> 이벤트 타입이 늘어날경우 메서드도 커진다 = 한가지 일만 하지 않게 된다.
# 수정을 위해 닫혀이지 않았다 = 새로운 유형 이벤트 할때마다 메서드가 수정된다(with elif)
# 이 메서드를 변경하지 않고도 새로운 유형 이벤트 추가하고 싶다(폐쇄원칙)
# 새로운 이벤트 추가될때 기존 코드 변경 말고 코드를 확장하여 지원하고 싶다(개방원칙)