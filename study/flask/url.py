from flask import Flask, redirect, url_for, request, render_template
app = Flask(__name__)

@app.route('/')
def index():
    return render_template('login.html')

@app.route('/result')
def result():
   dict = {'phy':50,'che':60,'maths':70}
   return render_template('result.html', result = dict)

@app.route('/admin')
def hello_admin():
   return 'Hello Admin'

@app.route('/guest/<guest>')
def hello_guest(guest):
   return 'Hello %s as Guest' % guest

@app.route('/user/<name>')
def hello_user(name):
    if name =='admin':
        return redirect(url_for('hello_admin'))
    else:
        return redirect(url_for('hello_guest',guest = name))

@app.route('/login', methods = ['POST', 'GET'])
def login():
    if request.method == 'POST':
        user = request.form['nm']
        return redirect(url_for('hello_user', name = user))
    else:
        user = request.args.get('nm')
        return redirect(url_for('hello_user', name = user))

if __name__ == '__main__':
   app.run(debug = True)

#Set session
    #session['username'] = request.form['username']
# remove the username from the session if it is there
   #session.pop('username', None)
#other requirement for session
    #from flask import Flask, session, redirect, url_for, escape, request
    #app = Flask(__name__)
    #app.secret_key = 'any random string’

#For forms
    #https://www.tutorialspoint.com/flask/flask_wtf.htm
