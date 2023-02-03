const game = () => {
    let userScore = 0;
    let aiScore = 0;
    let moves = 0;
 
    document.querySelector('#restart').style.display = 'none'
    const playGame = () => {
        const rockBtn = document.querySelector('#stone');
        const paperBtn = document.querySelector('#papper');
        const scissorBtn = document.querySelector('#scisers');
        const userOptions = [rockBtn,paperBtn,scissorBtn];
        const aiOptions = ['rock','paper','scissors']
         
        userOptions.forEach(option => {
            option.addEventListener('click',function(){
 
                const movesLeft = document.querySelector('#moves');
                moves++;
                movesLeft.innerText = `${10-moves}`;
                 
 
                const choiceNum = Math.floor(Math.random()*3);
                const aiChoice = aiOptions[choiceNum];
 
                winner(this.innerText,aiChoice)
                 
                if(moves == 10){
                    gameOver(userOptions,movesLeft);
                }
            })
        })
         
    }
 
    const winner = (user,ai) => {
        const result = document.querySelector('#resultText');
        const userScoreBoard = document.querySelector('#user-point');
        const aiScoreBoard = document.querySelector('#ai-point');
        user = user.toLowerCase();
        ai = ai.toLowerCase();
        if(user === ai){
            result.textContent = 'DRAW'
        }
        else if(user == 'rock'){
            if(ai == 'paper'){
                result.textContent = 'AI choosed PAPER';
                aiScore++;
                aiScoreBoard.textContent = aiScore;
 
            }else{
                result.textContent = 'AI choosed SCISSOR'
                userScore++;
                userScoreBoard.textContent = userScore;
            }
        }
        else if(user == 'scissors'){
            if(ai == 'rock'){
                result.textContent = 'AI choosed ROCK';
                aiScore++;
                aiScoreBoard.textContent = aiScore;
            }else{
                result.textContent = 'AI choosed PAPER';
                userScore++;
                userScoreBoard.textContent = userScore;
            }
        }
        else if(user == 'paper'){
            if(ai == 'scissors'){
                result.textContent = 'AI choosed SCISSOR';
                aiScore++;
                aiScoreBoard.textContent = aiScore;
            }else{
                result.textContent = 'AI choosed ROCK';
                userScore++;
                userScoreBoard.textContent = userScore;
            }
        }
    }
 
    const gameOver = (userOptions,movesLeft) => {
 
        const chooseMove = document.querySelector('.move');
        const result = document.querySelector('#resultText');
        const reloadBtn = document.querySelector('#restart');
 
        userOptions.forEach(option => {
            option.style.display = 'none';
            document.getElementById("movesleftText").style.display='none'
        })
 
      
        chooseMove.innerText = 'Game Over!!'
        movesLeft.style.display = 'none';
 
        if(userScore > aiScore){
            result.style.fontSize = '2rem';
            result.innerText = 'You Won'
            result.style.color = '#308D46';
        }
        else if(userScore < aiScore){
            result.style.fontSize = '2rem';
            result.innerText = 'You Lost';
            result.style.color = 'red';
        }
        else{
            result.style.fontSize = '2rem';
            result.innerText = 'DRAW';
            result.style.color = 'grey'
        }
        document.querySelector('#restart').style.display = 'block'

        reloadBtn.innerText = 'Restart';
        reloadBtn.addEventListener('click',() => {
            window.location.reload();
        })
    }
 
 
    playGame();
     
}
 
game();