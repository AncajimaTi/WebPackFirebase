import db from './firebase/config';
import { retornaDocumentos }  from './helpers/mostrar-documento';

const usuariosRef = db.collection('usuarios');


const btnNext = document.createElement('button');
btnNext.innerText= 'Next Page';
document.body.append(btnNext);

let lastDocument = null;
btnNext.addEventListener('click',()=>{
    console.log('click');
    const query = usuariosRef
                        .orderBy('nombre');

    query.limit(2).get().then(snap => {
        retornaDocumentos(snap);
    })
})

btnNext.click();