## Referencia al documento

## objecto 
const usuario={
    nombre:'Susana',
    activo:false,
    fechaNaci:0,
    Salario:1950,
}



## insert into usuarios ....
db.collection('usuarios')
    .add(usuario)
    .then(documentRef=>{
        console.log(documentRef);
    })
    .catch(error=>console.log('error',error));

## Actualizar Mediante un  ID
## udpate usuarios set activo= false; 

db.collection('usuarios')
    .doc('VbKOHHRGQ4bfonupHdUc')
    .update({
        nombre:'modificacion',
        activo:false
    })


## Podemos darle una variable a nuestro collection

const usuariosRef = db.collection('usuarios');

Este es destructivo (Elimina y crear campos que no este en el documento)
    usuariosRef
        .doc('VbKOHHRGQ4bfonupHdUc')
        .set({
            nombre:'modificacion',
            activo:false,
            edad:44,
            casado:true,
            id:123
        })

## Eliminamos una documento
## delete from usuarios where id='xx'

usuariosRef
    .doc('VbKOHHRGQ4bfonupHdUc')
    .delete()
    .then(()=>console.log('Borrado'))
    .catch(err=>console.log(err));


## select * from usuarios;


usuariosRef
    .onSnapshot(snap=>{
        retornaDocumentos(snap);
    }); 


##    select * from usuarios
##    where activo= true;


usuariosRef.where('activo','==',true).get().then(retornaDocumentos);


 ##   select * from usuarios
 ##   where salario > 1800;


usuariosRef.where('salario','>',1800).get().then( retornaDocumentos);



usuariosRef.where('salario','>',1800)
            .where('salario','<',2300)
            .get().then( retornaDocumentos);



usuariosRef.where('salario','>',1800)
            .where('activo','==',true)
            .get().then( retornaDocumentos);


## ordey by 
usuariosRef.orderBy('Salario','desc')
            .orderBy('nombre')
            .get().then(retornaDocumentos);