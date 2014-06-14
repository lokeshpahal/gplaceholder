gplaceholder
============

- jQuery support: 1.4+

Global Placeholder plugin, gives power you to use **HTML5 placeholder** property in **cross-browser** platform.
- **IE6+**
- **Mozila**(all)
- **Chrome**(all)
- **Safari**(all)
- **Opera**(all)

For **documentation**, usage, and examples, see:
http://lokeshpahal.github.io/gplaceholder/

For **downloads**, see:
https://github.com/lokeshpahal/gplaceholder/

Options
===========
 - **color** : to change the font color of the placeholder.
 - **background** : to apply the background of the element.

Uses
============
page load example
```javascript
$(document).ready(function(){
	$('input,textarea').gplaceholder({
		color:'red',
		background:'#fff'
	});
});
```

run time example
```javascript
$('#add').click(function(){
	$('table').append('<tr><td>Other things:</td><td><input class="place" type="text" name="name" placeholder="Other things" /></td></tr>');
	$('input,textarea').resetGP();
});
```
================