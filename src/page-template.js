const generateReadMe = () => {
    return `
    #${projectTitle}

    ## Description
    ${descriptionText}

    ## Table of Contents
    * [Installation](#installation)
    * [Usage](#usage)
    * [Credits](#credits)
    * [License](#license)
    
    ## Installation
    ${installationText}

    ## Usage
    ${usageText}

    ![alt text](assets/images/screenshot.png)

    ## Credits
    ${creditText}

    ## License
    ${licenseText}
    `;
};