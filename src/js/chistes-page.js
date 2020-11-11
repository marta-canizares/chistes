import { obtenerChiste } from './http-provider';


const body = document.body;
let btnOtro, olList;


const crearChistesHtml = () => {
    const html = `
    <h1 class="mt-5">Pulsa para ver los chistes</h1>
    <hr>

    <button class="btn btn-primary">Más chistes</button>

    <ol class="mt-2 list-group">
    </ol>`

    const divChistes = document.createElement('div');
    divChistes.innerHTML = html;
    body.append(divChistes);
}

const eventos = () => {
    olList = document.querySelector('ol');
    btnOtro = document.querySelector('button');

    btnOtro.addEventListener('click', async () => {

        btnOtro.disabled = true;

        dibujarChiste(await obtenerChiste());

        btnOtro.disabled = false;
    })


}

// funcion para pintar el chiste 
const dibujarChiste = (chiste) => {

    const olItem = document.createElement('li');
    olItem.innerHTML = ` <img src="${chiste.icon_url}" alt="">  ${chiste.value}`

    olItem.classList.add('list-group-item')

    olList.append(olItem);


}



export const init = () => {
    crearChistesHtml();
    eventos();
}



