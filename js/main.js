const widgetArray = [
  {id: '#timelineWidget'},
  {id: '#infographicWidget'},
  {id: '#gameWidget'},
  {id: '#storyWidget'}
];

const timelineArray = [{
    timelinePhoto: 'img/13c-pennyroyal-herbal-abortive.jpg',
    year: '3000–1500s BCE',
    text: 'The earliest record of abortion appears in 3000 BCE, in the Royal Archives of China. In the 1500s BCE, Ancient Egyptian medical texts define herbal recipes for contraceptive methods and spermacides.',
    factCite: 1
  },{
    timelinePhoto: 'img/fragment_of_Hippocratic_oath.jpg',
    year: '400s BCE',
    text: 'The Hippocratic Oath was written in Ancient Greece, where abortions were legal. Sources disagree on whether the original text vowed not to give women "an abortive pessary" or "a destructive pessary", alluding to the dangerous infections caused by a soaked piece of wool. After the fall of Greece and the school of Hippocrates, the Oath was rediscovered by Christian scholars and began to be used again in 1508CE. By 1750, it had been translated into European languages and was widely recited.',
    factCite: 4
  },{
    timelinePhoto: 'img/coin-silphium-cyrenne.jpg',
    year: '300s BCE',
    text: 'Philosophers like Plato and Aristotle write openly about birth control and contraceptives. Use of contraceptive and abortive herbs, silphium, birthwort, and "the chaste tree" is well documented in Ancient Greece, Egypt, and Northern Africa. Exports of silphium make the African colony Cyrenne rich, and eventually turn the plant extinct. ',
    factCite: 1
  },{
    timelinePhoto: 'img/horatio-storer-american-medical-association.jpg',
    year: 1857,
    text: 'Dr. Horatio Storer, the "father of American gynecology" successfully lobbies the decade-old American Medical Association to denounce the previously legal practice of abortion. "We are the physical guardians of women," he says in an 1859 report. The same man penned a paper entitled "The Origins of Insanity in Women" in 1865, in which he advocates for ovariotomies for anything from shoplifting to "self-indulgent" behavior in women to "remove the cause". Storer\'s 1859 report on the criminality of abortion becomes the AMA\'s official policy until 1967.',
    factCite: '1,11,12'
  },{
    timelinePhoto: 'img/Pope_Pius_IX_surrounded_by_clerics.jpg',
    year: 1869,
    text: 'Led by Pope Pius IX, the Catholic Church condemns abortion for all stages of pregnancy. Previously abortion before "ensoulment of the fetus" at "thirty days after conception" was not thought to be a sin.',
    factCite: '1,17'
  },{
    timelinePhoto: 'img/anthony-comstock-law-1873.jpg',
    year: 1873,
    text: 'The “Comstock Law” criminalized contraception and abortion, and information in the United States, except when a physician deemed either was necessary. With the passage of this law, women lost what had been their common law right.',
    factCite: 1
  },{
    timelinePhoto: 'img/sanger-on-court-steps.jpg',
    year: '1930s',
    text: 'The American Birth Control League was started by Margaret Sanger and quickly grew to over 500 birth control clinics throughout the United States. Abortions in the United States increased with economic pressures to over 681,000 each year inciting many physicians to become abortion specialists. In addition to numerous physicians in New York City, underground clinics were established on the West Coast. Contraceptive devices and condoms were available at pharmacies and gas stations.',
    factCite: 1
  },{
    timelinePhoto: 'img/ca-governor-ronald-reagan-and-family.jpg',
    year: 1967,
    text: 'Then California Governor Ronald Reagan signs the Therapeutic Abortion Act, one of the most progressive abortion laws of its day.',
    factCite: 15
  },{
    timelinePhoto: 'img/roe-v-wade-norma-mccorvey-gloria-allred.jpg',
    year: 1973,
    text: 'Passed on January 22nd, Roe v Wade affirmed that the right of privacy protected under the 14th Amendment to the Constitution included “a woman’s decision whether or not to terminate her pregnancy.”',
    factCite: '1,2'
  },{
    timelinePhoto: 'img/henry-hyde-hyde-amendment.jpg',
    year: 1976,
    text: 'The Hyde Amendment blocks federal Medicaid funding for abortions, making obtaining an abortion very difficult for those with lower income, predominantly half of which are women of color. Just a year later, on October 3rd, 1977, young mother and student Rosie Jiménez dies in Texas from an illegal abortion. She didn\'t have the financial means to obtain undergo a safe procedure.',
    factCite: 3
  },{
    timelinePhoto: 'img/lets-make-america-great-again-reagan-button-1980.jpg',
    year: 1980,
    text: 'Identified as a powerful tactic by Republican strategists, the "rights of the unborn" are used with great effect to rally evangelicals and upset Democrats. "With regard to the freedom of the individual for choice with regard to abortion, there\'s one individual who\'s not being considered at all. That\'s the one who is being aborted," says Reagan. He wins by a landslide. ',
    factCite: 3
  }
];

/*
CARD ARRAY
- keys of text, selected, and winning are changed in the game when matches occur
- these changes inform other functions and classes in the app
*/

