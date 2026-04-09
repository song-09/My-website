// Header css 바뀌는 javascript code

const hamburger = document.getElementById('hamburger');
const nav = document.querySelector('.nav-mobile');

let isHamburgerOpen = false;

// 햄버거 버튼 클릭 이벤트
hamburger.addEventListener('click', () => {
  isHamburgerOpen = !isHamburgerOpen;
  nav.classList.toggle('active');
  hamburger.classList.toggle('open');
});

// 사이트맵 아코디언 기능(간단하게)

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.sitemap-title').forEach((title) => {
    title.addEventListener('click', () => {
      title.classList.toggle('active');
    });
  });
});

// 카드 레이아웃 전환 기능

document.addEventListener('DOMContentLoaded', () => {
  const gridBtn = document.querySelector('.ri-layout-grid-fill');
  const listBtn = document.querySelector('.ri-menu-line');

  const gridCards = document.querySelector('.cards-grid');
  const listCards = document.querySelector('.cards-list');

  gridBtn.addEventListener('click', () => {
    gridCards.style.display = 'flex';
    listCards.style.display = 'none';

    gridBtn.classList.add('active');
    listBtn.classList.remove('active');
  });

  listBtn.addEventListener('click', () => {
    listCards.style.display = 'block';
    gridCards.style.display = 'none';

    listBtn.classList.add('active');
    gridBtn.classList.remove('active');
  });
});
