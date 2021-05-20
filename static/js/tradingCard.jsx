"use strict";
const tradingCardData = [
  {
    name: 'Balloonicorn',
    skill: 'video games',
    imgUrl: '/static/img/balloonicorn.jpg'
  },

  {
    name: 'Float',
    skill: 'baking pretzels',
    imgUrl: '/static/img/float.jpg'
  },

  {
    name: 'Llambda',
    skill: 'knitting scarves',
    imgUrl: '/static/img/llambda.jpg'
  },


  {
    name: 'Off-By-One',
    skill: 'climbing mountains',
    imgUrl: '/static/img/off-by-one.jpeg'
  },

  {
    name: 'Seed.py',
    skill: 'making curry dishes',
    imgUrl: '/static/img/seedpy.jpeg'
  },

  {
    name: 'Polymorphism',
    skill: 'costumes',
    imgUrl: '/static/img/polymorphism.jpeg'
  },

  {
    name: 'Short Stack Overflow',
    skill: 'ocean animal trivia',
    imgUrl: '/static/img/shortstack-overflow.jpeg'
  },

  {
    name: 'Merge',
    skill: 'bullet journaling',
    imgUrl: '/static/img/merge.png'
  }
];

// define TradingCard component
   // render one trading card

  function TradingCard(props) {
    return (
      <div className="card">
        <h2>Name: {props.name}</h2>
        <img src={props.imgUrl} />
        <h2>Skill: {props.skill}</h2>
      </div>
    );
  }

// define TradingCardContainer component
function TradingCardContainer() {
  //create empty list called paragraphs
  const tradingCards = [];

  //looping through each entry in tradingCardData dict
  //...and pushing name, skill, and img into empty list tradingCards
  for (const currentCard of tradingCardData) {
    tradingCards.push(
      <TradingCard
        name={currentCard.name}
        skill={currentCard.skill}
        imgUrl={currentCard.imgUrl}
      />
    );
  }
  //turning paragraph list of all names within a <React.Fragment> 
  return (
    <React.Fragment>
      {tradingCards}
    </React.Fragment>
  );
}

// mount just ONE thing onto the page: (ReactDOM.render)
// one TradingCardContainer component
ReactDOM.render( 
  <TradingCardContainer/>,
  document.querySelector('.grid')
);
