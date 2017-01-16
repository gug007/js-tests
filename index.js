const fs = require('fs');
const q = require('./src/questions');

const readme = q.reduce((p, val) => {
  p+=val.title + '\n';
  if(val.code) {
    p+=`\`\`\`javascript ${val.code} \`\`\` \n`;
  }
  return p
}, '#JavaScript Questions\n');

fs.writeFile("README.md", readme, err => {
  if(err) throw err;
  console.log("The file was created!");
});

console.log(readme);