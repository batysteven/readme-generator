// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateReadMe = require('./src/readMe-template.js');
// TODO: Create an array of questions for user input
const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your name? (Required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter your name!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: 'Enter your GitHub Username (Required)',
            validate: githubInput => {
                if (githubInput) {
                    return true;
                } else {
                    console.log('Please enter your GitHub username!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter your email address (Required)',
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('Please enter your email address!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'projectTitle',
            message: 'Enter your Project Title (Required)',
            validate: projectTitleInput => {
                if (projectTitleInput) {
                    return true;
                } else {
                    console.log('Please enter your Project Title!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'descriptionText',
            message: 'Enter a thorough and detailed description about your project (Required)',
            validate: descritpionTextInput => {
                if (descritpionTextInput) {
                    return true;
                } else {
                    console.log('Please enter a thorough and detailed description about your project!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'installationText',
            message: 'Please enter step-by-step instructions to get your development environment running, or to install your project (Required)',
            validate: installationTextInput => {
                if (installationTextInput) {
                    return true;
                } else {
                    console.log('Please enter step-by-step instructions to get your development environment running, or to install your project!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'usageText',
            message: 'Please provide and instructions or examples to use your project. (Required)',
            message: 'To add a screenshot, create an assets/images folder in your repository and upload your screenshot to it.',
            message: 'Then, using the relative filepath, add it to your README using the following syntax: ![alt text](./assets/images/screenshot.png)',
            validate: usageInput => {
                if (usageInput) {
                    return true;
                } else {
                    console.log('Please provide and instructions or examples to use your project!');
                    return false;
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmCreditText',
            message: 'Would you like to list collaborators and their GitHub profiles if any for the "Credits"?',
            default: true
        },
        {
            type: 'input',
            name: 'creditText',
            message: 'Provide information for the collaborators and their GitHub profiles:',
            when: ({ confirmCreditText }) => confirmCreditText
        }
    ])
}

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
