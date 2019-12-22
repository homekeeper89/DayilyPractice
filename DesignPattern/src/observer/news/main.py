from EmailSubscriber import EmailSubscriber
from NewsPublisher import NewsPublisher
from AnyOtherSubscriber import AnyOtherSubscriber
from Subscriber import Subscriber
from SMSSubscriber import SMSSubscriber

if __name__ == '__main__':
    news_publisher = NewsPublisher()

    for Subscribers in [SMSSubscriber, EmailSubscriber, AnyOtherSubscriber]:
        Subscribers(news_publisher)

    print('\nSubscribers:', news_publisher.subscribers())

    news_publisher.addNews('Hello World')
    news_publisher.notifySubscribers()

    print('\nDetached:', type(news_publisher.detach()).__name__)
    print('\nSubscrobers:', news_publisher.subscribers())

    news_publisher.addNews('My Second News')
    news_publisher.notifySubscribers()
