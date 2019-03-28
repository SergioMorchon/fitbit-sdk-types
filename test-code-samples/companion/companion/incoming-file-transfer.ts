// Import the Companion module
import { me } from 'companion';

if (me.launchReasons.fileTransfer) {
  // Incoming file transger caused the Companion to start
  console.log('Incoming file transfer!');
}
