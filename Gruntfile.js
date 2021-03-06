/* eslint-env node */
"use strict";
module.exports = function (grunt) {
    grunt.initConfig({
        lintAll: {
            sources: {
                md:    [ "./*.md", "./docs/*.md"],
                js:    ["./src/**/*.js", "./tests/**/*.js", "./*.js", "!./tests/testem-fixtures/instrumented/**/*.js"],
                json:  ["src/**/*.json", "tests/**/*.json", "./*.json"],
                json5: [],
                other: ["./.*", "!./package-lock.json"]
            }
        }
    });

    grunt.loadNpmTasks("gpii-grunt-lint-all");
    grunt.registerTask("lint", "Perform all standard lint checks.", ["lint-all"]);
};
