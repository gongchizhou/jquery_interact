(function($){
	'use strict';
	var isOpen = false,
	    settings = {
		open: 'dialog_open',
		close: 'dialog_close'
	};

	var methods = {
		
		init: function(options){
			settings = $.extend(settings,options);
			
			return this.each(function(){
				var $this = $(this),
					$document = $(document),
				    overlay = $('.dialog_overlay'),
				    closeOps = $('[data-dialog-close]');

				$this.on('click',methods.toggle.bind(this));
				overlay.on('click',methods.toggle.bind(this));
				closeOps.on('click',methods.toggle.bind(this));

				$document.on('keydown',function(e){
					var keyCode = e.keyCode || e.which;
					if(keyCode === 27 && isOpen){
						methods.toggle.bind(this);
					}
				});
			});
		},

		toggle: function(){
			var $target = $('#' + $(this).attr('data-dialog'));
			return isOpen ? methods.close.call(this) : methods.open.call(this);
		},

		open: function(){
			var $target = $('#' + $(this).attr('data-dialog'));
			$target.removeClass(settings.close).addClass(settings.open);
			isOpen = true;
		},

		close: function(){
			var $target = $('#' + $(this).attr('data-dialog'));
			$target.removeClass(settings.open).addClass(settings.close);
			isOpen = false;
		},

		destroy: function(){
			$(this).off('click');
			$('.dialog_overlay').off('click');
			$('[data-dialog-close]').off('click');
			$(document).off('keydown');
		}
	};

	$.fn.dialog = function(method){
	    if ( methods[method] ) {
	      return methods[ method ].apply( this, Array.prototype.slice.call( arguments, 1 ));
	    } else if ( typeof method === 'object' || ! method ) {
	      return methods.init.apply( this, arguments );
	    } else {
	      $.error( 'Method ' +  method + ' does not exist on jQuery.dialog' );
	    }
	};

})(jQuery);
