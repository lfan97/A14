Cookies.set('cookieCookie', 'true', {expires:365});

var myCookie = Cookies.get('cookieCookie');

var title = document.querySelect('h1')
if(myCookie){
    title.classList.add('cookie')
}