const cardArray = [{
   'index': 1 ,
   'issue': 'breast-cancer',
   'text': '?',
   'cardFace': 'img/matching-breast-cancer-myth.png',
   'selected': 'unselected',
   'winning': false
  },{
    'index': 2 ,
    'issue': 'breast-cancer',
    'text': '?',
    'cardFace': 'img/matching-breast-cancer-truth.png',
    'selected': 'unselected',
    'winning': false
  },{
   'index': 3 ,
   'issue': 'federal-funding',
   'text': '?',
   'cardFace': 'img/matching-federal-funding-myth.png',
   'selected': 'unselected',
   'winning': false
  },{
   'index': 4 ,
   'issue': 'federal-funding',
   'text': '?',
   'cardFace': 'img/matching-federal-funding-truth.png',
   'selected': 'unselected',
   'winning': false
  },{
   'index': 5 ,
   'issue': 'sex-ed',
   'text': '?',
   'cardFace': 'img/matching-sex-ed-truth.png',
   'selected': 'unselected',
   'winning': false
 },{
   'index': 6 ,
   'issue': 'sex-ed',
   'text': '?',
   'cardFace': 'img/matching-sex-ed-myth.png',
   'selected': 'unselected',
   'winning': false
  },{
    'index': 7 ,
    'issue': 'promiscuity',
    'text': '?',
    'cardFace': 'img/matching-promiscuity-truth.png',
    'selected': 'unselected',
    'winning': false
   },{
     'index': 8 ,
     'issue': 'promiscuity',
     'text': '?',
     'cardFace': 'img/matching-promiscuity-myth.png',
     'selected': 'unselected',
     'winning': false
    },{
      'index': 9 ,
      'issue': 'imagery',
      'text': '?',
      'cardFace': 'img/matching-photos-truth.png',
      'selected': 'unselected',
      'winning': false
     },{
       'index': 10 ,
       'issue': 'imagery',
       'text': '?',
       'cardFace': 'img/matching-photos-myth.png',
       'selected': 'unselected',
       'winning': false
      },{
        'index': 11 ,
        'issue': 'good-evil',
        'text': '?',
        'cardFace': 'img/matching-good-v-evil-truth.png',
        'selected': 'unselected',
        'winning': false
       },{
         'index': 12 ,
         'issue': 'good-evil',
         'text': '?',
         'cardFace': 'img/matching-good-v-evil-myth.png',
         'selected': 'unselected',
         'winning': false
        },{
          'index': 13 ,
          'issue': 'dangerous',
          'text': '?',
          'cardFace': 'img/matching-danger-myth.png',
          'selected': 'unselected',
          'winning': false
         },{
           'index': 14 ,
           'issue': 'dangerous',
           'text': '?',
           'cardFace': 'img/matching-danger-truth.png',
           'selected': 'unselected',
           'winning': false
          },{
            'index': 15 ,
            'issue': 'birth-control',
            'text': '?',
            'cardFace': 'img/matching-birth-control-myth.png',
            'selected': 'unselected',
            'winning': false
           },{
             'index': 16 ,
             'issue': 'birth-control',
             'text': '?',
             'cardFace': 'img/matching-birth-control-truth.png',
             'selected': 'unselected',
             'winning': false
            }];

/*
TIMELINE ENTRY COMPONENT
- each timeline entry is built on this structure
*/

Vue.component ( 'timeline-entry', {
	props: [
		'events', 'timelinePhoto', 'text', 'year', 'factCite'
	],
	template: `
			<div class='container column horizontal-scroll'>
				<div>
          <img v-bind:src='timelinePhoto' class='timeline-photo'/>
        </div>
        <h4>{{ year }}</h4>
  				<p class='timeline-descriptors'>
            {{ text }}
            <sup>{{ factCite }}</sup>
          </p>
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
		'cards', 'cardFace', 'text'
	],
	template: `
  <div class='card'>
    <img v-bind:src='cardFace' class='photo'/>
    <h2>{{ text }}</h2>
  </div>
	`
});

var vm = new Vue ({
  el: '#widgetApp',
  data: {
    matchingMessage: 'Click two cards at a time to reveal.',
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
          if (this.selectedCards[0].issue === this.selectedCards[1].issue) {
              this.selectedCards[0].text = this.selectedCards[1].text =
                '';
              this.selectedCards[0].selected = this.selectedCards[1].selected= 'matched';
              this.matchingMessage = 'You found a match! Keep going.';
              this.matchedCards.push(this.selectedCards[0], this.selectedCards[1]);
              this.selectedCards.pop();
              this.selectedCards.pop();
          } else if (this.selectedCards[0].issue !== this.selectedCards[1].issue) {
            // if not a match, pops both from selectedCards and returns to base values
              this.selectedCards[0].text = this.selectedCards[1].text = 'X';
              setTimeout(function(){
                    this.matchingMessage = 'Click two cards at a time to reveal.';
                    this.selectedCards[0].selected = this.selectedCards[1].selected = 'unselected';
                    this.selectedCards[0].text = this.selectedCards[1].text = '?';
                    this.selectedCards.pop();
                    this.selectedCards.pop();
                    this.cards.disabled = false;
              }.bind(this), 2000);
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
            this.matchingMessage = 'Well done. Thank you for taking the time to further explore these complex issues.';
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
//           if (this.selectedCards[0].issue === this.selectedCards[1].issue) {
//               this.selectedCards[0].text = this.selectedCards[1].text =
//                 'yay';
//               this.selectedCards[0].selected = this.selectedCards[1].selected= 'matched';
//               this.matchedCards.push(this.selectedCards[0], this.selectedCards[1]);
//               this.selectedCards.pop();
//               this.selectedCards.pop();
//           } else if (this.selectedCards[0].issue !== this.selectedCards[1].issue) {
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
