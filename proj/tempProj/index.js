let div = document.querySelector(".content");
console.log(div);


/* window.addEventListener(‘popstate’. function(popstateEvent)  {
    // Do something here!
)}; */


function GetRout(wichLoc){
    switch(wichLoc){
        case '/loc1':
            div.innerHTML =  "<div>loc1</div>";
            break;
        case '/loc2':
            div.innerHTML = '<div>loc2</div>';
            break;
        
    }

}

function viewContent(elem){
    event.preventDefault();
    //console.log(elem.getAttribute("href"));
    //console.log(GetRout(elem.getAttribute("href")));
    GetRout(elem.getAttribute("href"));
    history.pushState(null,null,elem.getAttribute("href"));
    //console.log(location.pathname);
}


 window.addEventListener('popstate', function(e){
    console.log(`${location.pathname}`);
    GetRout(location.pathname);
});  


