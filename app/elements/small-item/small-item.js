(function(Polymer) {
	'use strict';

	Polymer({
		is: 'small-item',

		properties: {
			element: {
				type	: Object,
				notify	: true
			},
			selected: {
				type				: Boolean,
				value				: false,
				notify				: true,
				reflectToAttribute	: true
			}
		},

		listeners : {
			'tap': 'onTap'
		},

		onTap : function(){
			this.fire('selectItem',this.element.id);
		}
		
	});
})(Polymer); 