팩토리 패턴이 필요한 이유
- 객세 생성, 클래스 구현 의존도 줄임
- 클라이언트는 최소 정보만으로 객체 구현이 가능
- 코드 수정 없이 팩토리에 새로운 클래스 추가 가능

팩토리 패턴 종류 3가지
- 심플 팩토리 패턴  : 인터페이스는 객체 생성 로직을 숨기고 객체 생성
- 팩토리 메소드 패턴 : 인터페이스를 통해 객체 생성, 서브 클래스가 객체 생성에 필요한 클래스 선택
- 추상 팩토리 패턴 : 객체 생성에 필요한 클래스 노출 없이 객체 생성하는 인터페이스, 내부적으로 다른 팩토리 객체 생성