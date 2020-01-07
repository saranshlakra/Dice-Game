var dice, score, roundScore, currentPlayer, maxValue, gamePlaying;

score = [0, 0];
roundScore = 0;
currentPlayer = 0;


alert('Game Instructions: ' +

        '1. Game is for 20 points. Whichever players collect 20 points first will be the winner. ' +
        '2. Game start with player 1 and than players have to roll dice and will get numbers on the dice. ' +
        '3. Players can click roll  dice multiple time to collect more points but at any point dice rolls to one than all the points becoms zero in current score. ' +
        '4. Players can save their current point in Main score mentioned beneaths player name by pressing hold button and that score cant be zero. ' +
        '5. Player who save or hold twenty points first will bw the winner. ' +
        '6. For playing again click on new game.')
    //document.querySelector('#current-' + currentPlayer).innerHTML = '<em>' + dice + '</em> '; // to write charcters etc here.
    // to only read the value ( not assigning like above) by querySelector and store it in vatiable.
    /* var x = document.querySelector('#score-0').textContent;
     console.log(x); */


// callback function btn function call in another function.
document.querySelector('.btn-roll').addEventListener('click', function() {
    dice = Math.floor(Math.random() * 6 + 1);
    document.querySelector('.dice1').style.display = 'block';
    document.querySelector('.dice1').src = 'dice' + dice + '.png';


    if (dice !== 1) {
        //   document.querySelector('#current-' + currentPlayer).textContent = dice;
        roundScore += dice;
        document.querySelector('#current-' + currentPlayer).textContent = roundScore;

        // console.log(dice);
    } else {
        currentPlayer === 0 ? currentPlayer = 1 : currentPlayer = 0;
        roundScore = 0;
        document.getElementById('current-0').textContent = '0';
        document.getElementById('current-1').textContent = '0';
        document.querySelector('.panel0').classList.toggle('active');
        document.querySelector('.panel1').classList.toggle('active');
        document.querySelector('.dice1').style.display = 'none';
    }
} /* -----> anonymous function  */ );

// document.querySelector('.dice1').style.display = 'block';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';
document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.querySelector('.btn-roll').style.display = 'block';
document.querySelector('.btn-hold').style.display = 'block';




document.querySelector('.dice1').style.display = 'none';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';
document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';

document.querySelector('.btn-hold').addEventListener('click', function() {
    score[currentPlayer] += roundScore;
    document.querySelector('#score-' + currentPlayer).textContent = score[currentPlayer];


    if (score[currentPlayer] >= 20) {
        //  console.log('winner');
        document.querySelector('#name-' + currentPlayer).textContent = 'Winner!';
        document.querySelector('.dice1').style.display = 'none';
        document.querySelector('.btn-roll').style.display = 'none';
        document.querySelector('.btn-hold').style.display = 'none';


    } else {
        currentPlayer === 0 ? currentPlayer = 1 : currentPlayer = 0;
        roundScore = 0;
        document.getElementById('current-0').textContent = '0';
        document.getElementById('current-1').textContent = '0';
        document.querySelector('.panel0').classList.toggle('active');
        document.querySelector('.panel1').classList.toggle('active');
        document.querySelector('.dice1').style.display = 'none';

    }
});

function init() {
    score = [0, 0];
    roundScore = 0;
    currentPlayer = 0;
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('name-0').textContent = 'Player 1';
    document.getElementById('name-1').textContent = 'Player 2';
    document.querySelector('.btn-roll').style.display = 'block';
    document.querySelector('.btn-hold').style.display = 'block';
    document.querySelector('.panel0').classList.add('active');
    document.querySelector('.panel1').classList.remove('active');
    maxValue = undefined;

};

document.querySelector('.btn-new').addEventListener('click', init);