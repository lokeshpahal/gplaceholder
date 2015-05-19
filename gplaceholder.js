(function ($, d) {
	$.fn.extend({
		resetGP:function() {
			var oldOpts = $(this).data('Opts');
			$this = $(this);
			$this.next().remove();
			$this.gplaceholder(oldOpts);
		}
	});
	
	$.fn.gplaceholder = function( options ) {
	var settings = $.extend({
		color: "#000",
        onlyIE: true
	}, options );
    var e = window.navigator.userAgent;
    var r = e.indexOf("MSIE ");
    if (r > 0 || navigator.userAgent.match(/Trident.*rv\:11\./)) {
        var s = parseInt(e.substring(r + 5, e.indexOf(".", r)));
        if (s > 9) return !0
    } else if(1 == settings.onlyIE) return !0;
        
	$(this).data('Opts',options);
	this.each(function(){
		var p = $(this).attr('placeholder');
		if($.trim(p)!=''){
			$(this).css({color: settings.color,background: settings.background})
			$(this).val(p)
			$(this).bind('focus',function(){
				v = $(this).val();
				p = $(this).attr('placeholder');
				if(v==p){$(this).val('');}
			});
			$(this).bind('blur',function(){
				v = $(this).val();
				p = $(this).attr('placeholder');
				if(v==''){$(this).val(p);}
			});
		}
	});
	return this;
	};
}( jQuery,document ));