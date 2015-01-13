var app = {

	init: function(){
		app.tabs.init();
	},

	tabs: { 
		init: function(){
			var tabs = document.getElementById('tabs');
			var controls = tabs.querySelectorAll('.tab-control');
			for (var i=0; i<(controls.length); i++){

				controls[i].addEventListener('click', this.activate);
			}
		},
		activate: function(event){

			//swich tab controls
			var navTabs = document.querySelector('.nav-tabs');
			var active = navTabs.querySelector('.active');
			var clickedElem = event.target;

			active.setAttribute('class', '');
			clickedElem.parentNode.setAttribute('class', 'active');

			//swich tabs
			var tabContent = document.getElementById('tab-content'); 
			var contentActive = tabContent.querySelector('.active');
			var attribute = clickedElem.getAttribute('href');
			var visibleContent = tabContent.querySelector(attribute);

			contentActive.setAttribute('class', 'tab-pane');	
			visibleContent.setAttribute('class', 'tab-pane active');
		}
	}
};

app.init();



