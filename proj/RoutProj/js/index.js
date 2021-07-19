
import * from 'component1';

qwe();

const app = document.querySelector("#app")

const locationResolver = (location)=>{
    switch(location){
        case"#/users/":
            app.innerHTML = `
                <h1>${location}</h><p>страница с пользователями</p>
            `;
            break;
        case"#/login/":
                app.innerHTML = `
                    <h1>${location}</h><p>страница login</p>
                    `;
                    break;
        case"#/":
                app.innerHTML = `
                        <h1>${location}</h><p>страница /</p>
                        `;
            break;
            


    }
}

window.addEventListener('load', ()=>{
    const location = window.location.hash;
    if(location){
        locationResolver(location);
    }
})