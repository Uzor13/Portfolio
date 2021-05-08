const checkbox = document.querySelector('#toggle');
const html = document.querySelector('html');

if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    html.classList.add('dark')
  } else {
    html.classList.remove('dark')
  }


checkbox.addEventListener('click', function () {
    let htmlClasses = document.querySelector('html').classList;
    if (localStorage.theme === 'dark') {
        htmlClasses.remove('dark');
        localStorage.removeItem('theme')
        checkbox.checked = false;
    } else {
        htmlClasses.add('dark');
        localStorage.theme = 'dark';
        checkbox.checked = true;
    }
});
