var COMPATIBILITY = [
  'last 2 versions',
  'ie >= 9'
];

module.exports = function(grunt) {
  var hljs = require('highlight.js');

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    assemble: {
      options: {
        flatten: false,
        assets: 'dist/assets/',
        data: ['src/data/*.json'],
        marked: {
          gfm: true,
          sanitize: false,
          highlight: function(code, lang) {
            if (lang === undefined) lang = 'bash';
            if (lang === 'html') lang = 'xml';
            if (lang === 'js') lang = 'javascript';
            return '<div class="code-container">' + hljs.highlight(lang, code).value + '</div>';
          }
        }
      },
      dist: {
        options: {
          partials: ['src/partials/**/*.html'],
          helpers: ['src/helpers/*.js'],
          layout: 'src/layouts/default.html'
        },
        expand: true,
        cwd: 'src/pages/',
        src: '**/*.html',
        dest: 'dist/'
      }
    },

    sass: {
      options: {
        includePaths: [
          'bower_components/foundation/scss'
        ]
      },
      dist: {
        options: {
          sourceMap: true,
          outputStyle: 'nested'
        },
        files: {
          'dist/assets/css/app.css': 'src/assets/scss/app.scss'
        }        
      }
    },

    postcss: {
      options: {
        processors: [
          require('autoprefixer')({ browsers: COMPATIBILITY })
        ]
      },
      dist: {
        src: 'dist/assets/css/app.css'
      }
    },

    copy: {
      dist: {
        files: [
          {expand:true, cwd: 'src/assets/', src: ['**/*','!{scss,js}/**/*'], dest: 'dist/assets/', filter:'isFile'},
          {expand:true, cwd: 'bower_components/modernizr/', src: 'modernizr.js', dest: 'dist/assets/js', filter:'isFile'}
        ]
      }
    },

    uglify: {
      options: {
        compress: false,
        mangle: false,
        sourceMap: true
      },
      dist: {
        files: {
          'dist/assets/js/all.js': [
            'bower_components/jquery/dist/jquery.js',
            'bower_components/foundation/js/foundation.js',
            'src/assets/js/*'
          ]
        }
      }
    },

    clean: ['dist/'],

    watch: {
      grunt: { 
        files: ['Gruntfile.js'],
        tasks: ['build'] 
      },

      sass: {
        files: 'src/assets/scss/**/*.scss',
        tasks: ['sass', 'postcss']
      },

      copy: {
        options: {cwd: 'src/assets/'},
        files: ['**/*','!{scss,js}/**/*'],
        tasks: ['copy']
      },

      uglify: {
        options: {cwd: 'src/assets/js'},
        files: ['**/*.js'],
        tasks: ['uglify']
      },

      assemble_all: {
        files: ['src/{partials,layouts}/**/*.html'],
        tasks: ['assemble'],
        options: {livereload:true}
      },

      assemble_pages: {
        files: ['src/pages/**/*.html'],
        tasks: ['newer:assemble'],
        options: {livereload:true}
      }
    }
  });

  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('assemble');
  grunt.loadNpmTasks('grunt-newer');
  grunt.loadNpmTasks('grunt-postcss');

  grunt.registerTask('build', ['clean', 'sass', 'postcss', 'uglify', 'assemble', 'copy']);
  grunt.registerTask('default', ['build', 'watch']);
}