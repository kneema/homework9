const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

const writeFileAsync = util.promisify(fs.writeFile);

// user questions for readme 
 async function Readmeinput () {
  return inquirer.prompt([
    {
        message: "Type your Project Title",
        type: "input",
        name: "ProjectTitle"
    },
    {
        message: "Enter a quick description for your project",
        type: "input",
        name: "Description"
    },
    {
        message: "Link a screenshot",
        type: "input",
        name: "Screenshot"
    },
    {
        message: "Enter in your table of contents",
        type: "input",
        name: "Content"
    },
    {
        message: "Enter in details of installation",
        type: "input",
        name: "Installation"
    },
    {
        message: "Enter in details of Usage",
        type: "input",
        name: "Usage"
    },
    {
        message: "Select License information",
        type: "list",
        name: "License",
        choices: [
            "Apache License 2.0",
            "GNU General Public License v3.0",
            "MIT License",
            "Unsure",
        ]
    },
    {
        message: "Enter in any Contributors",
        type: "input",
        name: "Contributing"
    },
    {
        message: "Enter in any Tests",
        type: "input",
        name: "Tests"
    },
    {
        message: "Enter in any Questions",
        type: "input",
        name: "Questions"
    },
    {
        message: "Enter your GitHub username",
        type: "input",
        name: "username",
        validate: function(answer)
        { if (answer == "") {
            return "You forgot to enter your GitHub Username";
        }
    return true;
        }    
            }, 
    {
        message: "Enter your GitHub email",
        type: "input",
        name: "email",
        validate: function(answer)
        { if (answer == "") {
            return "You forgot to enter Your GitHub Email";
        }
    return true;
         }    
            }   
    
]);
}

async function generateReadme () {
console.log("Making your ReadMe...be patient!")

const readmeEntered = await Readmeinput ();
console.log(readmeUserData)

const readmeString = `
# ${readmeEntered.ProjectTitle}
${readmeEntered.Description}
${readmeEntered.Screenshot}
${readmeEntered.Content}
${readmeEntered.Installation}
${readmeEntered.Usage}
${readmeEntered.License}
${readmeEntered.Contributing}
${readmeEntered.Tests}
${readmeEntered.Questions}
${readmeEntered.username}
${readmeEntered.email}`

const FollowGitHub = `https://img.shields.io/github/followers/${username}}?label=Follow%20Me%20On%20GitHub&style=social`;

const result = await writeFileAsync('README.md',
readmeUserString,
)

console.log("Your ReadMe has been generated!");
};

generateReadme ()