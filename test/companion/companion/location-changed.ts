// Import the Companion module
import { me } from "companion"

if (me.launchReasons.locationChanged) {
  // The companion was started due to a significant change in physical location
  console.log("Significant location change!")
  var pos = me.launchReasons.locationChanged.position
  console.log("Latitude: " + pos.coords.latitude,
              "Longitude: " + pos.coords.longitude)
}