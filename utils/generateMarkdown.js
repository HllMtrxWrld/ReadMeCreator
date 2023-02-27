// function to generate markdown for README
function generateMarkdown(response) {
  return `# ${response.title}

`;
}

module.exports = generateMarkdown;
