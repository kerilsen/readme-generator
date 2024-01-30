class License {
  constructor(number, type, link, badge) {
    this.number = number;
    this.type = type;
    this.link = link;
    this.badge = badge;
  }
}

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  // [![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)
  // [![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)
  // [![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)
  // [![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)
  // [![License: Apache 2.0](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)
  // [![License: MIT License](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
  // [![License: Boost 1.0](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)
  // [![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)

  license = `![GitHub License](https://img.shields.io/github/license/${username}/${repo})`
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  return ``
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(number) {
  const licenses = {
    0: () => {
      type = "AGPL v3 License";
      link = "https://www.gnu.org/licenses/agpl-3.0";
      badge = "https://img.shields.io/badge/License-AGPL_v3-blue.svg"
    },
    1: () => {
      type = "GPL v3 License";
      link = "https://www.gnu.org/licenses/gpl-3.0";
      badge = "https://img.shields.io/badge/License-GPLv3-blue.svg"
    },
    2: () => {
      type = "LGPL v3 License";
      link = "https://www.gnu.org/licenses/lgpl-3.0";
      badge = "https://img.shields.io/badge/License-LGPL_v3-blue.svg"
    },
    3: () => {
      type = "MPL 2.0 License";
      link = "https://opensource.org/licenses/MPL-2.0";
      badge = "https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg"
    },
    4: () => {
      type = "Apache 2.0 License";
      link = "https://opensource.org/licenses/Apache-2.0";
      badge = "https://img.shields.io/badge/License-Apache_2.0-blue.svg";
    },
    5: () => {
      license.type = "MIT License";
      license.link = "https://opensource.org/licenses/MIT";
      license.badge = "https://img.shields.io/badge/License-MIT-yellow.svg";
    },
    6: () => {
      license.type = "Boost 1.0";
      license.link = "https://www.boost.org/LICENSE_1_0.txt";
      license.badge = "https://img.shields.io/badge/License-Boost_1.0-lightblue.svg";
    },
    7: () => {
      license.type = "The Unlicense";
      license.link = "http://unlicense.org/";
      license.badge = "https://img.shields.io/badge/license-Unlicense-blue.svg";
    }
  })
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}\n
  ## Description\n
  The GitHub repository is here: ![GitHub Repo](https://github.com/${data.username}/${data.repo})\n
  The deployed link is here: ![Deployed page](https://${data.username}.github.io/${data.repo})\n
  ${data.description}\n
## Table of Contents\n
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)
- [Tests](#tests)
- [Questions](#questions)\n
  ## Installation\n
  ${data.installation}\n
  ## Usage\n
  ${data.usage}\n
  ## Contributing\n
  ${data.contributing}\n
  ## License\n
  ${renderLicenseSection(data.license.choices.indexOf(data.license))}\n
  ## Tests\n
  ${data.tests}\n
  ## Questions\n
  If you have any questions about this project, please contact me at ${data.email}.\n
  My GitHub profile is at: ![GitHub Profile](https://github.com/${data.username})\n`;
}

module.exports = generateMarkdown;
