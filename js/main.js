var widgetArray = [
  {id: '#timelineWidget'},
  {id: '#infographicWidget'},
  {id: '#gameWidget'},
  {id: '#storyWidget'}
];

var vm = new Vue ({
  el: '#widgetApp',
  data: {
    widgets: widgetArray
  },
  methods: {
    // displayWidget: function(hoveredWidget){
    //   hoveredWidget.classList.add('on-hover');
    // },
    // hideWidget: function(hoveredWidget){
    //   hoveredWidget.classList.remove('on-hover');
    // }
  }
})

// document.addEventListener('DOMContentLoaded', function () {
//     var wTrigger = document.querySelector('.widget-trigger');
//     var widget = document.querySelector('.widget');
//
//     wTrigger.addEventListener('mouseenter', function () {
//         widget.classList.add('on-hover');
//     });
//     wTrigger.addEventListener('mouseleave', function () {
//         widget.classList.remove('on-hover');
//     })
//
// })
