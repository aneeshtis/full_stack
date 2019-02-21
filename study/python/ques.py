print("Ques.1 ===============")
print('a b c d'.split())

print("Ques.2 ===============")
print(7>10)
print(4<16)
print(4==4)
print(4<=4)
print(4!=4)

print("Ques.3 ===============")
m = [[x,y] for x in range(3) for y in range(4)]
print(len(m))

print("Ques Des.4 ===============")
import re
myString =  "UN was established on 24-10-1945. India got freedom on 15-08-1947. As year 1947 as for pak as well"
xList = re.findall("[0-9]{4}" ,myString)
print(xList)
xList = list(dict.fromkeys(xList))
print(len(xList))

print("Ques Des.5 ===============")
from collections import Counter
myList = [1,2,3,4,2,2]
data = Counter(myList)
print(data.most_common(1)[0][0])
print(max(myList, key = data.get))

print("Ques Sample ===============")
list = ['abcd', 786 , 2.23, 'john', 70.2]
print(list[2:3])
