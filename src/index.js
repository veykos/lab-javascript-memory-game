const cards = [
  { name: 'aquaman', img: 'aquaman.jpg' },
  { name: 'batman', img: 'batman.jpg' },
  { name: 'captain america', img: 'captain-america.jpg' },
  { name: 'fantastic four', img: 'fantastic-four.jpg' },
  { name: 'flash', img: 'flash.jpg' },
  { name: 'green arrow', img: 'green-arrow.jpg' },
  { name: 'green lantern', img: 'green-lantern.jpg' },
  { name: 'ironman', img: 'ironman.jpg' },
  { name: 'spiderman', img: 'spiderman.jpg' },
  { name: 'superman', img: 'superman.jpg' },
  { name: 'the avengers', img: 'the-avengers.jpg' },
  { name: 'thor', img: 'thor.jpg' },
  { name: 'aquaman', img: 'aquaman.jpg' },
  { name: 'batman', img: 'batman.jpg' },
  { name: 'captain america', img: 'captain-america.jpg' },
  { name: 'fantastic four', img: 'fantastic-four.jpg' },
  { name: 'flash', img: 'flash.jpg' },
  { name: 'green arrow', img: 'green-arrow.jpg' },
  { name: 'green lantern', img: 'green-lantern.jpg' },
  { name: 'ironman', img: 'ironman.jpg' },
  { name: 'spiderman', img: 'spiderman.jpg' },
  { name: 'superman', img: 'superman.jpg' },
  { name: 'the avengers', img: 'the-avengers.jpg' },
  { name: 'thor', img: 'thor.jpg' }
];

const memoryGame = new MemoryGame(cards);

window.addEventListener('load', (event) => {
  let html = '';
  memoryGame.cards.forEach((pic) => {
    html += `
      <div class="card" data-card-name="${pic.name}">
        <div class="back" name="${pic.img}"></div>
        <div class="front" style="background: url(img/${pic.img}) no-repeat"></div>
      </div>
    `;
  });

  // Add all the divs to the HTML
  document.querySelector('#memory-board').innerHTML = html;

  // Bind the click event of each element to a function
  document.querySelectorAll('.card').forEach((card) => {
    card.addEventListener('click', (event) => {
      
      const clicked_card = event.target;
    


      clicked_card.parentNode.classList.add('turned');
      
      const clicked_card_parent = clicked_card.parentNode;

      // If we have 0 or 1 clicked, push card to clicked array
      if (memoryGame.pickedCards.length < 2) {
        memoryGame.pickedCards.push(clicked_card_parent);
      }

      if (memoryGame.pickedCards.length == 2) {
        if(memoryGame.checkIfPair(memoryGame.pickedCards[0],memoryGame.pickedCards[1])) {
          for (let i = 0; i < memoryGame.pickedCards.length; i++) {
            memoryGame.pickedCards[i].classList.add('blocked');
          }
        } else {
          for (let i = 0; i < memoryGame.pickedCards.length; i++) {
            setTimeout(() => {
              memoryGame.pickedCards[i].classList.remove('turned')
            },700);
          }

        }
        setTimeout(() => memoryGame.pickedCards.splice(0,memoryGame.pickedCards.length), 1600);
      }
      

    })
    });

});
