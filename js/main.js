/* SLIDE ARRAY
- infographic images
- fed into infographic component
*/

const slideArray = [{
  id: 0,
  caption: 'Some text',
  infographics: 'img/infographics.jpg',
  imageDescription: 'Infographic: 1 in 4 women in the U.S. will have an abortion by the time she is 45.'
},{
  id: 1,
  caption: 'Some text',
  infographics: 'img/intended-pregnancies-us-infographic.jpg',
  imageDescription: 'Infographic: tbd.'
},{
  id: 2,
  caption: 'Some text',
  infographics: 'img/infographics3.jpg',
  imageDescription: 'Infographic: tbd.'
},{
  id: 3,
  caption: 'Some text',
  infographics: 'img/infographics4.jpg',
  imageDescription: 'Infographic: tbd.'
},{
  id: 4,
  caption: 'Some text',
  infographics: 'img/infographics5.jpg',
  imageDescription: 'Infographic: tbd.'
},{
  id: 5,
  caption: 'Some text',
  infographics: 'img/infographics6.jpg',
  imageDescription: 'Infographic: tbd.'
}];


/*
TIMELINE ARRAY
- photos, data and citations
- fed into timeline-entry component
*/

const timelineArray = [{
    timelinePhoto: 'img/13c-pennyroyal-herbal-abortive.jpg',
    year: '3000–1500s BCE',
    text: 'The earliest record of abortion appears in 3000 BCE, in the Royal Archives of China. In the 1500s BCE, Ancient Egyptian medical texts define herbal recipes for contraceptive methods and spermacides.',
    factCite: 1,
    imageDescription: 'Early drawing of a midwife giving a pregnant woman an herb'
  },{
    timelinePhoto: 'img/fragment_of_Hippocratic_oath.jpg',
    year: '400s BCE',
    text: 'The Hippocratic Oath was written in Ancient Greece, where abortions were legal. Sources disagree on whether the original text vowed not to give women "an abortive pessary" or "a destructive pessary", alluding to the dangerous infections caused by a soaked piece of wool. After the fall of Greece and the school of Hippocrates, the Oath was rediscovered by Christian scholars and began to be used again in 1508CE. By 1750, it had been translated into European languages and was widely recited.',
    factCite: 4,
    imageDescription: 'Fragment of the Hippocratic Oath'
  },{
    timelinePhoto: 'img/coin-silphium-cyrenne.jpg',
    year: '300s BCE',
    text: 'Philosophers like Plato and Aristotle write openly about birth control and contraceptives. Use of contraceptive and abortive herbs, silphium, birthwort, and "the chaste tree" is well documented in Ancient Greece, Egypt, and Northern Africa. Exports of silphium make the African colony Cyrenne rich, and eventually turn the plant extinct. ',
    factCite: 1,
    imageDescription: 'Image of the two sides of the coin of Cyrenne'
  },{
    timelinePhoto: 'img/horatio-storer-american-medical-association.jpg',
    year: 1857,
    text: 'Dr. Horatio Storer, the "father of American gynecology" successfully lobbies the decade-old American Medical Association to denounce the previously legal practice of abortion. "We are the physical guardians of women," he says in an 1859 report. The same man penned a paper entitled "The Origins of Insanity in Women" in 1865, in which he advocates for ovariotomies for anything from shoplifting to "self-indulgent" behavior in women to "remove the cause". Storer\'s 1859 report on the criminality of abortion becomes the AMA\'s official policy until 1967.',
    factCite: '1,11,12',
    imageDescription: 'Photo of Horatio Storer'
  },{
    timelinePhoto: 'img/Pope_Pius_IX_surrounded_by_clerics.jpg',
    year: 1869,
    text: 'Led by Pope Pius IX, the Catholic Church condemns abortion for all stages of pregnancy. Previously abortion before "ensoulment of the fetus" at "thirty days after conception" was not thought to be a sin.',
    factCite: '1,17',
    imageDescription: 'xxx'
  },{
    timelinePhoto: 'img/anthony-comstock-law-1873.jpg',
    year: 1873,
    text: 'The “Comstock Law” criminalized contraception and abortion, and information in the United States, except when a physician deemed either was necessary. With the passage of this law, women lost what had been their common law right.',
    factCite: 1,
    imageDescription: 'Photo of Anthony Comstock'
  },{
    timelinePhoto: 'img/sanger-on-court-steps.jpg',
    year: '1930s',
    text: 'The American Birth Control League was started by Margaret Sanger and quickly grew to over 500 birth control clinics throughout the United States. Abortions in the United States increased with economic pressures to over 681,000 each year inciting many physicians to become abortion specialists. In addition to numerous physicians in New York City, underground clinics were established on the West Coast. Contraceptive devices and condoms were available at pharmacies and gas stations.',
    factCite: 1,
    imageDescription: 'Photo of Margaret Sanger on court steps with women and children'
  },{
    timelinePhoto: 'img/ca-governor-ronald-reagan-and-family.jpg',
    year: 1967,
    text: 'Then California Governor Ronald Reagan signs the Therapeutic Abortion Act, one of the most progressive abortion laws of its day.',
    factCite: 15,
    imageDescription: 'Photo of then California Governor Ronald Reagan with his family'
  },{
    timelinePhoto: 'img/roe-v-wade-norma-mccorvey-gloria-allred.jpg',
    year: 1973,
    text: 'Passed on January 22nd, Roe v Wade affirmed that the right of privacy protected under the 14th Amendment to the Constitution included “a woman’s decision whether or not to terminate her pregnancy.”',
    factCite: '1,2',
    imageDescription: 'Photo of Norma McCorvey and Gloria Allred (aka Jane Roe)'
  },{
    timelinePhoto: 'img/henry-hyde-hyde-amendment.jpg',
    year: 1976,
    text: 'The Hyde Amendment blocks federal Medicaid funding for abortions, making obtaining an abortion very difficult for those with lower income, predominantly half of which are women of color. Just a year later, on October 3rd, 1977, young mother and student Rosie Jiménez dies in Texas from an illegal abortion. She didn\'t have the financial means to obtain undergo a safe procedure.',
    factCite: 3,
    imageDescription: 'Photo of Henry Hyde'
  },{
    timelinePhoto: 'img/lets-make-america-great-again-reagan-button-1980.jpg',
    year: 1980,
    text: 'Identified as a powerful tactic by Republican strategists, the "rights of the unborn" are used with great effect to rally evangelicals and upset Democrats. "With regard to the freedom of the individual for choice with regard to abortion, there\'s one individual who\'s not being considered at all. That\'s the one who is being aborted," says Reagan. He wins by a landslide. ',
    factCite: 3,
    imageDescription: 'Photo of 1980s campaign button with slogan "Make America Great Again"'
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
    'winning': false,
    'imageDescription': 'Myth: Abortion causes breast cancer'
  },{
    'index': 2 ,
    'issue': 'breast-cancer',
    'text': '?',
    'cardFace': 'img/matching-breast-cancer-truth.png',
    'selected': 'unselected',
    'winning': false,
    'imageDescription': 'Truth: Neither abortion nor miscarriage causes breast cancer'
  },{
    'index': 3 ,
    'issue': 'federal-funding',
    'text': '?',
    'cardFace': 'img/matching-federal-funding-myth.png',
    'selected': 'unselected',
    'winning': false,
    'imageDescription': 'Myth: Federal Funding is used to pay for abortions'
  },{
    'index': 4 ,
    'issue': 'federal-funding',
    'text': '?',
    'cardFace': 'img/matching-federal-funding-truth.png',
    'selected': 'unselected',
    'winning': false,
    'imageDescription': 'Truth: Federal funding is only used to pay for abortions in case of rape, incest or risk of death to the mother'
  },{
    'index': 5 ,
    'issue': 'sex-ed',
    'text': '?',
    'cardFace': 'img/matching-sex-ed-truth.png',
    'selected': 'unselected',
    'winning': false,
    'imageDescription': 'Truth: Sex ed and access to contraceptives are proven to lower abortion rates'
  },{
    'index': 6 ,
    'issue': 'sex-ed',
    'text': '?',
    'cardFace': 'img/matching-sex-ed-myth.png',
    'selected': 'unselected',
    'winning': false,
    'imageDescription': 'Myth: Sed ed leads to abortion'
  },{
    'index': 7 ,
    'issue': 'promiscuity',
    'text': '?',
    'cardFace': 'img/matching-promiscuity-truth.png',
    'selected': 'unselected',
    'winning': false,
    'imageDescription': 'Truth: Most are mothers with families experiencing financial hardship'
  },{
    'index': 8 ,
    'issue': 'promiscuity',
    'text': '?',
    'cardFace': 'img/matching-promiscuity-myth.png',
    'selected': 'unselected',
    'winning': false,
    'imageDescription': 'Myth: Abortion is a sign of carelessness and promiscuity'
  },{
    'index': 9 ,
    'issue': 'imagery',
    'text': '?',
    'cardFace': 'img/matching-photos-truth.png',
    'selected': 'unselected',
    'winning': false,
    'imageDescription': 'Truth: Photos depict highly rare late term abortions (<1.5% of cases), devastating decisions made due to health of mother or baby'
  },{
    'index': 10 ,
    'issue': 'imagery',
    'text': '?',
    'cardFace': 'img/matching-photos-myth.png',
    'selected': 'unselected',
    'winning': false,
    'imageDescription': 'Myth: Anti-abortion photos are accurate depictions of abortion'
  },{
    'index': 11 ,
    'issue': 'good-evil',
    'text': '?',
    'cardFace': 'img/matching-good-v-evil-truth.png',
    'selected': 'unselected',
    'winning': false,
    'imageDescription': 'Truth: Everyone goes through hard choices. 62% of people who obtain abortions are Christian'
  },{
    'index': 12 ,
    'issue': 'good-evil',
    'text': '?',
    'cardFace': 'img/matching-good-v-evil-myth.png',
    'selected': 'unselected',
    'winning': false,
    'imageDescription': 'Myth: "Abortionists" and people who have abortions are evil'
  },{
    'index': 13 ,
    'issue': 'dangerous',
    'text': '?',
    'cardFace': 'img/matching-danger-myth.png',
    'selected': 'unselected',
    'winning': false,
    'imageDescription': 'Myth: Abortion is dangerous'
  },{
    'index': 14 ,
    'issue': 'dangerous',
    'text': '?',
    'cardFace': 'img/matching-danger-truth.png',
    'selected': 'unselected',
    'winning': false,
    'imageDescription': 'Since Roe v. Wade, abortions happen early (<8-12 weeks), and with <0.5% serious complications'
  },{
    'index': 15 ,
    'issue': 'birth-control',
    'text': '?',
    'cardFace': 'img/matching-birth-control-myth.png',
    'selected': 'unselected',
    'winning': false,
    'imageDescription': 'Myth: People use abortion as birth control'
  },{
     'index': 16 ,
     'issue': 'birth-control',
     'text': '?',
     'cardFace': 'img/matching-birth-control-truth.png',
     'selected': 'unselected',
     'winning': false,
     'imageDescription': 'Truth: An emotionally fraught decision for which 57% pay a lot out of pocket'
  }];


