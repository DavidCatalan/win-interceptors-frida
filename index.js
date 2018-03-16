// import fridaCompile from 'frida-compile';

const compileReplacements = (options, ...args) =>
  new Promise((resolve, reject) => {
    if (args.length === 0) {
      reject();
    }
    // TODO
    resolve();
  });

module.exports = { compileReplacements };
