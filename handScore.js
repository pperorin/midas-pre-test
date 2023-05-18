const FACE_CARD = ['J', 'Q', 'K'];
const ACE_CARD = 'A';

function getCardScore(card) {
    const cardScore = card.toString().slice(1)
    if (cardScore === ACE_CARD) return 11;
    else if (FACE_CARD.includes(cardScore)) return 10;
    return Number(cardScore);
}

function findDuplicateCardScore(list) {
    let isDuplicate = true;
    let score = getCardScore(list[0]);
    for (let i = 1; i < list.length; i++) {
        if (score !== getCardScore(list[i])) {
            isDuplicate = false;
        }
    }
    if (isDuplicate && list[0].slice(1) === ACE_CARD) {
        return 35;
    } else if (isDuplicate) {
        return 32.5;
    } else {
        return 0;
    }
}

function getHandScore(input) {
    let spades = 0;
    let hearts = 0;
    let diamonds = 0;
    let clubs = 0;
    let cards = input.toString().split(' ');
    if (findDuplicateCardScore(cards) !== 0) return findDuplicateCardScore(cards);
    cards.forEach(card => {
        if (card[0] === 'S') spades += getCardScore(card);
        else if (card[0] === 'H') hearts += getCardScore(card);
        else if (card[0] === 'D') diamonds += getCardScore(card);
        else if (card[0] === 'C') clubs += getCardScore(card);

    });
    return Math.max(spades, hearts, diamonds, clubs);
}
