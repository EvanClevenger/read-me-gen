
function generateMarkdown(data) {
  return `# ${data.title}
  ${data.description}
    ##  TABLE OF CONTENTS:
    *[INSTALLATION] (#installation)
    #[USAGE](#usage)
    #[CONTRIBUTERS](#contributers)
    #[COMMANDS](#commands)
    #[LICENCE](#lisence)
    #[QUESTIONS](#questions)
    ## INSTALLATION:
    OPEN THE CONSOLE AND RUN THE FOLLOWING COMMAND TO INSTALL DEPEDENCIES:
    \'\'\' ${data.installation}\'\'\'
    ### USAGE:
    ${data.usage}
    ### CONTRIBUTERS:
    ${data.contributors}
    ### COMMANDS:
    ${data.commands}
    ### LISENCE:
    THIS PROJECT IS LISENCED BY: ${data.lisence}

    ### QUESTIONS:
    LET ME KNOW IF YOU HAVE ANY QUESTIONS , CONTACT ME @:
    [GitHub](https://github.com/${data.username}) or
     by email at ${data.email}
    
`;
}

export default generateMarkdown;
