module.exports = {
  variables: {
    name: (gnr) => gnr.args[0],
  },
  dirName: {
    template: {
      prefix: "{{",
      sufix: "}}",
    },
    only: (gnr) => true,
    replace: (gnr) => gnr.filename,
  },
  fileName: {
    template: {
      prefix: "{{",
      sufix: "}}",
    },
    only: (gnr) => true,
    replace: (gnr) => gnr.filename,
  },
  fileContent: {
    template: {
      prefix: "/*{*/",
      sufix: "/*}*/",
    },
    replace: (gnr) => gnr.content,
  },
};
