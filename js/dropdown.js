(function($){
	'use strict';
	var isDown = false,
	    settings = {
	    selected: true,
		down: 'dropdown_down',
		up: 'dropdown_up'
	};

	var methods = {
		
		init: function(options){
			settings = $.extend(settings,options);

			return this.each(function(){
				var $this = $(this),
					$document = $(document),
					$target = $('#' + $this.attr('data-dropdown')),
				    $select = $target.find('li');

				$this.on('click',methods.toggle.bind($this));

				if(settings.selected === true){
					$select.on('click',function(){
						var value = $(this).attr('data-value');
						$this.text(value);
						methods.up.call($this);
					});
				}

				$document.on('keydown',function(e){
					var keyCode = e.keyCode || e.which;
					if(keyCode === 27 && !isDown){
						methods.toggle.bind($this);
					}
				});
			});
		},

		toggle: function(){
			var $target = $('#' + this.attr('data-dropdown'));
			return isDown ? methods.up.call(this) : methods.down.call(this);
		},

		down: function(){
			var $target = $('#' + this.attr('data-dropdown'));
			$target.removeClass(settings.up).addClass(settings.down);
			isDown = true;
		},

		up: function(){
			var $target = $('#' + this.attr('data-dropdown'));
			$target.removeClass(settings.down).addClass(settings.up);
			isDown = false;
		},

		destroy: function(){
			$(this).off('click');
			$(document).off('keydown');
			$('#' + $(this).attr('data-dropdown')).find('li').off('click');
		}
	};

	$.fn.dropdown = function(method){
	    if ( methods[method] ) {
	      return methods[ method ].apply( this, Array.prototype.slice.call( arguments, 1 ));
	    } else if ( typeof method === 'object' || ! method ) {
	      return methods.init.apply( this, arguments );
	    } else {
	      $.error( 'Method ' +  method + ' does not exist on jQuery.dropdown' );
	    }
	};

})(jQuery);