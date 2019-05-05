# Capturing Nothingness

## Instructions

In the initial commit to this project, you have been provided with files that contain a JavaScript module and some associated tests. Currently supporting functions (`isSkippedValue`, `isNumericValue`, `isNothingValue`, and `isAcceptableValue`) used by our calculator are causing the tests to fail. Your task is to rework these 4 functions so that they work as expected, making the tests pass.

## Calculation Rules
The `calculate` function runs an arithmetic calculation based upon an array of inputs (eg. `[2, '*', 10]`)

Each input should be either a number or an operand (`+`, `-`, `*`, `/`)

Our upstream data is inconsistent, so we _intentionally_ accept it and deal with it in the following ways:
* Stringified numbers (eg. `'2'`) should be treated as numbers
* `NULL` should be treated as zero
* `undefined` values should be ignored
* Empty string (eg. `''`) values should be ignored

## Provided Files

**hazyCalculator.js** - this file contains a JavaScript module for performing calculations with imperfect data

**tests.js** - this file contains tests for the functions in the `hazyCalculator` module

**package.json** - this file sets up the Node project including all the dev dependencies

**.babelrc** - this file allows mocha to read the code files written in ES6 syntax

**.gitignore** - this file sets the project up to ignore the node_modules folder when committing to git

## Exercise Submission

You should fork this repository and submit your working changes in a pull request to your forked repo.
