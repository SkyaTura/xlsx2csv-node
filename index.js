const { PythonShell } = require('python-shell')
const stack = require('callsite')
const path = require('path')

const parseOptions = ({ xlsxfile, outfile, args, ...options }) => {
  if (args) return args
  const result = Object.entries(options).reduce(
    (acc, [prop, value]) => [
      ...acc,
      (value === true) ? `--${prop}` : `--${prop} value`
    ],
    []
  )
  if (xlsxfile) result.push(xlsxfile)
  if (outfile) result.push(outfile)
  return result
}

const xlsx2csv = ({ execPath, ...options } = {}) => {
  const scriptPath = execPath || path.dirname(stack()[1].getFileName())
  return new Promise((resolve, reject) =>
    PythonShell.run(
      path.relative(scriptPath, `${__dirname}/bin/xlsx2csv/xlsx2csv.py`),
      {
        scriptPath,
        mode: 'text',
        args: parseOptions(options),
      },
      (err, results) => err ? reject(err) : resolve(results)
    )
  )
}

module.exports = xlsx2csv
