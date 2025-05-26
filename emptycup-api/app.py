from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/api/designers', methods=['GET'])
def get_designers():
    return jsonify([
        {
            "id": 1,
            "name": "Epic Designs",
            "rating": 3,
            "description": "Passionate team of 4 designers working out of Bangalore with an experience of 4 years.",
            "projects": 57,
            "years": 8,
            "price": "$$",
            "phone_numbers": ["+91 - 984532853", "+91 - 984532854"]
        },
        {
            "id": 2,
            "name": "Studio - D3",
            "rating": 4,
            "description": "Designers with a passion for user experience from Bangalore.",
            "projects": 43,
            "years": 6,
            "price": "$$$",
            "phone_numbers": ["+91 - 984532853", "+91 - 984532854"]
        },
        {
            "id": 3,
            "name": "House of Design",
            "rating": 5,
            "description": "An award-winning design studio based in Bangalore, known for blending creativity with functionality.",
            "projects": 72,
            "years": 10,
            "price": "$$$",
            "phone_numbers": ["+91 - 9876543210", "+91 - 9876543211"]
        }
    ])

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)
