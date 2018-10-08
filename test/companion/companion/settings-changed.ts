// Import the Companion module
import { me } from "companion"

if (me.launchReasons.settingsChanged) {
  // The companion was started due to application settings changes
  console.log("Settings were changed!")
}