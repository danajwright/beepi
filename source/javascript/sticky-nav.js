
// Make nav height ajust on scroll down

// $(window).scroll(function() {
// if ($(this).scrollTop() > 60){  
//     $('.nav-logo').addClass("mk-small");
// 	$('.nav-items').addClass("nav-small");
//   }
//   else{
//     $('.nav-logo').removeClass("mk-small");
// 	$('.nav-items').removeClass("nav-small");
//   }
// });


// Nav links underline/ change on scroll

var CreateNaviation = function() {

	var getClassFromSection = function(section) {
		return section.slice(1);
	}

	var transitionNavElement = function(section) {
		sectionClass = getClassFromSection(section);
		$("#navbar-line").attr("class", sectionClass)
	}

	var updateUrlHash = function(section) {
		history.pushState(null, null, section);
	}

	var sectionListenersActive = false;

	var scrollToSection = function(section) {
		var $section = $( section )
		console.log("section", $section);
		var targetTop = $section.offset().top;
		sectionListenersActive = false
		$('html, body').stop().animate({
        scrollTop: targetTop-112
    }, 600, 'easeInOutExpo', function() {
    	sectionListenersActive = true
    });
	}

	var setNavBarListeners = function(){
		$('a.page-scroll').bind('click', function(event) {
			console.log("clicked")
			var section = event.target.hash;
			event.preventDefault();
			scrollToSection(section);
			transitionNavElement(section);
			updateUrlHash(section);
		});
	}

	var setSectionListeners = function() {
		$(".nav-hook").each(function(i, hook) {
			var hookId = $(hook).attr("id");
			var handler = onVisibilityChange($("#"+hookId), function() {
			  console.log("visibility changing");
			  console.log(hookId);
			  if (sectionListenersActive) {
			  	updateUrlHash("#"+hookId);
			  	transitionNavElement("#"+hookId);
			  }
			});
			$(window).on('DOMContentLoaded load resize scroll', handler);
		})
	}

	return {
		call: function() {
			setNavBarListeners();
			setSectionListeners();
		},
		activateListeners: function() {
			sectionListenersActive = true;
		}
	}
}

window.CreateNavigation = CreateNaviation

$(document).ready(function() {

	 navigationSettings = window.CreateNavigation()
	 navigationSettings.call()
	 setTimeout(function() {
	 	 navigationSettings.activateListeners();
	 }, 100)

});







