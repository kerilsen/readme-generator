const licenses = [
  {
    "name": "AGPL v3 License",
    "link": "www.gnu.org/licenses/agpl-3.0",
    "badge": "AGPL_v3-blue.svg"
  },
  {
    "name": "GPL v3 License",
    "link": "www.gnu.org/licenses/gpl-3.0",
    "badge": "GPLv3-blue.svg"
  },
  {
    "name": "LGPL v3 License",
    "link": "www.gnu.org/licenses/lgpl-3.0",
    "badge": "LGPL_v3-blue.svg"
  },
  {
    "name": "MPL 2.0 License",
    "link": "opensource.org/licenses/MPL-2.0",
    "badge": "MPL_2.0-brightgreen.svg"
  },
  {
    "name": "Apache 2.0 License",
    "link": "opensource.org/licenses/Apache-2.0",
    "badge": "Apache_2.0-blue.svg"
  },
  {
    "name": "MIT License",
    "link": "opensource.org/licenses/MIT",
    "badge": "MIT-yellow.svg"
  },
  {
    "name": "Boost 1.0",
    "link": "www.boost.org/LICENSE_1_0.txt",
    "badge": "Boost_1.0-lightblue.svg"
  },
  {
    "name": "The Unlicense",
    "link": "unlicense.org",
    "badge": "Unlicense-blue.svg"
  }
]

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  return `![License: ${license.name}](https://img.shields.io/badge/License-${license.badge})`;
}

// TODO: Create a function that returns the license "link"
// If there is no license, return an empty string
function renderLicenseLink(license) {
  return `(https://${license.link})`;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  const link = renderLicenseLink(license);
  return `[License: ${license.name}]${link}`;
}

  // TODO: Create a function to generate markdown for README
  function generateMarkdown(data) {
    return `# ${data.title}\n
  ## Description\n
  ${renderLicenseBadge(licenses[data.license])}\n
  GitHub repository: [https://github.com/${data.username}/${data.repo}](https://github.com/${data.username}/${data.repo})\n
  Deployed link: [https://${data.username}.github.io/${data.repo}](https://${data.username}.github.io/${data.repo})\n
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
  ${renderLicenseSection(licenses[data.license])}\n
  ## Tests\n
  ${data.tests}\n
  ## Questions\n
  If you have any questions about this project, please contact me at ${data.email}.\n
  My GitHub profile is at: [https://github.com/${data.username}](https://github.com/${data.username})\n`;
  }

  module.exports = generateMarkdown;
