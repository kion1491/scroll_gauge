// let scrollGaugeBar;
// let scrollTop = 0;

// window.onload = function(){
//     scrollGaugeBar = document.getElementsByClassName('scroll_gauge_bar')[0];
//     scrollFunc();
// }

// window.addEventListener("scroll", function(e){
//     scrollFunc();
// })

// function scrollFunc(){
//     scrollTop = document.documentElement.scrollTop;
//     let per = Math.round(scrollTop / (document.documentElement.scrollHeight - window.outerHeight) * 100);
//     scrollGaugeBar.style.width = per + "%";
// }

var scrollFunction = function(){
    let scrollGaugeBar;
    let scrollTop;
    let per;
    function init(){
        scrollTop = 0;
        scrollGaugeBar = document.getElementsByClassName('scroll_gauge_bar')[0];
        scrollFunc(scrollGaugeBar);
    }

    function scrollFunc(scrollGaugeBar){
        scrollTop = document.documentElement.scrollTop;
        per = Math.round(scrollTop / (document.documentElement.scrollHeight - window.outerHeight) * 100);
        scrollGaugeBar.style.width = per + "%";
    }

    return {
        init : init,
        scrollListen : scrollFunc
    }
}();

scrollFunction.init();

document.addEventListener('scroll', function(){
    scrollFunction.scrollListen(scrollGaugeBar);
});