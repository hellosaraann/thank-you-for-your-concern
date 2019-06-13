// var widgetArray = [
//   {id: '#timeline' , }
// ];
//
// var vm = new Vue ({
//   el: '#widgetApp',
//   data: {
//     widgets: widgetArray
//   },
//   methods: {
//     displayWidget: function(widget){
//
//     }
//   }
// })

document.addEventListener('DOMContentLoaded', function () {
    var wTrigger = document.querySelector('.widget-trigger');
    var widget = document.querySelector('.widget');

    wTrigger.addEventListener('mouseenter', function () {
        widget.classList.add('on-hover');
    });
    wTrigger.addEventListener('mouseleave', function () {
        widget.classList.remove('on-hover');
    })

})
