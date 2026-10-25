
# Lab 4A: JavaScript

Course: BIC21203 Web Development  
Name: Muhammad Mualimin Bin Muie 
Student ID: AI240018

# About This Lab

In this lab, I learned how to use JavaScript to make a webpage interactive. I completed three questions using HTML and JavaScript.

Each question focuses on different JavaScript concepts, such as functions, event listeners, conditions, loops, and DOM manipulation.

I used Visual Studio Code to write my code and tested the webpages using Google Chrome.

# Question 1: Interactive Text Changer

For Question 1, I created a simple webpage with a paragraph and a button. When the user clicks the button, the paragraph changes from "Welcome to my website!" to "Hello there!".

I used a JavaScript function and addEventListener() to make the button work.

### How to Run
### Step 1: Download the Project
1. Open this GitHub repository.
2. Click the green "Code" button.
3. Select "Download ZIP".
4. Extract the ZIP file to a folder on your computer.

### Step 2: Open the Project
1. Open the extracted project folder.
2. You will see three folders: Q1, Q2, and Q3.
3. Each folder contains two files:
   - index.html
   - script.js

### Step 3: Run Question 1
1. Open the Q1 folder.
2. Double-click the index.html file to open it in your default browser.
3. The webpage will display "Welcome to my website!".
4. Click the "Change Message" button.
5. The text will change to "Hello there!".

### Screenshots

Before clicking the button:

![Q1 Before](4A%20screenshot/Q1_before.png)

After clicking the button:

![Q1 After](4A%20screenshot/Q1_after.png)

## Question 2: Smart Number Validator

For Question 2, I created a webpage that checks the number entered by the user.

The program compares the number with 10 and displays a message. I used if, else if, and else statements to check the input.

The program also displays an error message if the user enters text or leaves the input empty.

### How to Run
### Step 4: Run Question 2
1. Go back to the main project folder.
2. Open the Q2 folder.
3. Double-click the index.html file to open it in your browser.
4. Enter a number in the input field.
5. Click the "Check" button.
6. The webpage will display a message based on the input.
7. Try different inputs such as 5, 10, 15, 10.5, abc, and an empty input.

### Test Results

| Input | Result |

| 5 | The number is lower than 10 |
| 10 | The number is equal to 10 |
| 15 | The number is higher than 10 |
| abc | Please enter a valid number! |
| Empty input | Please enter a valid number! |
| 10.5 | The number is higher than 10 |

### Screenshots

Input: 5

![Q2 Lower](4A%20screenshot/Q2_lower.png)

Input: 10

![Q2 Equal](4A%20screenshot/Q2_equal.png)

Input: 12

![Q2 Higher](4A%20screenshot/Q2_higher.png)

Invalid input:

![Q2 Invalid](4A%20screenshot/Q2_invalid.png)

Empty input:

![Q2 Empty](4A%20screenshot/Q2_empty.png)

Decimal input:

![Q2 Decimal](4A%20screenshot/Q2_decimal.png)

## Question 3: Dynamic Number Generator

For Question 3, I created a webpage that generates numbers from 1 to 5 when the user clicks the Generate button.

I used a for loop to repeat the process five times. Each number is displayed as a new list item using JavaScript DOM methods.

I also cleared the previous list before generating new numbers to prevent duplicate items.

### How to Run
### Step 5: Run Question 3
1. Go back to the main project folder.
2. Open the Q3 folder.
3. Double-click the index.html file to open it in your browser.
4. Click the "Generate" button.
5. A numbered list from 1 to 5 will appear.
6. Click the button again to check that no duplicate numbers appear.

### Screenshots

Before clicking Generate:

![Q3 Before](4A%20screenshot/Q3_before.png)

After clicking Generate:

![Q3 After](4A%20screenshot/Q3_after.png)

## What I Learned

From this lab, I learned how JavaScript works together with HTML. I now understand how to use functions and event listeners to respond to user actions.

I also learned how to check user input, use for loops, and update webpage content using DOM methods.
