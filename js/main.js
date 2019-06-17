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

/*
CARD ARRAY
- keys of text, selected, and winning are changed in the game when matches occur
- these changes inform other functions and classes in the app
*/

const cardArray = [
   {'index': 1 , 'color': 'red', 'text': '?', 'selected': 'unselected', 'winning': false},
   {'index': 2 , 'color': 'orange', 'text': '?', 'selected': 'unselected', 'winning': false},
   {'index': 3 , 'color': 'yellow', 'text': '?', 'selected': 'unselected', 'winning': false},
   {'index': 4 , 'color': 'green', 'text': '?', 'selected': 'unselected', 'winning': false},
   {'index': 5 , 'color': 'blue', 'text': '?', 'selected': 'unselected', 'winning': false},
   {'index': 6 , 'color': 'purple', 'text': '?', 'selected': 'unselected', 'winning': false},
   {'index': 7 , 'color': 'black', 'text': '?', 'selected': 'unselected', 'winning': false},
   {'index': 8 , 'color': 'brown', 'text': '?', 'selected': 'unselected', 'winning': false},
   {'index': 9 , 'color': 'red', 'text': '?', 'selected': 'unselected', 'winning': false},
   {'index': 10 , 'color': 'orange', 'text': '?', 'selected': 'unselected', 'winning': false},
   {'index': 11 , 'color': 'yellow', 'text': '?', 'selected': 'unselected', 'winning': false},
   {'index': 12 , 'color': 'green', 'text': '?', 'selected': 'unselected', 'winning': false},
   {'index': 13 , 'color': 'blue', 'text': '?', 'selected': 'unselected', 'winning': false},
   {'index': 14 , 'color': 'purple', 'text': '?', 'selected': 'unselected', 'winning': false},
   {'index': 15 , 'color': 'black', 'text': '?', 'selected': 'unselected', 'winning': false},
   {'index': 16 , 'color': 'brown', 'text': '?', 'selected': 'unselected', 'winning': false}
];

/*
TIMELINE ENTRY COMPONENT
- each timeline entry is built on this structure
*/

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

/*
CARD COMPONENT
- each card is built on this structure
- text is passed into the h2 tag on matches or mismatches
*/

Vue.component ( 'single-card', {
	props: [
		'cards', 'text'
	],
	template: `
		<div class='card'>
			<h3>{{ text }}</h3>
		</div>
	`
});

var vm = new Vue ({
  el: '#widgetApp',
  data: {
    widgets: widgetArray,
    events: timelineArray,
    cards: cardArray,
    selectedCards: [],
    matchedCards: []
  },
  // matchedCards are watched for winning status, using .length as the key indicator
  watch: {
    matchedCards: function (cards) {
      if (this.matchedCards.length === this.cards.length){
        for (let i = 0; i <  this.cards.length; i++){
          this.cards[i].winning = true;
        };
        setTimeout(function(){
          this.winner();
        }.bind(this), 500);
      }
    }
  },
  methods: {
      shuffleCards: function() {
        // used by page refresh and new game button to make card order random
        this.cards.sort(function(){
        return 0.5 - Math.random()
        })
      },
      compareCards: function(){
        // compares colors of selectedCards and adds to matchedCards if a match
          if (this.selectedCards[0].color === this.selectedCards[1].color) {
              this.selectedCards[0].text = this.selectedCards[1].text =
                '';
              this.selectedCards[0].selected = this.selectedCards[1].selected= 'matched';
              this.matchedCards.push(this.selectedCards[0], this.selectedCards[1]);
              this.selectedCards.pop();
              this.selectedCards.pop();
          } else if (this.selectedCards[0].color !== this.selectedCards[1].color) {
            // if not a match, pops both from selectedCards and returns to base values
              this.selectedCards[0].text = this.selectedCards[1].text = 'X';
              setTimeout(function(){
                    this.selectedCards[0].selected = this.selectedCards[1].selected = 'unselected';
                    this.selectedCards[0].text = this.selectedCards[1].text = '?';
                    this.selectedCards.pop();
                    this.selectedCards.pop();
                    this.cards.disabled = false;
              }.bind(this), 700);
          }
      },
      displayCard: function(cardSelected){
        // shows card color and pushes to selectedCards
        cardSelected.selected = 'selected';
        this.selectedCards.push(cardSelected);
        cardSelected.disabled = true;
        if( this.selectedCards.length === 2 ){
          // when there are 2 selectedCards, the cards are compared
            this.compareCards();
        }
      },
      winner: function(){
            alert('Bravo!');
      }
  },
  created: function(){
    // allows cards to appear randomized when page loads
    this.shuffleCards();
  }
});



// GAME APP in case I need separate vm later on

/*
APP FUNCTIONS
- cards from array are clicked and pushed to selectedCards array (max of 2) to compare
- if 2 selectedCards are a match, then they are pushed to the matchedCards array
- when the length of the matchedCards array equals the length of the cards array, the player gets a winner alert
- a button can be pushed or page refreshed for a new game
*/
//
// var vm2 = new Vue({
//   el: "#gameWidget",
//   data: {
//     cards: cardArray,
//     selectedCards: [],
//     matchedCards: []
//   },
//   // matchedCards are watched for winning status, using .length as the key indicator
//   watch: {
//     matchedCards: function (cards) {
//       if (this.matchedCards.length === this.cards.length){
//         for (let i = 0; i <  this.cards.length; i++){
//           this.cards[i].winning = true;
//         };
//         setTimeout(function(){
//           this.winner();
//         }.bind(this), 500);
//       }
//     }
//   },
//   methods: {
//       shuffleCards: function() {
//         // used by page refresh and new game button to make card order random
//         this.cards.sort(function(){
//         return 0.5 - Math.random()
//         })
//       },
//       compareCards: function(){
//         // compares colors of selectedCards and adds to matchedCards if a match
//           if (this.selectedCards[0].color === this.selectedCards[1].color) {
//               this.selectedCards[0].text = this.selectedCards[1].text =
//                 'yay';
//               this.selectedCards[0].selected = this.selectedCards[1].selected= 'matched';
//               this.matchedCards.push(this.selectedCards[0], this.selectedCards[1]);
//               this.selectedCards.pop();
//               this.selectedCards.pop();
//           } else if (this.selectedCards[0].color !== this.selectedCards[1].color) {
//             // if not a match, pops both from selectedCards and returns to base values
//               this.selectedCards[0].text = this.selectedCards[1].text = 'X';
//               setTimeout(function(){
//                     this.selectedCards[0].selected = this.selectedCards[1].selected = 'unselected';
//                     this.selectedCards[0].text = this.selectedCards[1].text = '?';
//                     this.selectedCards.pop();
//                     this.selectedCards.pop();
//                     this.cards.disabled = false;
//               }.bind(this), 700);
//           }
//       },
//       displayCard: function(cardSelected){
//         // shows card color and pushes to selectedCards
//         cardSelected.selected = 'selected';
//         this.selectedCards.push(cardSelected);
//         cardSelected.disabled = true;
//         if( this.selectedCards.length === 2 ){
//           // when there are 2 selectedCards, the cards are compared
//             this.compareCards();
//         }
//       },
//       winner: function(){
//             alert('You did it! Everyone is very proud of you.');
//       }
//   },
//   created: function(){
//     // allows cards to appear randomized when page loads
//     this.shuffleCards();
//   }
// });
