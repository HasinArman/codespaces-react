from flask import Flask, render_template, jsonify
import pandas as pd

app = Flask(__name__)

# Load your data from the CSV file
data = pd.read_csv('data/heartdiseasevisualization.csv')

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/api/data')
def get_data():
    # Ensure that 'AgeCategory' and 'BMI' columns exist in your dataset
    if 'AgeCategory' in data.columns and 'BMI' in data.columns:
        # Convert the data to JSON and return
        return jsonify(data[['AgeCategory', 'BMI']].to_dict(orient='records'))
    else:
        return jsonify({"error": "Invalid dataset structure. 'AgeCategory' and 'BMI' columns are required."})

if __name__ == '__main__':
    app.run(debug=True)
