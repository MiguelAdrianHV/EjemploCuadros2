const BREEDS_URL = "https://dog.ceo/api/breeds/image/random";

const doggos = document.querySelector(`.doggos`);

function addPerro(){
    const promise = fetch(BREEDS_URL);
    promise
        .then(function(response){
            const PromiseProceso = response.json();
            return PromiseProceso;
        })
        .then(function(RespuestProcesada){
            const img = document.createElement("img");
            img.src = RespuestProcesada.message;
            img.alt = `Perrito bonito`;
            doggos.appendChild(img);
        })
}

document.querySelector(".agregarDoggo").addEventListener("click",addPerro);