
import React, { useState } from 'react';
import AddCategory from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

//Para definir un componete funcional lo hacemos con la función flecha
const GifExpertApp = ()=>{

    //no se recomienda agregar el listado como constante si este puede cambiar en el tiempo, es mejor un State
    //const categorias = ['One Punch', 'Samurai X', 'Dragon Ball'];

    const [categorias, setCategorias] = useState(['Dragon Ball']);

    // const handleAdd = () => {
    //     //para trabajar con arreglos en el estado, no se usa .push()
    //     //se debe usar el operador Spred sobre el arreglo [...arr] para mantener lo que estaba registrado antes
    //     setCategorias( (cat) => ([...cat,'Teen Titans']) );
    // }

    //y debe tener un return de JSX, debemos importar React para esto
    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategorias={ setCategorias } />
            <hr />

            <ol>
                { 
                    categorias.map( categoria => 
                            <GifGrid 
                            key={categoria}
                            categoria={categoria} />
                     )
                
                
                }
            </ol>

        </>
    )

};

export default GifExpertApp;