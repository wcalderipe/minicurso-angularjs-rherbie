(function() {
	'use strict';

	angular
		.module('app')
		.filter('truncate', truncate);

	function truncate() {
		return function(text, length, end) {
			if (!length || isNaN(length)) {
				length = 10;
			}

			if (!end) {
				end = '...';
			}

			if (text.length <= length || text.length - end.length <= length) {
				return text;
			}

			return text.substring(0, length - end.length) + end;
		}
	}
})();