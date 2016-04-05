(function(Polymer) {
	'use strict';

	Polymer({
		is: 'scroll-content',

		properties: {
			elements: {
				type: Object,
				notify: true
			},
			selectedElement : {
				type	: Number,
				value	: -1,
				notify	: true
			}
		}

	});
})(Polymer); 