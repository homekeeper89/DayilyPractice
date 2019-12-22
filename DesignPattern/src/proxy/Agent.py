from Actor import Actor as ac

class Agent(object):

    def __init__(self):
        self.principal = None

    def work(self):
        self.actor = ac()
        if self.actor.getStatus():
            self.actor.occupied
        else:
            self.actor.available()