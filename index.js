// Import actions toolkit packages
const core = require('@actions/core');
const github = require('@actions/github');

try {
    // `who-to-greet` input that is defined in action metadata file
    const nameToGreet = core.getInput('who-to-greet');
    console.log(`Hello ${nameToGreet}!`);
    const time = (new Date()).toTimeString();
    core.setOutput("time", time);
    // This gets the JSON webhook for the event that triggered the workflow
    const payload = JSON.stringify(github.context.payload, undefined, 2)
    console.log(`The event payload: ${payload}`);
}   catch (error) {
    // Refers to actions/core module. Provided error message will be displayed in the Actions logs
    core.setFailed(error.message);
}