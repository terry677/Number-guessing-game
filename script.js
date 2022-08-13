'use strict';

// document.querySelector('.message').textContent = '🎉 correct message';
// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;


// document.querySelector('.guess').value = 23
// console.log(document.querySelector('.guess').value);

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
const displayMessage = function(message) {
    document.querySelector('.message').textContent = message;
}


document.querySelector('.check').addEventListener('click', function() {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);

//when there is no input 
    if (!guess) {
        // document.querySelector('.message').textContent = '⛔️ No guess';
        displayMessage('⛔️ No guess');


        //when player wins the game
    } else if (guess === secretNumber) {
        // document.querySelector('.message').textContent = '🎉 correct message';
        displayMessage('🎉 correct message')
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('body').style.backgroundColor = '#60b347' ;
        document.querySelector('.number').style.width = '30rem';
        
        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore
        }
    
    }
    // when guess is wrong
    else if (guess !==secretNumber){
        if (score > 1) {
            // document.querySelector('.message').textContent = guess > secretNumber ? ' 📈 Too high guess': '📉 Too low guess';
            displayMessage( guess > secretNumber ? ' 📈 Too high guess': '📉 Too low guess');
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            // document.querySelector('.message').textContent = '💥 You lost the game';
            displayMessage('💥 You lost the game');
            document.querySelector('.score').textContent = 0
        }
    
    }
    //   //when guess is too high
    // else if (guess > secretNumber) {
    //     if (score > 1) {
    //         document.querySelector('.message').textContent = ' 📈 Too high guess';
    //         score--;
    //         document.querySelector('.score').textContent = score;
    //     } else {
    //         document.querySelector('.message').textContent = '💥 You lost the game';
    //         document.querySelector('.score').textContent = 0
    //     }

    // } 
    // //when guess is too low
    // else if (guess < secretNumber) {
    //     if (score > 1) {
    //         document.querySelector('.message').textContent = '📉 Too low guess';
    //         score--;
    //         document.querySelector('.score').textContent = score;
    //     } else {
    //         document.querySelector('.message').textContent = '💥 You lost the game';
    //         document.querySelector('.score').textContent = 0
    //     }
 
    // }
})

document.querySelector('.again').addEventListener('click', function(){
    score = 20;
    document.querySelector('.score').textContent = score;

//    document.querySelector('.message').textContent = 'Start guessing...';
   displayMessage('Start guessing...');
   document.querySelector('body').style.backgroundColor = '#222';
   document.querySelector('.number').style.width = '15rem';
   document.querySelector('.number').textContent = '?';
   document.querySelector('.guess').value = '';
   secretNumber = Math.trunc(Math.random() * 20) + 1;

})