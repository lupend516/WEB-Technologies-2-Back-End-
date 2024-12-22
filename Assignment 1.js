const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// Middleware для обработки формы
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Статический CSS
app.get('/style.css', (req, res) => {
    res.send(`
        body {
            font-family: Arial, sans-serif;
            text-align: center;
            margin: 20px;
        }
        h1 {
            color: #4CAF50;
        }
        form {
            margin-top: 20px;
        }
        label, input, select {
            display: block;
            margin: 10px auto;
        }
        button {
            background-color: #4CAF50;
            color: white;
            padding: 10px 20px;
            border: none;
            cursor: pointer;
        }
        button:hover {
            background-color: #45a049;
        }
        a {
            color: #4CAF50;
            text-decoration: none;
        }
        a:hover {
            text-decoration: underline;
        }
    `);
});

// Главная страница с формой
app.get('/', (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <link rel="stylesheet" href="/style.css">
            <title>BMI Calculator</title>
        </head>
        <body>
            <h1>BMI Calculator</h1>
            <form action="/calculate" method="post">
                <label for="weight">Weight (kg):</label>
                <input type="number" id="weight" name="weight" step="0.1" required>
                <label for="height">Height (m):</label>
                <input type="number" id="height" name="height" step="0.01" required>
                <label for="age">Age:</label>
                <input type="number" id="age" name="age" required>
                <label for="gender">Gender:</label>
                <select id="gender" name="gender" required>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                </select>
                <button type="submit">Calculate</button>
            </form>
        </body>
        </html>
    `);
});

// Маршрут для расчета BMI
app.post('/calculate', (req, res) => {
    const { weight, height, age, gender } = req.body;

    // Проверка на валидность данных
    if (!weight || !height || weight <= 0 || height <= 0) {
        res.send(`
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <link rel="stylesheet" href="/style.css">
                <title>Error</title>
            </head>
            <body>
                <h1>Error</h1>
                <p>Please provide valid and positive numbers for weight and height.</p>
                <a href="/">Go back</a>
            </body>
            </html>
        `);
        return;
    }

    const bmi = (weight / (height * height)).toFixed(2);
    let category = '';
    let tips = '';

    // Определение категории BMI
    if (bmi < 18.5) {
        category = 'Underweight';
        tips = 'Eat more nutritious food and consult a dietitian.';
    } else if (bmi < 25) {
        category = 'Normal weight';
        tips = 'Maintain your current lifestyle!';
    } else if (bmi < 30) {
        category = 'Overweight';
        tips = 'Exercise regularly and monitor your diet.';
    } else {
        category = 'Obesity';
        tips = 'Seek medical advice for a personalized plan.';
    }

    // Отправка результата
    res.send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <link rel="stylesheet" href="/style.css">
            <title>BMI Result</title>
        </head>
        <body>
            <h1>Your BMI is ${bmi}</h1>
            <p>Category: ${category}</p>
            <p>Health Tips: ${tips}</p>
            <a href="/">Go back</a>
        </body>
        </html>
    `);
});

// Запуск сервера
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});
