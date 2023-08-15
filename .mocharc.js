// File where we can control configuration of mocha
module.exports = {
    ui: 'tdd',
    timeout: 2000,
    slow: 150,
    reporter: 'spec',
    retries: 0,
    ui: 'bdd',
    'watch-files': ['test/**/*.js'],
}