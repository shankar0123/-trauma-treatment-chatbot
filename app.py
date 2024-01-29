from flask import Flask, render_template, request, jsonify
import openai

app = Flask(__name__)
openai.api_key = 'your-api-key'

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/send_message', methods=['POST'])
def send_message():
    user_input = request.json['message']
    # Call your chatbot function here with user_input and get the reply
    reply = some_chatbot_function(user_input)
    return jsonify({'reply': reply})

if __name__ == '__main__':
    app.run(debug=True)
