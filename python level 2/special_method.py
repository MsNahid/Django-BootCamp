class Book():

    def __init__(self, title, author, prices):
        self.title = title
        self.author = author
        self.prices = prices

    def __str__(self):
        return "Title: {}, Author: {}, Prices: {}".format(self.title, self.author, self.prices)

    
b = Book("The cow firm", "Nahid", 190)
print(b)