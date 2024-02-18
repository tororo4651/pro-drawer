// jQuery の読み込み
  // import $ from 'jquery';
  //   $('.test').css('color', 'gray');




// 他の JavaScriptファイルの読み込み
  // import './modules/common.js';

  // import { greet } from './modules/common.js';
  //   console.log(greet('山田'));




// Sassファイルの読み込み
import '../scss/style.scss';




// グローバルナビゲーションの開閉
const gNavBtn = document.querySelector('.gNavBtn');
const gNav = document.querySelector('.gNav');

gNavBtn.addEventListener('click', (e) => {
  if (gNavBtn.getAttribute('aria-expanded') === 'false') {
    gNavBtn.setAttribute('aria-expanded', 'true');
    gNavBtn.setAttribute('aria-label', 'メニューを閉じる');
    gNav.setAttribute('aria-hidden', 'false');
    document.documentElement.classList.add('is-gNavOpen');
  } else {
    gNavBtn.setAttribute('aria-expanded', 'false');
    gNavBtn.setAttribute('aria-label', 'メニューを開く');
    gNav.setAttribute('aria-hidden', 'true');
    document.documentElement.classList.remove('is-gNavOpen');
  }
}, false);



const minWidth = window.matchMedia('(min-width: 992px)');

minWidth.addEventListener('change', (e) => {
  if (e.matches) {
    gNav.setAttribute('aria-hidden', 'false');
  } else {
    gNav.setAttribute('aria-hidden', 'true');
    gNavBtn.setAttribute('aria-expanded', 'false');
    gNavBtn.setAttribute('aria-label', 'メニューを開く');
    document.documentElement.classList.remove('is-gNavOpen');
  }
}, false);




// gNavBtn.addEventListener('click', (e) => {
//   document.documentElement.classList.toggle('is-gNavOpen');
// }, false);




// aria-expanded
// gNavBtn.addEventListener('click', () => {
//   if (gNavBtn.getAttribute('aria-expanded') === 'false') {
//     gNavBtn.setAttribute('aria-expanded', 'true');
//   } else {
//     gNavBtn.setAttribute('aria-expanded', 'false');
//   }
// }, false);


// const toggleAriaExpanded = () => {
//   if (gNavBtn.getAttribute('aria-expanded') === 'false') {
//     gNavBtn.setAttribute('aria-expanded', 'true');
//   } else {
//     gNavBtn.setAttribute('aria-expanded', 'false');
//   }
// };
