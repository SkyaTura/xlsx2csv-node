const xlsx2csv = require('./index')

const [,, ...args] = process.argv

xlsx2csv({
  args,
  execPath: process.cwd(),
})
  .then(result => result && result.forEach(line => process.stdout.write(line+'\n')))
  .catch(result => process.stdout.write(result.message) && process.exit(result.exitCode))
  .then(process.exit)
