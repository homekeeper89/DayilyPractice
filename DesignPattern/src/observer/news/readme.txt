뉴스 에이전시 옵저버 패턴으로 구현하자

뉴스 에이전시는 실시간 뉴스를 신속하게 구독자에게 전달해야한다.
구독자는 신문 뿐만 아니라 이메일, 문자, 음성 메시지 등 다양한 방식으로 뉴스를 전달 받는다.
즉 추후에 새로운 행태의 매체도 지원 할 수 있도록 설계해야 한다.

- NewsPublisher 클래스에 구현한다
- NewsPublisher는 구독자가 구현할 인터페이스를 제공한다
- Observer는 attach() 메소드를 통해 자신을 NewsPublisher에 등록하고 detach() 메소드로 등록을 취소한다
- subscribers() 는 Subject에 등록된 구독자 목록을 반환한다.
- notifySubscriber()는 NewsPublihser에 등록된 모든 구독자에게 알림을 보낸다.
- 뉴스 게시자는 addNews() 메소드로 새로운 뉴스를 등록하고 getNews()로 최신 뉴스를 확인한 뒤 Observer에 전달한다.