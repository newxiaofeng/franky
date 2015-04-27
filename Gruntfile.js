/**
 *  It was heavily inspired by Thomas Boyt's "More Maintainable Gruntfiles"
 *  http://www.thomasboyt.com/2013/09/01/maintainable-grunt.html
 * @param grunt
 */
module.exports = function(grunt) {
	var path = require('path');
	var loadGruntOptions = {
		configPath: path.join(process.cwd(), 'tasks'),

		init: true,

		loadGruntTasks: {
			pattern: 'grunt-*',
			config: require('./package.json'),
			scope: 'devDependencies'
		}
	};
	require('load-grunt-config')(grunt, loadGruntOptions);
};