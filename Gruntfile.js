module.exports = function(grunt) {
	require("jit-grunt")(grunt);

	grunt.initConfig({
		less: {
			development: {
				options: {
					compress: true,
					yuicompress: true,
					optimization: 2
				},
				files: {
					"css/rainflex.css": "less/rainflex.less" // destination file and source file
				}
			}
		},
		watch: {
			styles: {
				files: ['less/**/*.less'], // which files to watch
				tasks: ['less'],
				options: {
					nospawn: true
				}
			}
		}
	});

	grunt.loadNpmTasks

	grunt.registerTask('default', ['less', 'watch']);
};