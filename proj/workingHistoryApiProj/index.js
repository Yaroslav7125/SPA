var links, updatestate, updatebuttons, contentEl, navEl;

contentEl = document.querySelector('.content');
navEl = document.querySelector(".nav");
console.log(contentEl);

links = {
    main:"This is the <strong>main</strong> page" ,
    about:"This is the <strong>about</strong> page",
    downloads:"This is the <strong>downloads</strong> page",
};

updatestate = function(state){
    if(!state) return;
    contentEl.innerHTML = links[state.page];
}

// window.addEventListener("hashchange", updatestate);
// window.addEventListener('load', updatestate);
window.addEventListener('popstate', function(e){
    updatestate(e.state);
});

updatebuttons = function(state){
    [].slice.call(navEl.querySelectorAll('a'))
        .forEach(function(e){
            var classList = e.parentNode.classList;
            state.page ===e.getAttribute('href')
                ?classList.add('active')
                :classList.remove('active');

        });

};

navEl.addEventListener('click', function(e){
    var state;
    if(e.target.tagName !=="A")return;
    state = {
        page:e.target.getAttribute('href')
    };
    history.pushState(state,'', state.page); // state описывает состояние, далее описание, относительная ссылка
    updatestate(state);
    console.log(state.page);
    e.target.getAttribute('href');
    e.preventDefault();
})


