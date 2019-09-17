# 시스템 모니터 클래스가 분류하려는 클래스와 직접 상호작용하는 것이 문제
# 시스템 모니터는 추상 이벤트와 협력하도록 변경하고 해당 이벤트에 대응하는 개별 로직은 각 이벤트 클래스에 위임

class Event:
    def __init__(self, raw_data):
        self.raw_data = raw_data

    @staticmethod
    def meets_condition(event_data:dict):
        return False

class UnknownEvent(Event):
    """데이터만으로 식별할수 없는 이벤트"""

class LoginEvent(Event):
    
    @staticmethod
    def meets_condition(event_data:dict):
        return (
            event_data["before"]["session"] == 0
            and event_data["after"]["session"] == 1
        )

class LogoutEvent(Event):
    @staticmethod
    def meets_condtion(event_data:dict):
        return (
            event_data["before"]["session"] == 1
            and event_data["after"]["session"] == 0
        )

class SystemMonitor:
    """시스템 이벤트 분류"""
    def __init__(self, event_data):
        self.event_data = event_data
    
    def identify_event(self):
        for event_cls in Event.__subclasses__():
            try:
                if event_cls.meets_condition(self.event_data):
                    return event_cls(self.event_data)
            except KeyError:
                continue
        return UnknownEvent(self.event_data)

# 새로운 이벤트를 지원하려면 단지 Event 클래스를 상속 받아 비지니스 로직에 따라 meets_condition을 구현하면 된다
# 모니터링 중인 시스템의 사용자 트랜잭션에 대응하는 이벤트를 지원해야한다고 가정
class TransactionEvent(Event):
    @staticmethod
    def meets_condition(event_data:dict):
        return event_data["after"].get("transaction") is not None

# 이렇게 작성할 경우 SystemMonitor.identify_event 메서드는 전혀 수정하지 않는다.
# = 이 메서드는 새로운 유형의 이벤트에 대해서 폐쇄되어있다.
# Event 클래스는 새로운 유형의 이벤트를 추가할 수 있게 해준다 
# = 새로운 타입의 확장에 대해 개방되어있다.