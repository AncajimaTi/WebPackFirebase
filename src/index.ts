import db from './firebase/config';
import { retornaDocumentos }  from './helpers/mostrar-documento';

const usuariosRef = db.collection('usuarios');

usuariosRef.orderBy('Salario','desc')
            .orderBy('nombre')
            .get().then(retornaDocumentos);