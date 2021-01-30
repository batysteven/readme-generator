//export function to generate entire page
module.exports = templateData => {
    const { projectTitle, descriptionText, installationText, usageText, creditText, licenseText, contributingText, test, name, github, email } = templateData;
    
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

    ![alt text](assets/images/screenshot.png)

    ## Credits
    ${creditText}

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