const exec = require("child_process").exec
const pathModule = require("path")

var toolsetDir = pathModule.resolve(process.cwd(), "toolset")
var scriptPath = pathModule.resolve(toolsetDir, "prepareThingyForService.pl")
exec(scriptPath, {cwd:toolsetDir}, (err, out, stderr) => console.log(out + "\nindividualized service!"))