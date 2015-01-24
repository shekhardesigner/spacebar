"use strict";

module.exports = function(grunt) {

	grunt.initConfig({
		sass: {
			dist: {
				options: {
					style: 'expanded'
				},
				files: {
					'styles/styles.css': 'styles/styles.scss'
				}
			}
		},
		watch: {
			css: {
				files: ['styles/*.scss'],
				tasks: ['sass']
			}
		}
  	});

	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.registerTask('default', ['watch']);

};