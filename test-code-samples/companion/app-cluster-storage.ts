import * as appClusterStorage from 'app-cluster-storage';
import { me } from 'companion';

const myCluster = appClusterStorage.get('my.cluster.id');
if (me.permissions.granted('access_app_cluster_storage')) {
	if (myCluster !== null) {
		myCluster.setItem('myKey', 'myValue');
		console.log(myCluster.getItem('myKey'));
	} else {
		console.error('App Cluster Storage is unavailable.');
	}
}
