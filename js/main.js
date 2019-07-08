const widgetArray = [
  {id: '#timelineWidget'},
  {id: '#infographicWidget'},
  {id: '#gameWidget'},
  {id: '#storyWidget'}
];

const timelineArray = [{
    id: 1,
    timelinePhoto: '',
    year: '3000s BCE',
    text: 'The earliest record of abortion appears in the Royal Archives of China. [4000yrs]'
  },{
    id: 2,
    timelinePhoto: '',
    year: '1850s–1500s BCE',
    text: 'Ancient Egyptian medical texts define herbal recipes for contraceptive methods and spermacides. [4000yrs - needs editing]'
  },{
    id: 3,
    timelinePhoto: 'img/fragment_of_Hippocratic_oath.png',
    year: '400s BCE',
    text: 'The Hippocratic Oath was written in Ancient Greece, where abortions were legal. Sources disagree on whether the original text vowed not to give women "an abortive pessary" or "a destructive pessary", alluding to the dangerous infections caused by a soaked piece of wool. After the fall of Greece and the school of Hippocrates, the Oath was rediscovered by Christian scholars and began to be used again in 1508CE. By 1750, it had been translated into European languages and was widely recited. [ASCO] '
  },{
    id: 4,
    timelinePhoto: 'img/coin-silphium-cyrenne.png',
    year: '300s BCE',
    text: 'Philosophers like Plato and Aristotle write openly about birth control and contraceptives. Use of contraceptive and abortive herbs, silphium, birthwort, and "the chaste tree" is well documented in Ancient Greece, Egypt, and Northern Africa. Exports of silphium make the African colony Cyrenne rich, and eventually turn the plant extinct. [4000yrs]'
  },{
    id: 5,
    timelinePhoto: 'https://via.placeholder.com/400x300/#999999/#EFEEE3/?text=placeholder',
    year: 'year',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '
  },{
    id: 6,
    timelinePhoto: 'https://via.placeholder.com/400x300/#999999/#EFEEE3/?text=placeholder',
    year: 'year',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '
  },{
    id: 7,
    timelinePhoto: 'https://via.placeholder.com/400x300/#999999/#EFEEE3/?text=placeholder',
    year: 'year',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '
  },{
    id: 8,
    timelinePhoto: 'https://via.placeholder.com/400x300/#999999/#EFEEE3/?text=placeholder',
    year: 'year',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '
  },{
    id: 9,
    timelinePhoto: 'img/horatio-storer-american-medical-association.jpg',
    year: 1857,
    text: 'Dr. Horatio Storer, the "father of American gynecology" successfully lobbies the decade-old American Medical Association to denounce the previously legal practice of abortion. [1] "We are the physical guardians of women," he says in an 1859 report [12]. The same man penned a paper entitled "The Origins of Insanity in Women" in 1865, in which he advocates for ovariotomies for anything from shoplifting to "self-indulgent" behavior in women to "remove the cause". Storer\'s 1859 report on the criminality of abortion becomes the AMA\'s official policy until 1967. [11]'
  },{
    id: 10,
    timelinePhoto: 'https://via.placeholder.com/400x300/#999999/#EFEEE3/?text=placeholder',
    year: 1869,
    text: 'The Catholic Church condemns abortion for all stages of pregnancy. Previously abortion before "ensoulment of the fetus" at "thirty days after conception" was not thought to be a sin. [4000yrs - needs editing]'
  },{
    id: 11,
    timelinePhoto: 'img/anthony-comstock-law-1873.jpg',
    year: 1873,
    text: 'The “Comstock Law” criminalized contraception and abortion, and information in the United States, except when a physician deemed either was necessary. With the passage of this law, women lost what had been their common law right. [4000yrs - needs editing]'
  },{
    id: 12,
    timelinePhoto: 'https://via.placeholder.com/400x300/#999999/#EFEEE3/?text=placeholder',
    year: 'year',
    text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '
  },{
    id: 13,
    timelinePhoto: 'https://via.placeholder.com/400x300/#999999/#EFEEE3/?text=placeholder',
    year: '1930s',
    text: 'The American Birth Control League was started by Margaret Sanger and quickly grew to over 500 birth control clinics throughout the United States. Abortions in the United States increased with economic pressures to over 681,000 each year inciting many physicians to become abortion specialists. In addition to numerous physicians in New York City, and underground clinics were established on the West Coast. During the Depression era, contraceptive devices and condoms became ever more socially acceptable and were commonly available at pharmacies and gas stations. The United States had one of the highest maternal mortality rates in the world with induced abortions responsible for at least 14% of deaths. [4000yrs - needs editing]'
  },{
    id: 14,
    timelinePhoto: 'img/roe-v-wade-norma-mccorvey-gloria-allred.jpg',
    year: 1973,
    text: 'Passed on January 22nd, Roe v Wade affirmed that the right of privacy protected under the 14th Amendment to the Constitution included “a woman’s decision whether or not to terminate her pregnancy.” [CNN, 4000yrs]'
  },{
    id: 15,
    timelinePhoto: 'img/henry-hyde-hyde-amendment.jpg',
    year: 1976,
    text: 'The Hyde Amendment blocks federal Medicaid funding for abortions, making obtaining an abortion very difficult for those with lower income, predominantly half of which are women of color. Just a year later, on October 3rd, 1977, young mother and student Rosie Jiménez dies in Texas from an illegal abortion. She didn\'t have the financial means to obtain undergo a safe procedure.[texas observer]'
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
		'events', 'timelinePhoto', 'text', 'year'
	],
	template: `
			<div class='container column horizontal-scroll'>
				<div class='timeline-image-placeholder'>
          <img v-bind:src='timelinePhoto' class='photo'/>
        </div>
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
        }
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
        return 0.5 - Math.random();
      });
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
