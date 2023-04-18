//==============constants
let speShown = false;

//==============cached elements
const profPicEl = document.getElementById('profile-pic');
const ratingBlock = document.getElementById('career-rating');

//==============event listeners
profPicEl.addEventListener('click', showSpecialties);
window.addEventListener('resize', toggleShowMore);

//==============functions
function showSpecialties(e) {
    //only if in the vertical view
    if (!speShown) {
        ratingBlock.children[0].style.display = 'none';
        ratingBlock.children[1].style.display = 'none';
        ratingBlock.children[2].style.display = 'initial';
        speShown = true;
    } else {
        ratingBlock.children[0].style.display = '';
        ratingBlock.children[1].style.display = '';
        ratingBlock.children[2].style.display = 'none';
        speShown = false;
    }
}

//add/remove event listener based on orientation
function toggleShowMore(e) {
    if (window.innerWidth > window.innerHeight) {
        profPicEl.removeEventListener('click', showSpecialties);
        ratingBlock.children[0].style.display = '';
        ratingBlock.children[1].style.display = '';
        ratingBlock.children[2].style.display = 'flex';
    } else {
        profPicEl.addEventListener('click', showSpecialties);  
        ratingBlock.children[0].style.display = '';
        ratingBlock.children[1].style.display = '';
        ratingBlock.children[2].style.display = 'none';
        speShown = false;
    }
}