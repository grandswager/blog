// Start Hexo Development Server
let spawn = require('child_process').spawn;

let run = (cmd, args) => {
  child = spawn(cmd, args);

  child.stdout.on('data', data => process.stdout.write(data.toString()));
  child.on('close', code => console.log(`Child process exited with code ${code}.`));
};

// Start the development server
run('./node_modules/.bin/hexo', ['server'])

// Create a new post called "Bar"
// ./_node_modules/.bin/hexo new post "Bar"
// run('./node_modules/.bin/hexo', ['new', 'post', `"Bar"`]);



