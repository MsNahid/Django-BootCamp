import re

def multi_re_find(patterns, phrase):

   
    print("Searching for pattern {}".format(patterns))
    print(re.findall(patterns[0], phrase))
    print("\n")



test_phrase = "sdsd..sssddd..?sddddsdddd......sddd!ddd.dsssss..dsssss"
#test_patterns = ['sd*'] #zero or more d
#test_patterns = ["sd+"] #one or more patterns only
test_patterns = ["sd?"] #zero or one pattern 
test_patterns = ["s[sd]+"]#one or more s or d
test_patterns = ['[^.?!]+'] # remove character that are taken place carrot symbol
multi_re_find(test_patterns, test_phrase)



