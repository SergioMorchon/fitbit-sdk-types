<StravaLogin
	title="Strava Login"
	settingsKey="strava"
	clientId="11111"
	clientSecret="asdfxxx"
/>;
declare const getProfile;
declare const settingsStorage;
<StravaLogin
	title="Strava Login"
	settingsKey="strava"
	clientId="11111"
	clientSecret="asdfxxx"
	onAccessToken={async (accessToken, userInfo) => {
		const profile = await getProfile(accessToken);

		settingsStorage.setItem('user', JSON.stringify(profile));
	}}
/>;
