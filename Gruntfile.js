module.exports = function(grunt) {
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-imagemin');

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        meta: {
            cssfiles: ['_ui/*.css', '!_ui/*.min.css'],
            images: ['_ui/img/*.png', '_ui/img/*.jpg'],
            jsfiles: ['_ui/js/script.js', '!_ui/js/*.min.js']
        },
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> | <%= pkg.author.name %> */\n'
            },
            build: {
                src: '<%= meta.jsfile %>',
                dest: '_ui/js/script.min.js'
            }
        },
        cssmin: {
            with_banner: {
                options: {
                    banner: '/* <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> | <%= pkg.author.name %> */'
                },
                files: {
                    '_ui/style.min.css': '<%= meta.cssfiles %>'
                }
            }
        },
        jshint: {
            all: '<%= meta.jsfile %>',
            options: {
                curly: true,
                eqeqeq: true,
                eqnull: true,
                browser: true,
                globals: {
                    jQuery: true,
                    console: true,
                    DevTools: true
                },
            }
        },
        imagemin: {
            targets: '<%= meta.images %>'
        },
        watch: {
          scripts: {
            files: '<%= meta.jsfiles %>',
            tasks: ['jshint', 'uglify']
          },
          styles: {
            files: '<%= meta.cssfiles %>',
            tasks: ['cssmin']
          }
        }
    });

    grunt.registerTask('default', ['jshint', 'uglify', 'cssmin', 'watch']);
    grunt.registerTask('build',   ['uglify', 'cssmin', 'imagemin']);
};