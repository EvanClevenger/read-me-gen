// All the packages I used in this challenge
const inquirer =  require("inquirer");
const fs = require('fs');
const generateMarkdown = require("./utils/generateMarkdown.js");
const writeFile = util.promisify(fs.writeFile);
const nodeReadME = "./utils/generateMarkdown";

// Question in an array format
const questions = () => {

    return inquirer.prompt([ 
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your Project?',
           
        },
        {
            type: 'input',
            name: 'descrpition',
            message: 'Write a breif Description of your Project'
            
        },
         
         {
             type : 'input',
             name : 'installation',
             message: 'What did you Install for your project?'
         },
         {
            type: 'checkbox',
            name: 'lisence',
            message: 'What kind of lisencing should your project have?',
            choices:[{name: 'MIT'}, {name:'BSD 2'}, {name:'BSD 3'},{name:'None'}]

         },
         {
             type: 'input',
             name: 'usage',
             message: 'How do we use this App?'
         },
         {
             type: 'input',
             name:'contributors',
             message: 'Did anyone else contribute to this project?'
         },
         {
             type:'input',
             name: 'commands',
             message: 'What commands are used to run the App?'
         },
         {
             type: 'input',
             name:'email',
             message: 'What is your email?'
         },
         {
             type:'input',
             name: 'uname',
            message: 'What is your Github Uname?'
        }
    ])
};
  
// TODO: Create a function to initialize app
 async function init() {
   try {
    const answers = await questions();
    const generateRead = generateMarkdown(answers);
    await writeFile(nodeReadME, generateRead) //issue
    console.log('README has been generated!')
    }
    catch(err){
        console.log(err)
      }
      
  }
init();