import db from './firebase/config';
import { retornaDocumentos }  from './helpers/mostrar-documento';

const usuariosRef = db.collection('usuarios');


const btnNext = document.createElement('button');
btnNext.innerText= 'Next Page';
document.body.append(btnNext);

let lastDocument: any = null;
btnNext.addEventListener('click',()=>{
    
    const query = usuariosRef
                        .orderBy('nombre')
                        .startAfter(lastDocument);

    query.limit(2).get().then(snap => {
        fistDocument = snap.docs[0] || null;
        lastDocument = snap.docs[ snap.docs.length - 1] || null;
        retornaDocumentos(snap);
    })
})

btnNext.click();



const btnPrev = document.createElement('button');
btnPrev.innerText= 'Previous PAge';
document.body.append(btnPrev);


let fistDocument: any = null;
btnPrev.addEventListener('click',()=>{
    
    const query = usuariosRef
                        .orderBy('nombre')
                        .endBefore(fistDocument);

    query.limit(2).get().then(snap => {
        fistDocument = snap.docs[0] || null;

        lastDocument = snap.docs[ snap.docs.length - 1] || null;
        retornaDocumentos(snap);
    })
})
