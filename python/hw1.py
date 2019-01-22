def grade():
    markList = [0,0,0,0,0]
    subject = ("English", "Hindi", "Physics", "Maths", "Computer")
    total = 0
    print("=================================================")
    name = input("Enter your name: ")
    for item in range(5):
        markList[item] = input("Enter mark of " + subject[item] + ": ")
        if int(markList[item]) < 0 or int(markList[item]) > 100:
            print("Invalid Mark!! Please Re-enter The Marks")
            total = -1
            break
        else:
            total = total + int(markList[item])
    else:
        print("Finished inputing marks !! and Grade of " + name)
        
    avg = total/5
    
    if total != -1:
        if avg < 35:
            print("Failed and your percetage is: ", avg)
        elif avg > 35 and avg < 50:
            print("Third Class With Percentage: ", avg)
        elif avg >= 50 and avg < 60:
            print("Second Class With Percentage: ", avg)
        elif avg >=60 and avg < 80:
            print("First Class With Percentage: ", avg)
        else:
            print("Distinction With Percentage: ", avg)
        next_std = input("Do want to enter mark of another student? y/n")
        if next_std == 'y':
            grade()
        else:
            print("Thank you for inputing!!")
    else:
        grade()
grade()

