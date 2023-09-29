import './src/styles.scss'
import * as bootstrap from "bootstrap";

let topBtn = document.getElementById('top');

function showBtn() {
    topBtn.classList.add('show-btn');
    topBtn.classList.remove('hide-btn');
}

function hideBtn() {
    topBtn.classList.remove('show-btn');
    topBtn.classList.add('hide-btn');
}

document.addEventListener('scroll', () => {
    if(window.scrollY >= 20) {
        showBtn();
    } else {
        hideBtn();
    }
});
