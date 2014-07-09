# Require.js Library Skeleton


### Structure

- **demo** - examples with Inline, AMD, CommonJS script loading
- **dist** - minified JavaScript file + source map
- **src**/*vchatjs.js* - entry-file that pulls all other modules
- **src**/*_start.js* - adds compatibility for AMD, CommonJS and Browser globals
- **src**/*_end.js* - serves the same purpose of the initial require() call that data-main does
- **test/spec** - jasmine and mocha specs
- **test**/SpecRunnerJasmine.html - standalone jasmine html spec runner
- **test**/SpecRunnerMocha.html - standalone mocha html spec runner
- *karma.conf.js* — karma test runner configuration
- **test**/*test-main.js* — configures karma to use Require.js for the tests