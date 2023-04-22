const header = document.querySelector('header');
window.addEventListener('scroll', () => {
 header.classList.toggle('sticky', window.scrollY > 100);
});

let navlist = document.querySelector('.navlist');
document.querySelector('#menu-btn').onclick = () => {
 navlist.classList.toggle('active');
}
window.onscroll = () => {
 navlist.classList.remove('active');
}