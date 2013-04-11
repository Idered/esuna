module.exports = function(grunt) {
    grunt.loadNpmTasks('grunt-contrib-csslint');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        clean: ['dist/'],

        copy: {
            main: {
                dest: 'dist/',
                src: [
                    '_media/**',
                    '_ui/fonts/*',
                    '_ui/img/*',
                    '_ui/js/*',
                    '!_ui/js/script.js',
                    '!_ui/js/plugins.js'
                ]
            }
        },

        htmlmin: {
            build: {
                options: {
                    removeComments: true,
                    collapseWhitespace: true
                },
                /** Destination - Source */
                files: {
                    'dist/index.html': 'index.html'
                }
            }
        },

        imagemin: {
            build: {
                options: {
                    optimizationLevel: 3,
                    progressive: true
                },
                /** Destination - Source */
                files: {
                    // 'dist/_ui/img/logo.png': '_ui/img/logo.png',
                    // 'dist/_ui/img/sprite.png': '_ui/img/sprite.png'
                }
            }
        },

        uglify: {
            options: {
                preserveComments: 'some',
                banner: '/*! <%= pkg.name %> | <%= pkg.author.name %> */\n'
            },
            build: {
                /** Destination - Source */
                files: {
                    'dist/_ui/js/script.js': '_ui/js/script.js',
                    'dist/_ui/js/plugins.js': '_ui/js/plugins.js'
                }
            }
        },

        cssmin: {
            with_banner: {
                options: {
                    banner: '/*! <%= pkg.name %> | <%= pkg.author.name %> */\n'
                },
                /** Destination - Source */
                files: {
                    'dist/_ui/style.css': ['_ui/*.css']
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

        csslint: {
            dev: {
                options: {
                    "adjoining-classes": false,
                    "box-sizing": false,
                    "box-model": false,
                    "compatible-vendor-prefixes": false,
                    "empty-rules": false,
                    "font-sizes": false,
                    "floats": false,
                    "important": false,
                    "known-properties": false,
                    "outline-none": false,
                    "regex-selectors": false,
                    "star-property-hack": false,
                    "underscore-property-hack": false,
                    "universal-selector": false,
                    "unique-headings": false,
                    "unqualified-attributes": false,

                    "display-property-grouping": true,
                    "display-property-grouping": true,
                    "overqualified-elements": true,
                    "duplicate-properties": true,
                    "text-indent": true,
                    "zero-units": true,
                    "errors": true,
                    "ids": true
                },
                /** Source */
                src: '_ui/*.css'
            }
        },

        watch: {
            scripts: {
                /** Source */
                files: ['_ui/js/script.js'],
                tasks: ['jshint']
            },
            styles: {
                /** Source */
                files: ['_ui/*.css'],
                tasks: ['csslint']
            }
        }
    });

    // Default taks for development
    grunt.registerTask('default', ['jshint', 'csslint', 'watch']);

    // Lint files once
    grunt.registerTask('lint', ['jshint', 'csslint']);

    // Build files for production
    grunt.registerTask('build', ['clean', 'htmlmin', 'uglify', 'cssmin', 'imagemin', 'copy']);
};
