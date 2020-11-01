class Animal():

    def __init__(self):
        print("Animal created!")

    def whoAmI(self):
        print("ANIMAL")
    
    def eat(self):
        print("EATING")

class Dog(Animal):

    def __init__(self):
        Animal.__init__(self)
        print("DOG CREATED")

    def bark(self):
        print("WOOLF")

    def eat(self):
        print("Dog eat")


# mya = Animal()
# mya.whoAmI()
# mya.eat()

myDog = Dog()
myDog.whoAmI()
myDog.eat()
myDog.bark()

