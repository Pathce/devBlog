module.exports = function (env) {
  console.log(env);
  if (env.client) return require(`./webpack.client.js`);
  else if (env.server) return require(`./webpack.client.js`);
  else if (env.dev) return require('./webpack.dev.js');
}