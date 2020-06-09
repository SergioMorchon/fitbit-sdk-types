import { goals } from 'user-activity';
console.log((goals.steps || 0) + ' steps');

goals.addEventListener('reachgoal', (e) => {
	console.log('Goal reached!');
});
