//==============constants
let speShown = false;

//==============cached elements
const profPicEl = document.getElementById('profile-pic');
const ratingBlock = document.getElementById('career-rating');

//==============event listeners
profPicEl.addEventListener('click', showSpecialties);
window.addEventListener('resize', turnOffShowMore);

//==============functions
function showSpecialties(e) {
    //only if in the vertical view
    if (!speShown) {
        ratingBlock.children[0].style.display = 'none';
        ratingBlock.children[1].style.display = 'none';
        ratingBlock.children[2].style.display = 'initial';
        speShown = true;
    } else {
        ratingBlock.children[0].style.display = 'initial';
        ratingBlock.children[1].style.display = 'initial';
        ratingBlock.children[2].style.display = 'none';
        speShown = false;
    }
}

function turnOffShowMore(e) {
    // if (window.innerWidth > window.innerHeight) {
    //     console.log('same');
    // }
    if (window.innerWidth > window.innerHeight) {
        ratingBlock.children[0].style.display = 'initial';
        ratingBlock.children[1].style.display = 'initial';
        ratingBlock.children[2].style.display = 'flex';
    }
}