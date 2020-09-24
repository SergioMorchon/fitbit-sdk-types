import document from 'document';

// Get a handle on the instance
var demoinstance = document.getElementById('demoinstance');

// Animate after a 5 second delay
setTimeout(function () {
	demoinstance.animate('enable'); // Specify the name of the event to trigger
}, 5000);

var demogroup = demoinstance.getElementById('demogroup') as GroupElement;

if (demogroup.groupTransform) {
	demogroup.groupTransform.translate.x = 20;
	demogroup.groupTransform.translate.y = 20;
	demogroup.groupTransform.scale.x = 0.5;
	demogroup.groupTransform.scale.y = 0.5;
	demogroup.groupTransform.rotate.angle = 45;
}
