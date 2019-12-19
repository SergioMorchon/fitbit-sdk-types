import { me as appbit } from 'appbit';
import { primaryGoal } from 'user-activity';

if (appbit.permissions.granted('access_activity')) {
	console.log(`User's primary activity goal is ${primaryGoal}`);
}
