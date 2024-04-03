// function play(){
//     /*  step-1: hide the home screen to hide the screen add the class hidden to the home section */
//     const homeScreen = document.getElementById('home-screen').classList.add('hidden');
//     // homeScreen.classList.add('hidden')

//     /* show the playground */
//     const playGroundScreen = document.getElementById('play-ground').classList.remove('hidden');
//     // playGroundScreen.classList.remove('hidden')

//     // console.log(playGroundScreen.classList);
// }

function play(){
    hideElementById('home-screen');
    showElementById('play-ground');
}

