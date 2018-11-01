<Oauth
	settingsKey="oauth"
	title="OAuth Login"
	label="OAuth"
	status="Login"
	authorizeUrl="https://accounts.google.com/o/oauth2/v2/auth"
	requestTokenUrl="https://www.googleapis.com/oauth2/v4/token"
	clientId="11111"
	clientSecret="asdfxxx"
	scope="profile"
	pkce
/>;
<Oauth
	settingsKey="oauth"
	title="Fitbit Login"
	label="Fitbit"
	status="Login"
	authorizeUrl="https://www.fitbit.com/oauth2/authorize"
	requestTokenUrl="https://api.fitbit.com/oauth2/token"
	clientId="11111"
	clientSecret="asdfxxx"
	scope="profile"
	onAccessToken={async data => {
		console.log(data);
	}}
/>;
