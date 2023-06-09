# password-generator


## Description
This project enables users to generate a random password based on criteria they have selected. The application runs in the browser and will feature dynamically updated HTML and CSS which is powered by JavaScript code. 

This will be a responsive user interface that adapts to multiple screen sizes.

Users will first select the length of the password they want ranging from 8 to 128 characters. After that, users will be able to choose the criteria of their password - if they want Uppercase letters, Lowercase letters, Special Characters, or Numbers. The code will then generate a password based on the user's selections.

The live link for this project can be found at: https://karthikmurugappan.github.io/password-generator/

## User Story

```
AS AN employee with access to sensitive data
I WANT to randomly generate a password that meets certain criteria
SO THAT I can create a strong password that provides greater security
```

## Acceptance Criteria

```
GIVEN I need a new, secure password
WHEN I click the button to generate a password
THEN I am presented with a series of prompts for password criteria
WHEN prompted for password criteria
THEN I select which criteria to include in the password
WHEN prompted for the length of the password
THEN I choose a length of at least 8 characters and no more than 128 characters
WHEN asked for character types to include in the password
THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
WHEN I answer each prompt
THEN my input should be validated and at least one character type should be selected
WHEN all prompts are answered
THEN a password is generated that matches the selected criteria
WHEN the password is generated
THEN the password is either displayed in an alert or written to the page
```