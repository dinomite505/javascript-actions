// Import actions toolkit packages
const core = require('@actions/core');
const github = require('@actions/github');

try {
    // `who-to-greet` input that is defined in action metadata file
    const nameToGreet = core.getInput('who-to-greet');
    console.log(`Hello ${nameToGreet}!`);
    const time = (new Date()).toTimeString();
    core.setOutput("time", time);
    
}