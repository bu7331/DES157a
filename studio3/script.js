(function(){
    'use strict';
    console.log('run js');

    const startGame=document.getElementById('startgame');
    const gameControl=document.getElementById('gamecontrol');
    const game=document.getElementById('game');
    const score=document.getElementById('score');
    const actionArea=document.getElementById('actions');
    const instructions=document.getElementById('instructions');
    const audio=document.querySelector('audio');

    const gameData={
        dice:['images/bee.png','images/dice2.png','images/dice3.png','images/dice4.png','images/dice5.png','images/dice6.png'],
        players:['player1','player2'],
        score:[0,0],
        roll1:0,
        roll2:0,
        rollSum:0,
        index:0,
        gameEnd:29 //last thing doesn't use comma
    }

    startGame.addEventListener('click',function(){
        audio.play();
        instructions.innerHTML='';
        gameData.index=Math.round(Math.random());
        gameControl.innerHTML='<h2>The game has started</h2>';
        gameControl.innerHTML += '<button id="quit">Wanna Quit?</button>';
        document.getElementById('quit').addEventListener('click',function(){
            location.reload();
        });
        console.log(gameData.index);
        // console.log('set up the turn');
        setUpTurn();
    });

    function setUpTurn(){
        game.innerHTML=`<p>Generate flies for ${gameData.players[gameData.index]}</p>`;
        actionArea.innerHTML='<button id="roll">Generate Flies</button>';
        document.getElementById('roll').addEventListener('click',function(){
            // console.log('roll the dice');
            throwDice();
        });
    };

    function throwDice(){
        actionArea.innerHTML='';
        gameData.roll1=Math.floor(Math.random()*6)+1;
        gameData.roll2=Math.floor(Math.random()*6)+1;
        game.innerHTML=`<p>Generate flies for ${gameData.players[gameData.index]}</p>`;
        game.innerHTML += `<img src="${gameData.dice[gameData.roll1-1]}">`;
        game.innerHTML += `<img src="${gameData.dice[gameData.roll2-1]}">`;
        gameData.rollSum=gameData.roll1 + gameData.roll2;

        if(gameData.rollSum==2){
            game.innerHTML += '<p>Oh no! Both froggos ate bees and died XP! </p>';
            gameData.score[gameData.index]=0;
            gameData.index ? (gameData.index=0) : (gameData.index=1);
            document.getElementById('quit').innerHTML='return';
            // setTimeout(setUpTurn,2000);
            showCurrentScore();
        }
        else if(gameData.roll1==1 || gameData.roll2==1){
            gameData.index ? (gameData.index=0) : (gameData.index=1);
            game.innerHTML +=`<p>Oops, someone ate a bee. Switching to ${gameData.players[gameData.index]}</p>`;
            setTimeout(setUpTurn,2000);
        }
        else{
            gameData.score[gameData.index] = gameData.score[gameData.index] + gameData.rollSum;
            actionArea.innerHTML='<button id="rollagain">Roll Again</button>';
           
            document.getElementById('rollagain').addEventListener('click',function(){
                setUpTurn();
            });

            checkWinningCondition();
        }
    };

    function checkWinningCondition(){
        if(gameData.score[gameData.index] > gameData.gameEnd){
            score.innerHTML=`<h2>${gameData.players[gameData.index]} wins with ${gameData.score[gameData.index]}!</h2>`;
            actionArea.innerHTML='';
            document.getElementById('quit').innerHTML='start a new game';
        }
        else{
            showCurrentScore();
        }
    };

    function showCurrentScore(){
        score.innerHTML=`<p>The score is currently <strong>${gameData.players[0]}: ${gameData.score[0]}</strong> and <strong>${gameData.players[1]}: ${gameData.score[1]}</strong></p>`;
    };
})();