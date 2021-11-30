module.exports = api => {
  if (api.env('test')) {
    return {
      presets: [
        ['@babel/preset-env', { targets: { node: 'current' } }]
      ]
    }
  } else {
    return {
      presets: [
        ['@babel/env', { targets: 'last 2 versions', modules: false }]
      ]
    }
  }
}
