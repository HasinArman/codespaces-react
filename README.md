# Data-Driven Web Application

## Overview

This project demonstrates the creation of a data-driven web application using Flask as the backend framework and React for the frontend. The application visualizes data from a CSV file containing health-related information.

## Setting Up the Project

1. **Flask Backend:**
   - Created a Flask backend with a simple API endpoint (`/api/data`) to serve data from a CSV file.
   - Installed necessary dependencies (`Flask`, `pandas`) in a virtual environment.

2. **React Frontend:**
   - Set up a React frontend in the `frontend` directory.
   - Used `create-react-app` to create a new React app.
   - Integrated Chart.js for data visualization.
   - Fetched and processed data from the Flask API endpoint.

3. **Dataset:**
   - Uploaded the dataset file (`HeartFactorsDiseaseByHasin.csv`) to the project.

4. **File Structure:**
   - Organized project files into appropriate directories (`data`, `frontend`, `static`, `templates`, etc.).

5. **Advantages:**
   - **Separation of Concerns:** By using Flask for the backend and React for the frontend, the project benefits from a clear separation of concerns, making it easier to maintain and scale.
   - **Data Visualization:** Utilized Chart.js for efficient and customizable data visualization within the web application.
   - **Clean Code Structure:** Organized the project into meaningful directories, improving code readability and maintainability.

## How to Run the Project

1. Activate the virtual environment:
   source venv/bin/activate 
2. Install Flask and Pandas:
   pip install flask pandas
3. Run Flask App:
   python app.py
4. In another terminal tab, navigate to the frontend directory and run the React app:
   cd frontend
   npm install
   npm start
   Open the application in a web browser at http://localhost:3000.

This README provides an overview of the project, explains its structure, and includes instructions on how to set up and run the application. Adjust it as needed for your specific project details.






