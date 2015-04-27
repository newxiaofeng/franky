var modRewrite = require('connect-modrewrite');
module.exports = function(grunt, options) {
    return {
        bsFiles: {
            src: ['app/*.html', 'tmp/**/*']
        },
        options: {
            port: 8080,
            watchTask: true,
            server: {
                baseDir: ['app', 'tmp'],
                middleware: [
                    modRewrite([
                        '!\\.\\w+$ /index.html [L]'
                    ])
                ]
            }
        }
    };
}