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
				notify	: true,
				observer: 'changeSelected'
			}
		},

		changeSelected : function(newValue, oldValue){
			this.entryAnimation = 'fade-in-animation';
        	this.exitAnimation = 'fade-out-animation';
		}

	});
})(Polymer); 