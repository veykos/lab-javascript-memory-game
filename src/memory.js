class MemoryGame {
  constructor(cards) {
    this.cards = this.shuffleCards(cards);
    this.pickedCards = [];
    this.pairsClicked = 0
    this.pairsGuessed = 0
    // add the rest of the class properties here
  }

  shuffleCards() {
    let unshuffled_cards = cards.slice();
    let shuffled_cards = [];
    while (unshuffled_cards.length > 0) {
      let random_index = Math.floor((Math.random()*unshuffled_cards.length))
      shuffled_cards.push(...unshuffled_cards.splice(random_index,1))
    }
    return shuffled_cards
    // ... write your code here
  }

  checkIfPair(card1, card2) {
    this.pairsClicked += 1;
    const pairs_text = document.querySelector('#pairs-clicked');
    pairs_text.innerText = this.pairsClicked

    let card1_name = card1.getAttribute('data-card-name');
    let card2_name = card2.getAttribute('data-card-name');

    if (card1_name === card2_name) {
      this.pairsGuessed += 1;
      document.querySelector('#pairs-guessed').innerText = this.pairsGuessed;
      return true
    } else {
      return false
    }
    // ... write your code here
  }

  checkIfFinished() {
    if (this.pairsGuessed === (this.cards.length / 2)) {
      alert('Congratulations, you have very good memory :) !')
    }
    // ... write your code here
  }
}

