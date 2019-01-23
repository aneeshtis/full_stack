#Class
class Person:
    name = "Aneesh"
    age = 24
    cgpa = 8.7
#End Person
student = Person()
print(student.name)
print(student.age)
print(student.cgpa)
print("====================================")

#Class initialization
class Person1:
    def __init__(self, name, age, cgpa):
        self.name = name
        self.age = age
        self.cgpa = cgpa
#End Person1
stud = Person1("Ajay", 23, 7.7)
print(stud.name, stud.age, stud.cgpa)
print("====================================")

#Class Var Scope
class Car:
    make = "Maruthi"
    def __init__(self,model,color):
        self.model = model
        self.color = color
#End car
myCar1 = Car("Toyota", "Green")
myCar2 = Car("Honda", "Red")
myCar3 = Car("Ford", "Blue")
print(myCar1.model, myCar1.color)
print("====================================")

#Encapusaltion
class Emp:
    name = "Aneesh"
    age = 28
    basicPay = 21000
    hra = 8000
    da = 60/100 * basicPay
    def getSalary(self):
        return self.basicPay + self.hra + self.da
#End Emp
myEmp = Emp()
print("Monthly Salary of ", myEmp.name, "is ", myEmp.getSalary())
print("====================================")

#Inheritance
class Company:
    com = "Tata"
#End Company
class Vehicle:
    type = "Sedan"
    yom = 2016
    mileage = 17
#End Vehicle
class Bus(Vehicle,Company): #Inherits vehicle
    type = "Coach"
    mileage = 8
#End Bus
myBus = Bus()
print(myBus.type, myBus.yom, myBus.mileage, myBus.com)
print("====================================")