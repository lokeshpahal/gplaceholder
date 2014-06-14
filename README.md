gplaceholder
============

- jQuery support: 1.4+

Global Placeholder plugin, gives power you to use **HTML5 placeholder** property in **cross-browser** platform, **IE6+**.

For **documentation**, usage, and examples, see:
http://lokeshpahal.github.io/gplaceholder/

For **downloads**, see:
https://github.com/lokeshpahal/gplaceholder/


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