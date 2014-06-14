gplaceholder
============

- jQuery support: 1.4+

Global Placeholder plugin

For **documentation**, usage, and examples, see:
http://harvesthq.github.io/chosen/

For **downloads**, see:
https://github.com/harvesthq/chosen/releases/


Uses
============
page load example
```
$(document).ready(function(){
	$('input,textarea').gplaceholder({
		color:'red',
		background:'#fff'
	});
});
```

run time example
```
$('#add').click(function(){
	$('table').append('<tr><td>Other things:</td><td><input class="place" type="text" name="name" placeholder="Other things" /></td></tr>');
	$('input,textarea').resetGP();
});
```
================