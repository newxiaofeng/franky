/**
 * Created by hongyu.feng on 2015/4/17.
 */
module.exports = function(grunt, options) {
    return {
        'serve': ['webpack','cssmin' , 'browserSync', 'watch']
    }
}