declare module 'user-profile' {
	type DefaultZone = 'out-of-range' | 'fat-burn' | 'cardio' | 'peak';
	type UserDefinedZone = 'below-custom' | 'custom' | 'above-custom';
	interface UserProfile {
		/**
		 * User's age in years.
		 */
		readonly age: number | undefined;
		/**
		 * User's basal metabolic rate in kcal/day.
		 */
		readonly bmr: number | undefined;
		/**
		 * User's gender.
		 */
		readonly gender: 'male' | 'female' | undefined;
		/**
		 * User's height in meters.
		 */
		readonly height: number | undefined;
		/**
		 * User's maximum theoretical heart rate in bpm (beats per minute), based on their profile settings.
		 *
		 * Note: There is no guarantee that the user's heart rate will reach, or exceed this value. This a theoretical value based on medical research and can also be adjusted by the user. It is entirely possible that the user's heart rate could exceed a maxHeartRate value defined by the user.
		 * @since 5.0
		 */
		readonly maxHeartRate: number | undefined;
		/**
		 * User's resting heart rate in bpm (beats per minute).
		 */
		readonly restingHeartRate: number | undefined;
		/**
		 * User's stride.
		 */
		readonly stride: {
			readonly walk: number | undefined;
			readonly run: number | undefined;
		};
		/**
		 * User's weight in kilograms.
		 */
		readonly weight: number | undefined;
		/**
		 * Get the heart rate zone for a given heart rate.
		 *
		 * When the user has not configured a custom zone, the possible values are, in order of increasing heart rate:
		 *	* `"out-of-range"` when the heart rate is below the "Fat Burn" zone.
		 *	* `"fat-burn"` when the heart rate is in the "Fat Burn" zone.
		 *	* `"cardio"` when the heart rate is in the "Cardio" zone.
		 *	* `"peak"` when the heart rate is above the "Cardio" zone.
		 *
		 *	When the user has configured a custom zone, the possible values are, in order of increasing heart rate:
		 *	* `"below-custom"` when the heart rate is below the custom zone.
		 *	* `"custom"` when the heart rate is in the custom zone.
		 *	* `"above-custom"` when the heart rate is above the custom zone.
		 *
		 * @param heartRate Heart rate for which the zone should be returned.
		 */
		heartRateZone(heartRate: number): DefaultZone | UserDefinedZone;
	}

	/**
	 * The User Profile API provides information related to the user account of the device.
	 */
	const user: UserProfile;
}
