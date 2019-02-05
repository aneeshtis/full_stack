import matplotlib.pyplot as plt
#Line 1 values
x1 = [1,2,3]
y1 = [2,4,1]
#ploting the points
plt.plot(x1, y1, label = "line 1")

#Line 1 values
x2 = [1,2,3]
y2 = [4,1,3]
#ploting the points
plt.plot(x2, y2, label = "line 2")

plt.xlabel('x-axis')
plt.ylabel('y-axis')
plt.title('Demo Graph')
plt.legend()
#showing graph
plt.show()