// Import the Companion module
import { me } from "companion"

// Helper
const MILLISECONDS_PER_MINUTE = 1000 * 60

// Wake the Companion after 30 minutes
me.wakeInterval = 30 * MILLISECONDS_PER_MINUTE

if (me.launchReasons.wokenUp) {
  // The companion started due to a periodic timer
  console.log("Started due to wake interval!")
} else {
  // Close the companion and wait to be awoken
  me.yield()
}
