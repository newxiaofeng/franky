/**
 * Created by hongyu.feng on 2015/4/21.
 */
module.exports = function(grunt, options) {
    return {
        target: {
            files: [
                {
                    src: ['app/css/common/*.css'],
                    dest: 'tmp/common.min.css'
                }
            ]
        }
    }
}