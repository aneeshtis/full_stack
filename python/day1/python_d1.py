"""
print("This message")
print("is printed")
print("using VS Code IDE\n")

print("Johny Johny")
print("Yes, Papa!")
print("Eating Sugar")
#print("Yes, Papa!")
print("No, Papa!")
print("Telling Lies?")
#print("Yes, Papa!")
print("No, Papa!")
print("Open Your Mouth")
print("Ah, ah , ah\n") 

name = input("Hey! Whats your name! :")
print(name)
"""
#print("Mea culpa " *3)

"""
age = 28
print(age)
pi = 3.14
print(3.14)
country = "india"
print(country)
x=y=z=100
print(x,y,z)
name,age,loc = "Ajay",23,"Cochin"
print(name, age, loc)
print(type(pi))
"""
#List
myList = ["red","green","blue"]
print(myList)
collection = ["bag","June",18,"01-01-2018"]
print(collection)
my_list = ["dairy",[28,3,5],["a","b","c"]]
print(my_list)
print(my_list[0])
my_list[0] = "Book"
print(my_list[0])
print(my_list[1][1])

#Tuple
data = ("Aneesh", 23, "Kerala", 62.9)
print(data)

#Dictionary
my_dict = {1:'apple', 2:'ball'}
print(my_dict)
my_dict = {'name':'John', 1:[2,3,4]}
print(my_dict)
my_dict = dict({'name':'John',1:[2,3,4]})
print(my_dict['name'])
print(my_dict.get(1))
print(my_dict.get(1)[1])
print(4//3)
x=20
y=20
# if x==y:
#     print("True")
# else:
#     print("False")

# x=20
# y='20'
# if x==y:
#     print("True")
# else:
#     print("False")

x = True
y = False
print('x and y', x and y)
print('x or y', x or y)
print('not x is', not x)

#Identity Operator
x1 = 5
y1 = 5
x2 = 'hello'
y2 = 'hello'
print(x1 is not y1)
print(x2 is y2)

list = [1,2,2,33,4,5]
if x1 in list:
    print("Yes")
else:
    print("No")

list = [1,2,2,33,4,5]
if x1 not in list:
    print("No")
else:
    print("yes")

#if else..
num = 0
if num > 0:
    print("Positive")
elif num == 0:
    print("Zero")
else:
    print("Negative")

#for
digit = [0,2,2,4,35,5]
for i in range(len(digit)):
    print(i, " ", digit[i])
else:
    print("No item left.!")

#break
for value in "String":
    if value == 'i':
        break
    print(value)
print("The End")

#functions
def printMe(arg):
    print(arg)
    return
printMe("1st call!!")
printMe("2nd call!!")
