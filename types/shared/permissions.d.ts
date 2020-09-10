type PermissionName =
	| 'access_activity'
	| 'access_aod'
	| 'access_app_cluster_storage'
	| 'access_calendar'
	| 'access_exercise'
	| 'access_heart_rate'
	| 'access_internet'
	| 'access_location'
	| 'access_sleep'
	| 'access_user_profile'
	| 'run_background';

interface Permissions {
	granted(permissionName: PermissionName): boolean;
}
