module.exports = function(grunt) {

  // Configuration goes here
  grunt.initConfig ({

  // Uglify and concatonate js files into one
    uglify: {
      options: {
        mangle: false
      },
      my_target: {
        files: {
          'assets/js/output.min.js': ['assets/js/jquery-1.10.2.min.js', 'assets/js/bigSlide.min.js', 'assets/js/instagram_criteria.js', 'assets/js/jquery.csvToTable.js', 'assets/js/spectragram.min.js']
        }
      }
    },

	  sass: {                              // Task
	    dist: {                            // Target
	      options: {                       // Target options
	        style: 'compact'				       // possible choices: nested, compact, compressed, expanded.
	      },
	      files: {                         // Dictionary of files
	        'assets/css/styles.css': 'assets/css/sass/styles.scss',       // 'destination': 'source'
	      }
	    }
	  }
})

  // Load plugins here
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-sass');

  // Define your tasks here
  	grunt.registerTask('default', ['uglify', 'sass']);
};
