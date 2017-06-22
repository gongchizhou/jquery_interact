(function($){
	'use strict';
	var settings = {
		event: 'click',
		defaultIndex: 1,
		show: 'tab_show',
		hide: 'tab_hide'
	};

	var methods = {
		
		init: function(options){
			settings = $.extend(settings,options);

			return this.each(function(){
				var $this = $(this),
					$trigger = $this.find('li');

				if(settings.defaultIndex > $trigger.length && settings.defaultIndex < 1){
					settings.defaultIndex = 1;
				};

				var $tab = $('#' + $this.attr('data-tab')).find('.tab_list');

			    $trigger.eq(settings.defaultIndex - 1).addClass('active');
			    $tab.eq(settings.defaultIndex - 1).addClass(settings.show);

			    changePos();
			    $('.tab_content').height($tab.eq(settings.defaultIndex - 1).height());

				$trigger.on(settings.event,function(){
					var index = $(this).index(),
					    $target = $tab.eq(index);

					$(this).addClass('active').siblings().removeClass('active');

					changePos();
					setTabHeight($target);
					toggle($target);
				});

				function changePos(){
					var current = $('.tab_menu li.active');
					$('.border').stop().css({
						left: current.position().left,
						width: current.width()
					});
				};

				function setTabHeight($target){
					var tabHeight = $target.height();
					$('.tab_content').height(tabHeight);
				};

				function toggle($target){
					$target.siblings().removeClass(settings.show).addClass(settings.hide);
					$target.removeClass(settings.hide).addClass(settings.show);
				}
			});
		},

		destroy: function(){
			$(this).find('li').off(settings.event);
		}
	};

	$.fn.tab = function(method){
	    if ( methods[method] ) {
	      return methods[ method ].apply( this, Array.prototype.slice.call( arguments, 1 ));
	    } else if ( typeof method === 'object' || ! method ) {
	      return methods.init.apply( this, arguments );
	    } else {
	      $.error( 'Method ' +  method + ' does not exist on jQuery.dialog' );
	    }
	};

})(jQuery);