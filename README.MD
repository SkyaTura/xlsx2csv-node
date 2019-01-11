# xlsx2csv-node

> Python wrapper for dilshod's [xlsx2csv](https://github.com/dilshod/xlsx2csv)


## Install

```
$ npm install xlsx2csv-node
```


## Usage

```js
const xlsx2csv = require('xlsx2csv-node')

xlsx2csv({
  xlsxfile: './foo.xlsx',
  hyperlinks: true,
}).then(console.log)
```

Check the [docs](https://github.com/dilshod/xlsx2csv) for all options

## Command line

```
$ npm install -g xlsx2csv-node
```

The arguments is the same as python's one.

## License

MIT © [Antonio Eduardo](https://skyatura.com.br)
