const SuppressWarnings = require("suppress-warnings");
const runner = require("ts-node");

SuppressWarnings([() => true]);
runner.register({
    project: __dirname + "/tsconfig.json",
    compiler: "ttypescript",
});
require(`./issues/${process.argv[2]}.ts`);
