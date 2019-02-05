#File Handling
#Read File
myfile = open("sample.txt")
content = myfile.read()
myfile.close
print(content)

#Seek
myfile = open("sample.txt")
print(myfile.read()) 
print("### Second Type Using Seek(Moves Cursor to begning of file)")
myfile.seek(0)
print(myfile.read()) 
myfile.close

#Read Content Using Loop
myfile = open("sample.txt")
content = myfile.read()
myfile.close
content = content.splitlines()
j = 0
for i in content:
    print(len(i), content[j])
    j = j + 1

#File Creation, Write And Append
fileObj = open("login5.txt","w")
fileObj.write("ictk\n")
fileObj.close()
fileObj = open("login5.txt","a")
fileObj.write("123")
fileObj.close

#Simple login using file
username = input("Enter Username: ")
password = input("Enter Password: ")
fileObj = open("login5.txt","r")
uname = fileObj.readline()
pwd = fileObj.readline()
uname = uname.rstrip("\n")
if username == uname and password == pwd:
    print("Login Successfull!!")
else:
    print("Authentication Failed!!")
fileObj.close


