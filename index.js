'use strict';

module.exports = function () {
	var ret;
	var browsers = {
		'Google Chrome': require('is-chrome'),
		'Internet Explorer': require('is-iexplorer'),
		'Microsoft Edge': require('is-edge')(),
		'Mozilla Firefox': require('is-firefox'),
		Opera: require('is-opera'),
		Safari: require('is-safari')
	};

	Object.keys(browsers).forEach(function(key) {
		if (browsers[key] === true) {
			ret = key;
		}
	});

	return ret;
}
