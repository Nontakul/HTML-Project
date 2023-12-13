function calculateBMI() {
    // Get values from input fields
    var weight = document.getElementById('weight').value;
    var height = document.getElementById('height').value;

    // Check if inputs are empty
    if (weight === '' || height === '') {
        alert('Please enter both weight and height.');
        return;
    }

    // Convert height to meters
    var heightInMeters = height / 100;

    // Calculate BMI
    var bmi = weight / (heightInMeters * heightInMeters);

    // Display the result
    var resultElement = document.getElementById('result');
    resultElement.innerHTML = '<h4>Your BMI is: ' + bmi.toFixed(2) + '</h4>';

    // Interpret the result
    if (bmi < 18.5) {
        resultElement.innerHTML += '<p class="text-warning">Underweight</p>';
    } else if (bmi >= 18.5 && bmi < 25) {
        resultElement.innerHTML += '<p class="text-success">Normal weight</p>';
    } else if (bmi >= 25 && bmi < 30) {
        resultElement.innerHTML += '<p class="text-warning">Overweight</p>';
    } else {
        resultElement.innerHTML += '<p class="text-danger">Obese</p>';
    }
}
