// function to generate markdown for README
function generateMarkdown(response) {
  return `# ${response.title}

## Description
${response.description}

## Installation
${response.installation}

## Usage
${response.usage}

## Contributing
${response.contributing}

## Tests
${response.tests}

## License
Licensed by ${response.license}

## Questions
${response.questions}
* GitHub: [${response.username}](https://github.com/${response.username})
* Email: ${response.email}

`;
}

module.exports = generateMarkdown;
