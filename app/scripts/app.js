(function(document) {
	'use strict';

	var app = document.querySelector('#app');
	var firebaseRef = new Firebase("https://todiet.firebaseio.com/");

	app.baseUrl = '/';

	firebaseRef.child('days').on('value', function(snapshot){		
		app.days = snapshot.val();
	});

})(document);