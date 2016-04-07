(function(Polymer) {
	'use strict';

	Polymer({
		is: 'right-content',

		behaviors: [
      		Polymer.NeonAnimationRunnerBehavior
    	],

		properties: {
			id: {
				type: Number
			},
			name: {
				type: String
			},
			selected: {
				type: Number
			}
		}
		
	});
})(Polymer); 