from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def home():
    return render_template("index.html") #this another exaple it s more advanced in this project i created a personal Card has soime infos and social media s infos about me ....

if __name__ == "__main__":
    app.run(debug=True)