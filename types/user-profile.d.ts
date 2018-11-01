declare module 'user-profile' {
	type DefaultZone = 'out-of-range' | 'fat-burn' | 'cardio' | 'peak';
	type UserDefinedZone = 'below-custom' | 'custom' | 'above-custom';
	interface UserProfile {
		readonly age: number | undefined;
		readonly bmr: number | undefined;
		readonly gender: 'male' | 'female' | undefined;
		readonly height: number | undefined;
		readonly restingHeartRate: number | undefined;
		readonly stride: {
			readonly walk: number | undefined;
			readonly run: number | undefined;
		};
		readonly weight: number | undefined;
		heartRateZone(heartRate: number): DefaultZone | UserDefinedZone;
	}
	const user: UserProfile;
}
