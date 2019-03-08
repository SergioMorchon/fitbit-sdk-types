type PermissionName =
	| 'access_activity'
	| 'access_exercise'
	| 'access_heart_rate'
	| 'access_internet'
	| 'access_location'
	| 'access_user_profile'
	| 'run_background';

interface Permissions {
	granted(permissionName: PermissionName): boolean;
}
