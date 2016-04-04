(function(Polymer) {
	'use strict';

	Polymer({
		is: 'scroll-content',

		properties: {
			elements: {
				type: Object,
				notify: true
			}
		},

		_toArray: function(obj) {
            return Object.keys(obj).map(function(key) {
                return {
                    name: key,
                    value: obj[key]
                };
            });
        }
	});
})(Polymer); 