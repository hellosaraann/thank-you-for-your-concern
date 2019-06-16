const widgetArray = [
  {id: '#timelineWidget'},
  {id: '#infographicWidget'},
  {id: '#gameWidget'},
  {id: '#storyWidget'}
];

const timelineArray = [{
    id: 1,
    year: 'year',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  },{
    id: 2,
    year: 'year',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '
  },{
    id: 3,
    year: 'year',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '
  },{
    id: 4,
    year: 'year',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '
  },{
    id: 5,
    year: 'year',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '
  },{
    id: 6,
    year: 'year',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '
  },{
    id: 7,
    year: 'year',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '
  },{
    id: 8,
    year: 'year',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '
  },{
    id: 9,
    year: 'year',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '
  },{
    id: 10,
    year: 'year',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '
  },{
    id: 11,
    year: 'year',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '
  },{
    id: 12,
    year: 'year',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '
  },{
    id: 13,
    year: 'year',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '
  },{
    id: 14,
    year: 'year',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '
  },{
    id: 15,
    year: 'year',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '
  }
];

Vue.component ( 'timeline-entry', {
	props: [
		'events', 'id', 'text', 'year'
	],
	template: `
			<div class='container column horizontal-scroll'>
				<h2 class='timeline-image-placeholder'>{{ id }}</h2>
        <h4 class='timeline-year'>{{ year }}</h4>
				<p class='timeline-descriptors'>{{ text }}</p>
			</div>
	`
});

var vm = new Vue ({
  el: '#widgetApp',
  data: {
    widgets: widgetArray,
    events: timelineArray
  }
});
