/*
	Read Only by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	skel.breakpoints({
		xlarge: '(max-width: 1680px)',
		large: '(max-width: 1280px)',
		medium: '(max-width: 1024px)',
		small: '(max-width: 736px)',
		xsmall: '(max-width: 480px)'
	});

	$(function() {

		var $body = $('body'),
			$header = $('#header'),
			$nav = $('#nav'), $nav_a = $nav.find('a'),
			$wrapper = $('#wrapper');

		// Fix: Placeholder polyfill.
			$('form').placeholder();

		// Prioritize "important" elements on medium.
			skel.on('+medium -medium', function() {
				$.prioritize(
					'.important\\28 medium\\29',
					skel.breakpoint('medium').active
				);
			});

		// Header.
			var ids = [];

			// Set up nav items.
				$nav_a
					.scrolly({ offset: 44 })
					.on('click', function(event) {

						var $this = $(this),
							href = $this.attr('href');

						// Not an internal link? Bail.
							if (href.charAt(0) != '#')
								return;

						// Prevent default behavior.
							event.preventDefault();

						// Remove active class from all links and mark them as locked (so scrollzer leaves them alone).
							$nav_a
								.removeClass('active')
								.addClass('scrollzer-locked');

						// Set active class on this link.
							$this.addClass('active');

					})
					.each(function() {

						var $this = $(this),
							href = $this.attr('href'),
							id;

						// Not an internal link? Bail.
							if (href.charAt(0) != '#')
								return;

						// Add to scrollzer ID list.
							id = href.substring(1);
							$this.attr('id', id + '-link');
							ids.push(id);

					});

			// Initialize scrollzer.
				$.scrollzer(ids, { pad: 300, lastHack: true });

		// Off-Canvas Navigation.

			// Title Bar.
				$(
					'<div id="titleBar">' +
						'<a href="#header" class="toggle"></a>' +
						'<span class="title">' + $('#logo').html() + '</span>' +
					'</div>'
				)
					.appendTo($body);

			// Header.
				$('#header')
					.panel({
						delay: 500,
						hideOnClick: true,
						hideOnSwipe: true,
						resetScroll: true,
						resetForms: true,
						side: 'right',
						target: $body,
						visibleClass: 'header-visible'
					});

			// Fix: Remove navPanel transitions on WP<10 (poor/buggy performance).
				if (skel.vars.os == 'wp' && skel.vars.osVersion < 10)
					$('#titleBar, #header, #wrapper')
						.css('transition', 'none');

	});

})(jQuery);

function if_shine(t1){
	var time1 =new Date(t1).getTime();
	var time2 = new Date().getTime();
	var usedTime = time2 - time1;  //两个时间戳相差的毫秒数
	var days=Math.floor(usedTime/(24*3600*1000));
	if(days <= 2)
	{
		return true;
	}
	return false;
  }
// 文字闪烁 周期为Tshine
var Tshine=500;
function shine(that)
{	
	that.css('color','red');
	setTimeout(function(){
		that.css('color','green');
	}, Tshine/4)
	setTimeout(function(){
		that.css('color','orange');
	}, Tshine/2)
	setTimeout(function(){
		that.css('color','blue');
	}, Tshine/4*3)
}
$(function(){
		var time=new Date();
        var time_year=Number(time.getFullYear());
        var time_month=Number(time.getMonth()+1);
		var time_day=Number(time.getDate());
		
	var li = $("ul.tmp li");
	var that;
	var that_time;
	var that_xingqi;
	var that_Date;
	var tmp;
	li.each(function(){
		that = $(this);
		that_time = that.attr("time");
		that_year = Number(that_time.split('-')[0]);
		that_month = Number(that_time.split('-')[1]);
		that_day = Number(that_time.split('-')[2]);
		that_Date = new Date(that_year, that_month-1, that_day);
		switch (that_Date.getDay()) {
			case 1:
				that_xingqi="一";
				break;
			case 2:
				that_xingqi="二";
				break;
			case 3:
				that_xingqi="三";
				break;
			case 4:
				that_xingqi="四";
				break;
			case 5:
				that_xingqi="五";
				break;
			case 6:
				that_xingqi="六";
				break;
			case 0:
				that_xingqi="日";
				break;
		}
		tmp = '<span>'
		if(that.attr('top'))
		{
			tmp += '置顶&emsp;'
		}
		tmp += that_time+"&emsp;星期"+that_xingqi+"</span>";
		that.append(tmp);
		if(if_shine(that_time) || that.attr('top'))
			{
				window.setInterval(shine, Tshine, that);
			}
	})
})

$(function(){
	var shuashuashua = window.setInterval(function(){
		window.location.reload();
	}, 1000*3600*1/3);
})
