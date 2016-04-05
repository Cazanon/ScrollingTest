(function(document) {
	'use strict';

	var app = document.querySelector('#app');
	var firebaseRef = new Firebase("https://todiet.firebaseio.com/");

	app.baseUrl = '/';

	firebaseRef.child('days').on('value', function(snapshot){		
		app.days = _toArray(snapshot.val());
	});

	var _toArray = function(obj) {
        return Object.keys(obj).map(function(key) {
            return {
                name: key,
                value: obj[key]
            };
        });
    };

})(document);