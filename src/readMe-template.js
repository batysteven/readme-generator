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

module.exports = templateData => {
    const { projectTitle, descriptionText, installationText, usageText, creditsText, licenseText, contributingText, test, name, github, email } = templateData;
    
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
    ## License
    ${licenseText}

    ## Contributing
    ${contributingText}

    ## Test
    ${test}

    ## Questions
    ${name}
    ${email}
    ${github}(#${github})
    Please reach out to me either by github or my email if you have any questions.
    `;
};