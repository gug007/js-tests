const q = require('./src/questions');

const readme = q.reduce((p, val) => {
  p+=val.title;
  if(val.code) {
    p+=`\r\n\`\`\`javascript ${val.code} \`\`\` \r\n`;
  }
  return p
}, '');

console.log(readme);