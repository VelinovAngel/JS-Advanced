function deckOfCards(arr) {
    // console.log(arr.map(card => {
    //     const face = card.slice(0, -1);
    //     const suit = card.slice(-1);
    //     return playingCards(face, suit);
    // }).join(' '));
    const result = [];
    for (const card of arr) {
        const face = card.slice(0, -1);
        const suit = card.slice(-1);
        try {
            result.push(playingCards(face, suit));
        } catch (error) {
            console.log('Invalid card:' + ' ' +card);
            return;
        }
    }

    console.log(result.join(' '));

    function playingCards(face, suit) {
        const faces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
        const suits = {
            'S': '\u2660',
            'H': '\u2665',
            'D': '\u2666',
            'C': '\u2663',
        }

        if (!Object.keys(suits).includes(suit)) {
            throw new Error('Invalid suit!');
        }

        if (!faces.includes(face)) {
            throw new Error('Invalid face!');
        }

        return {
            face,
            suit: suits[suit],
            toString() {
                return this.face + this.suit;
            }
        }
    }

}


deckOfCards(['AS', '10D', 'KH', '2C']);
deckOfCards(['5S', '3D', 'QD', '1C']);