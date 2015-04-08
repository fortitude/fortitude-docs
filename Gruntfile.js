module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    app: {
      fonts:      'src/fonts',
      images:     'src/images',
      scss:       'src/scss',
      js:         'src/js',
      dist:       'dist',
      tmp:        'tmp',
      fortitude:  '/Users/lifeiscontent/Workspace/fortitude-sass'
    },

    hologram: {
      generate: {
        options: {
          config: 'hologram_config.yml'
        }
      }
    },

    copy: {
      hologram: {
        files: [
          {
            expand: true,
            cwd: '<%= app.fortitude %>/app/assets/stylesheets/',
            src: '**/*.scss',
            dest: '<%= app.tmp %>/scss'
          },
          {
            expand: true,
            cwd: '<%= app.fortitude %>/app/assets/javascripts/',
            src: '**/*.js',
            dest: '<%= app.tmp %>/js'
          },
          {
            expand: true,
            cwd: '<%= app.scss %>',
            src: '**/*.{scss,md}',
            dest: '<%= app.tmp %>/scss'
          },
          {
            expand: true,
            cwd: '<%= app.js %>',
            src: '**/*.js',
            dest: '<%= app.tmp %>/js'
          },
          {
            expand: true,
            cwd: 'src',
            src:  [
              '{fonts,images}/**/*',
            ],
            dest: '<%= app.tmp %>/assets'
          },
          {
            expand: true,
            cwd: 'src',
            src:  '{renderers,templates}/**/*',
            dest: '<%= app.tmp %>'
          },
          {
            expand: true,
            cwd: 'src/partials',
            src:  '**/*',
            dest: '<%= app.tmp %>/assets'
          }
        ]
      },
    },

    connect: {
      server: {
        options: {
          port: 8080,
          base: {
            path: '<%= app.dist %>',
            index: 'index.html'
          }
        }
      }
    },

    watch: {
      hologram: {
        files: [
          '<%= app.fortitude %>/app/assets/stylesheets/**/*.scss',
          '<%= app.fortitude %>/app/assets/javascripts/**/*.js',
          'src/**/*'
        ],
        tasks: ['build']
      }
    },

    sass: {
      hologram: {
       options: {
          style: 'compact',
          loadPath: [
            '<%= app.scss %>',
            '<%= app.fortitude %>/app/assets/stylesheets'
          ],
          bundleExec: true,
          compass: true,
          sourcemap: 'none'
        },
        files: {
          '<%= app.tmp %>/css/index.css' : '<%= app.tmp %>/scss/index.scss'
        }
      }
    },

    autoprefixer: {
      options: {
        browsers: ['last 2 versions', 'ie 9']
      },
      hologram: {
        expand: true,
        flatten: true,
        src: '<%= app.tmp %>/css/*.css',
        dest: '<%= app.tmp %>/assets/stylesheets'
      }
    },

    concat: {
      hologram: {
        src: ['<%= app.tmp %>/js/**/*.js'],
        dest: '<%= app.tmp %>/bundle.js'
      }
    },

    uglify: {
      hologram: {
        files: {
          '<%= app.tmp %>/assets/javascripts/index.js' : '<%= app.tmp %>/bundle.js'
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');

  // Sass resources
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-autoprefixer');

  // JS resources
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.loadNpmTasks('grunt-hologram');

  grunt.registerTask('config', 'Build hologram.yml', function(){
    if(grunt.file.exists(grunt.config.get(['hologram', 'generate', 'options', 'config']))){
      return true;
    }
  });

  grunt.registerTask('build', ['copy:hologram', 'sass:hologram', 'autoprefixer:hologram', 'concat:hologram', 'uglify:hologram', 'hologram']);
  grunt.registerTask('serve', ['build', 'connect', 'watch']);


};