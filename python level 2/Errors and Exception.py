# try:

#     # f = open("simple.txt", "w")
#     f = open("simple.txt", "r")
#     f.write("Test write to simple text!")

# except IOError: #use only except for all kind of errorx
#     print("ERROR: COULD NOT FIND FILE OR READ DATA!")
# else:
#     print("SUCCESS!")
#     f.close()

# print("Hello World!!")
try:

    # f = open("simple.txt", "w")
    f = open("simple.txt", "r")
    f.write("Test write to simple text!")

except IOError: #use only except for all kind of errorx
    print("ERROR: COULD NOT FIND FILE OR READ DATA!")
finally:
    print("I always work, no matter what is happing or happened!") 
    f.close()

print("Hello World!!")
