# Disease Prediction
This is a simple web application for predicting diseases based on symptoms. Users can enter their symptoms, select from the suggested symptoms, and view the selected symptoms. They can also predict the disease based on the selected symptoms.

## Technologies Used
- React: A JavaScript library for building user interfaces.
- Lottie: A library for rendering animations in the browser.
- Axios: A promise-based HTTP client for making API requests.
## Installation
- Clone the repository: git clone https://github.com/your-username/your-repo.git
- Navigate to the project directory: cd your-repo
- Install the dependencies: `npm install`
## Usage
- Start the development server: `npm start`
- Open your browser and visit http://localhost:3000 to access the application.
## Features
- Auto-suggestions: As the user types in the symptoms, the application provides suggestions based on the entered text.
- Selecting Symptoms: Users can select symptoms from the suggestions by clicking on them.
- Displaying Selected Symptoms: The selected symptoms are displayed in a list.
- Resetting Selections: Users can reset the selected symptoms by clicking the "Reset Selections" button.
- Disease Prediction: Users can predict the disease based on the selected symptoms by clicking the "Predict" button.
## API Integration
The application makes a POST request to the following API endpoint to predict the disease:

Endpoint: https://disease.swoyam.engineer/predict

### Payload:

```json
{
  "symptoms": [
    "string" // List of selected symptoms
  ]
}
```
### Response:

```json
{
  "disease": "string" // Name of the predicted disease
}
```
Ensure that you have a stable internet connection and that the API endpoint is accessible.

## Contributing
Contributions are welcome! If you find any issues or want to enhance the application, feel free to open a pull request.

## License
This project is licensed under the MIT License.