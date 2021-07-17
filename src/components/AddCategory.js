import React, { useState } from 'react';
import PropTypes from 'prop-types';

const AddCategory = ( {setCategorias} ) => {
    
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        // agregamos el nuevo valor tomado del cambio del input
        setInputValue( e.target.value )
    }

    const handleSubmit = (e) => {
        //evitar la recarga de la página con el submit del form
        e.preventDefault();
        
        // validamos que tenga 2 letras o más
        if(inputValue.trim().length >= 2){
            setCategorias( (cat) => ([inputValue, ...cat]) );
            setInputValue('')
        }
        
    }

    return (
        <form onSubmit={handleSubmit}>
            <p> Ingresa una nueva categoria: &nbsp;
            <input 
                type="text"
                value={inputValue}
                // llamamamos al handle con cada cambio del input
                onChange={ handleInputChange }
            />
            </p>
        </form>
    )
        
}

AddCategory.propTypes = {
    setCategorias: PropTypes.func.isRequired
}

export default AddCategory;