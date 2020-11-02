import re

patterns = ['term1', 'term2']

text = "This is a string with term1, not to other!"

for pattern in patterns:
    print("I'm searching for "+ pattern)
    
    # search method return more than boolean or none
    if(re.search(pattern, text)):
        print("MATCH!")
        print(re.search(pattern, text).start())
    else:
        print("NO MATCH!")

#split through regular expression
split_term = '@'

email = "huntsman@gmail.com"

print(re.split(split_term, email))

#find all match
print(re.findall("hero", "hero is hero, never zero"))


 