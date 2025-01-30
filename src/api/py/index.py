from flask import Flask
app = Flask(__name__)

@app.route("/papi/hello")
def hello():
    return "<p>Hello from Python!</p>"
