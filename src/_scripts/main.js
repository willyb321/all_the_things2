// Main javascript entry point
// Should handle bootstrapping/starting application

'use strict';

import $ from 'jquery';
import Link from '../_modules/link/link';

$(() => {
  new Link(); // Activate Link modules logic
//   $.ajax({url: 'https://api.github.com/users/willyb321/repos?type=all'})
//   .then(data => {
// 	console.log(data);
// 	const ul = document.createElement('ul');
// 	for (let i in data) {
// 		const li = document.createElement('li');
// 		li.innerText = data[i].name + ' - ' + data[i].description;
// 		ul.appendChild(li);
// 	}
// 	document.getElementById('repos').appendChild(ul);
//   });
});
