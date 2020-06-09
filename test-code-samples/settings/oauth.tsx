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
	onAccessToken={async (data) => {
		console.log(data);
	}}
/>;
<Oauth
	encodeAsBase64
	settingsKey="settingsKey"
	title="title"
	label="label"
	status="status"
	url="url"
	oAuthParams={{
		response_type: 'code',
		client_id: 'CLIENT_ID',
		redirect_uri: 'REDIRECT_URI',
		scope: 'photos',
		state: '1234zyx',
	}}
	onReturn={(data) => {
		console.log(data);
	}}
/>;
