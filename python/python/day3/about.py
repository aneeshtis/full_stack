from flask import Flask

app = Flask(__name__)
@app.route('/about/')
def about():
    return "<h1>Hello World. This is about page!!</h1>"

@app.route('/')
def home():
    return "Hello World. This is home page.......!!"

if __name__ == '__main__':
    app.run(debug=True)