/*
SLIDE ARRAY
- infographic images
- fed into infographic component
*/

Vue.component ( 'infographic-slider', {
	props: [
		'slides' , 'infographics' , 'id' , 'caption' , 'current' , 'imageDescription'
	],
	template: `
    <div class='container widget full-width white-bg'>

      <div  class='item item-2-3'>
        <img v-bind:src='infographics' v-bind:alt='imageDescription' class='img-item'/>
      </div>

      <div class='item item-1-3 text-item'>
        <p>{{ caption }}</p>
      </div>

    </div>
  `
});


/*
TIMELINE ENTRY COMPONENT
- each timeline entry is built on this structure
*/

Vue.component ( 'timeline-entry', {
	props: [
		'events' , 'timelinePhoto' , 'text' , 'year' , 'factCite' , 'imageDescription'
	],
	template: `
			<div class='container column horizontal-scroll'>

				<div>
          <img v-bind:src='timelinePhoto' v-bind:alt='imageDescription' class='timeline-photo'/>
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
*/

Vue.component ( 'single-card', {
	props: [
		'cards', 'cardFace' , 'imageDescription'
	],
	template: `
  <div class='card'>
    <img v-bind:src='cardFace' v-bind:alt='imageDescription' class='photo'/>
  </div>
	`
});


/*
INFOGRAPHIC SLIDER Vue object
- passes images and text through a component
- automatically scrolls through images horizontally
- ability to pause and advance slider manually
*/

var slider = new Vue({
  el: "#slider",

  data: {
    current: 1,
    slides: slideArray,
    timer: null
  },

  mounted: function() {
    this.startRotation();
  },

  methods: {
    startRotation: function() {
      this.timer = setInterval(this.next, 15000);
    },

    stopRotation: function() {
      clearTimeout(this.timer);
      this.timer = null;
    },

    next: function() {
      this.current += 1;
    },

    previous: function() {
      this.current -= 1;
    }
  }
});


var vm = new Vue ({
  el: '#matchingTool',

  data: {
    matchingMessage: 'Click two cards at a time to reveal.',
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
              this.matchingMessage = 'You found a match. Keep going.';
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


var vm = new Vue ({
  el: '#timelineApp',
  data: {
    events: timelineArray
  },

});
