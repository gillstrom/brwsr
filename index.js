'use strict';

module.exports = function () {
	var browsers = {
		'Google Chrome': require('is-chrome'),
		'Internet Explorer': require('is-iexplorer'),
		'Microsoft Edge': require('is-edge')(),
		'Mozilla Firefox': require('is-firefox'),
		Opera: require('is-opera'),
		Safari: require('is-safari')
	};

	var ret = Object.keys(browsers).filter(function (key) {
		return browsers[key];
	});

	return ret.length ? ret[0] : null;
};
