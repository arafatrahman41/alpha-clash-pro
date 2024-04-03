// function play(){
//     /*  step-1: hide the home screen to hide the screen add the class hidden to the home section */
//     const homeScreen = document.getElementById('home-screen').classList.add('hidden');
//     // homeScreen.classList.add('hidden')

//     /*step-2: show the playground */
//     const playGroundScreen = document.getElementById('play-ground').classList.remove('hidden');
//     // playGroundScreen.classList.remove('hidden')

//     // console.log(playGroundScreen.classList);
// }

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
    hideElementById('home-screen');
    showElementById('play-ground');
    continueGame();
}

