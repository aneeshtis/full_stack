"""This is a 
multiline docstring."""
#If Structure
if 2 > 3:
    print("true")
elif 6 > 7:
    print("true if else")
else:
    print("false")
print("=======================")
x = 6
y = "Aneesh"
z = 3 + 5j
print(type(z))
print(y,x)
print(x + z)
print("=======================")
p = float("4.2") # w will be 4.2
q = int(2.5) # q will be 2
r = str(7) # r will be '7'
print(p,q,r)
print("=======================")
b = "Hello, World!"
print(b[2:5]) #fifth char is omitted
a = " Hello, World! "
print(a.strip()) #remove white spaces
print("String Length:",len(a))
print(a.upper())
print(a.replace('Hello', 'Hi'))
print("Enter your name:")
#val = input()
#print("hi " + val)
print(a.split(","))
b = a.split(",")
print(b[0])
print("=======================")
thislist = ["apple", "banana", "cherry"]
for x in thislist:
    print(x)
if "cherry" in thislist:
    print("Cherry present")
thislist[1] = "orange"
thislist.insert(1,"grape")
print(thislist)#add at index and shift other items
thislist.append("banana")
print(thislist)
thislist.remove("cherry")
print(thislist)
thislist.pop(1)
print(thislist)
listAlso = list(("aneesh", "arjun")) #using constructor
print(listAlso)
print("=======================")
thistuple = ("apple", "banana", "cherry")
print(thistuple)
print("=======================")
thisset = {"apple", "banana", "cherry"}
print(thisset)
thisset.update(["orange", "mango", "grapes"])
print(thisset)
#we cannot change set items but can remove or add its items 
print("=======================")
thisdict =	{
  "brand": "Ford",
  "model": "Mustang",
  "year": 1964
}
x = thisdict.get("model")
print(thisdict, x)
for x, y in thisdict.items():
    print(x, y)
thisdict =	dict(brand="Ford", model="Mustang", year=1964)
print(thisdict)
print("=======================")
i = 0
while i < 5:
    print(i)
    i += 1
print("=======================")
for j in range(2,30,5):
    print(j)
else:
  print("Finally finished!")
print("=======================")
def myFunc(fname):
    print("My Name is ", fname)
myFunc("Aneesh")
import platform
print(platform.system())
import mymodule as mm
print(mm.myFunc())
print("=======================")
class person:
    ag = 0
    def __init__(self, name, age):
        print("Name is " + name)
        self.ag = age
obj = person("anee", 34)
print("Age is", obj.ag)
print("=======================")
import datetime
x = datetime.datetime.now()
print(x)
print(x.year)
print(x.strftime("%A"))
print(x.strftime("%Y"))
x = datetime.datetime(2020, 5, 17)
print(x)
print("=======================")

import json
# some JSON:
x =  '{ "name":"John", "age":30, "city":"New York"}'
# parse x:
y = json.loads(x)
# the result is a Python dictionary:
print(y["age"])

x = {
    "name": "John",
    "age": 30,
    "city": "New York"
}
# convert into JSON:
y = json.dumps(x)
# the result is a JSON string:
print(y)
print("=======================")
try:
    print("Hello")
except:
    print("Something went wrong")
else:
    print("Nothing went wrong")

print("Next Try Block")

try:
    print(k)
except:
    print("Something went wrong")
finally:
    print("The 'try except' is finished")

print("=======================")
print("File Handling")
f = open("text.txt", "a")
f.write("Just Created Now\n")
f.close
f = open("text.txt","r")
print(f.read())
import os
if os.path.exists("demofile.txt"):
    os.remove("demofile.txt")
else:
    print("The \"demofile.txt\" does not exist")

