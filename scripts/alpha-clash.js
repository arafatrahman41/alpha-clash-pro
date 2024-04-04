// function play(){
//     /*  step-1: hide the home screen to hide the screen add the class hidden to the home section */
//     const homeScreen = document.getElementById('home-screen').classList.add('hidden');
//     // homeScreen.classList.add('hidden')

//     /*step-2: show the playground */
//     const playGroundScreen = document.getElementById('play-ground').classList.remove('hidden');
//     // playGroundScreen.classList.remove('hidden')

//     // console.log(playGroundScreen.classList);
// }

function handleKeyboardKeyupEvent(event){
    const playerPressed = event.key;
    // console.log(playerPressed);

    //get the Expected to press 
    const currentAlphabetElement = document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase();
    // console.log(playerPressed, expectedAlphabet);
    
    //check matched or not
    if(playerPressed === expectedAlphabet){
        console.log('you get a point');

        const currentScore = getTextElementValueById('current-score');
        const updatedScore = currentScore + 1;
        setTextElementValueById('current-score', updatedScore);


        // ------------------------------
        // // update score: 
        // // 1.get the current score
        // const currentScoreElement = document.getElementById('current-score');
        // const currentScoreText = currentScoreElement.innerText;
        // const currentScore = parseInt(currentScoreText);
        // // 2. increase the score by 0
        // const newScore = currentScore + 1;
        // // 3. show the update score
        // currentScoreElement.innerText = newScore;
        //start a new round 
        removeBackgroundColorById(expectedAlphabet);
        continueGame();
    }else{
        console.log('you missed, you lost a life');

        const currentLife = getTextElementValueById('current-life');
        const updatedLife = currentLife - 1;
        setTextElementValueById('current-life', updatedLife);

        if(updatedLife === 0){
         gameOver();
        }


        // ---------------------------------
        // step - 1: get the current Life number
        // const currentLifeElement = document.getElementById('current-life');
        // const currentLifeText = currentLifeElement.innerText;
        // const currentLife = parseInt(currentLifeText);
        // // step - 2: reduce the life count 
        // const newLife = currentLife - 1;
        // // step - 3: display the updated life count 
        // currentLifeElement.innerText = newLife;
    }
}

// capture keyboard key press
document.addEventListener('keyup', handleKeyboardKeyupEvent)


function continueGame(){
    //step-1: generate a random alphabet
    const alphabet = getARandomAlphabet();
    // console.log(alphabet);

    // set random generated alphabet to the screen(show it);
    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;

    //set background color
    setBackgroundColorById(alphabet);
}

function play(){
    // hide everything show only the playground
    hideElementById('home-screen');
    hideElementById('final-score');
    showElementById('play-ground');

    // reset score and life
    setTextElementValueById('current-life', 5);
    setTextElementValueById('current-score', 0);

    continueGame();
}

function gameOver(){
    hideElementById('play-ground');
    showElementById('final-score');
}

