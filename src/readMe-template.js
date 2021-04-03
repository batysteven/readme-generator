//export function to generate entire page
const generateCreditText = creditText => {
    if (!creditText) {
        return '';
    }

return `
## Credits
${creditText}
`
}

const generateContributingText = contributingText => {
    if (!contributingText) {
        return '';
    }

return `
## Contributing
${contributingText}
`
}

const generateTestsText = testsText => {
    if (!testsText) {
        return '';
    }

return `
## Test
${testsText}
`
}

module.exports = templateData => {
    const { projectTitle, descriptionText, installationText, usageText, creditsText, licenseText, contributingText, testsText, name, github, email } = templateData;
    
return `
# ${projectTitle}

## Description
${descriptionText}

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [Credits](#credits)
* [License](#license)
* [Contributing](#contributing)
* [Test](#test)
* [Questions](#questions)

## Installation
${installationText}

## Usage
${usageText}
${generateCreditText(creditsText)}
${generateContributingText(contributingText)}
${generateTestsText(testsText)}
## Questions
${name}
${email}
http://github.com/${github}
Please reach out to me either by github or my email if you have any questions.

## License
${licenseText}

http://github.com/${github}
[GitHub](http://github.com/${github})
`;
};