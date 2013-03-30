module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> | <%= pkg.author.name %> */\n'
            },
            build: {
                src: '_ui/js/script.js',
                dest: '_ui/js/script.min.js'
            }
        },
        cssmin: {
            with_banner: {
                options: {
                    banner: '/* <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> | <%= pkg.author.name %> */'
                },
                files: {
                    '_ui/style.min.css': ['_ui/*.css']
                }
            }
        },
        jshint: {
            all: ['_ui/js/script.js'],
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
            targets: ['_ui/img/*.png', '_ui/img/*.jpg']
        }
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-imagemin');

    grunt.registerTask('default', ['jshint', 'uglify', 'cssmin', 'imagemin']);
    grunt.registerTask('min',     ['uglify', 'cssmin', 'imagemin']);
    grunt.registerTask('jsdebug', ['jshint']);
};