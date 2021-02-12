// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateReadMe = require('./src/readMe-template.js');
const fs = require('fs');

// TODO: Create an array of questions for user input
const promptUser = readMeData => {
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
            validate: descriptionTextInput => {
                if (descriptionTextInput) {
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
            message: `Please provide and instructions or examples to use your project. (Required)
    To add a screenshot, create an assets/images folder in your repository and upload your screenshot to it.
    Then, using the relative filepath, add it to your README using the following syntax: ![alt text](./assets/images/screenshot.png)`,
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
            name: 'creditsText',
            message: 'Provide information for the collaborators and their GitHub profiles:',
            when: ({ confirmCreditText }) => confirmCreditText
        },
        {
            type: 'confirm',
            name: 'confirmContributingText',
            message: 'Would you like other developers to contribute to your application or package?',
            default: true
        },
        {
            type: 'input',
            name: 'contributingText',
            message: 'Please provide guidelines for how to do so.',
            when: ({ confirmContributingText }) => confirmContributingText
        },
        {
            type: 'confirm',
            name: 'confirmTestsText',
            message: 'Do you have any tests for your application?',
            default: true
        },
        {
            type: 'input',
            name: 'testsText',
            message: 'Please provide your tests here.',
            when: ({ confirmTestsText }) => confirmTestsText
        },
    ])
};

// TODO: Create a function to write README file
const writeToFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/README.md', fileContent, err => {
            // if there's an error, reject the Promise and send the error to the Promise's .catch() method
            if (err) {
                reject(err);
                //return out of the function here to make sure the Promise doesn't accidentally execute the resolve() function as well
                return;
            }

            //if everything went well, resolve the Promise and send the successful data to the .then() method
            resolve({
                ok: true,
                message: 'File created!'
            });
        });
    });
};

// Function call to initialize app
promptUser()
    .then(readMeData => {
        return generateReadMe(readMeData);
    })
    .then(pageReadMe => {
        return writeToFile(pageReadMe);
    })
    .catch(err => {
        console.log(err);
    });

