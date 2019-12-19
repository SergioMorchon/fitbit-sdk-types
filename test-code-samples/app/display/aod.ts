import clock from 'clock';
import { display } from 'display';
import { me } from 'appbit';

// does the device support AOD, and can I use it?
if (display.aodAvailable && me.permissions.granted('access_aod')) {
	// tell the system we support AOD
	display.aodAllowed = true;

	// respond to display change events
	display.addEventListener('change', () => {
		// Is AOD inactive and the display is on?
		if (!display.aodActive && display.on) {
			clock.granularity = 'seconds';
			// Show elements & start sensors
			// someElement.style.display = "inline";
			// hrm.start();
		} else {
			clock.granularity = 'minutes';
			// Hide elements & stop sensors
			// someElement.style.display = "none";
			// hrm.stop();
		}
	});
}
