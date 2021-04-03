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
        {
            type: 'confirm',
            name: 'confirmLicenseText',
            message: 'Would you like to add a license to your application? If you need help choosing a license use, http://choosealicense.com/',
            default: true
        },
        {
            type: 'list',
            name: 'licenseText',
            message: 'Please select a license from these choices:',
            choices: [{name: "GNU LGPLv3", value: `                    GNU LESSER GENERAL PUBLIC LICENSE
            Version 3, 2021

Copyright (C) 2007 Free Software Foundation, Inc. <https://fsf.org/>
Everyone is permitted to copy and distribute verbatim copies
of this license document, but changing it is not allowed.`}, {name: "Apacha License 2.0", value: `Copyright 2021

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.`}, {name: "MIT License", value: `MIT License

Copyright (c) 2021

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE..`}, {name: "Boost Software License 1.0", value: `Boost Software License - Version 1.0 - 2021

Permission is hereby granted, free of charge, to any person or organization
obtaining a copy of the software and accompanying documentation covered by
this license (the "Software") to use, reproduce, display, distribute,
execute, and transmit the Software, and to prepare derivative works of the
Software, and to permit third-parties to whom the Software is furnished to
do so, all subject to the following:

The copyright notices in the Software and this entire statement, including
the above license grant, this restriction and the following disclaimer,
must be included in all copies of the Software, in whole or in part, and
all derivative works of the Software, unless such copies or derivative
works are solely in the form of machine-executable object code generated by
a source language processor.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE, TITLE AND NON-INFRINGEMENT. IN NO EVENT
SHALL THE COPYRIGHT HOLDERS OR ANYONE DISTRIBUTING THE SOFTWARE BE LIABLE
FOR ANY DAMAGES OR OTHER LIABILITY, WHETHER IN CONTRACT, TORT OR OTHERWISE,
ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
DEALINGS IN THE SOFTWARE.`}, {name: "The Unlicense", value: `This is free and unencumbered software released into the public domain.

Anyone is free to copy, modify, publish, use, compile, sell, or
distribute this software, either in source code form or as a compiled
binary, for any purpose, commercial or non-commercial, and by any
means.

In jurisdictions that recognize copyright laws, the author or authors
of this software dedicate any and all copyright interest in the
software to the public domain. We make this dedication for the benefit
of the public at large and to the detriment of our heirs and
successors. We intend this dedication to be an overt act of
relinquishment in perpetuity of all present and future rights to this
software under copyright law.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS BE LIABLE FOR ANY CLAIM, DAMAGES OR
OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE,
ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.

For more information, please refer to <https://unlicense.org>`,
        when: ({ confirmLicenseText }) => confirmLicenseText}]
        }
    ])
};

// TODO: Create a function to write README file
const writeToFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/README.md', fileContent, err => {
            if (err) {
                reject(err);
                return;
            }
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