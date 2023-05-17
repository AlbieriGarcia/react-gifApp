import React, { useState } from 'react'
import { PropTypes } from 'prop-types';

export const AddCategory = ({ setCategories }) => {

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        setInputValue( e.target.value );
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if ( inputValue.trim().length > 2){
            setCategories( categories => [inputValue, ...categories]);
            setInputValue('');
        }
        
    }

    return (
        <form onSubmit={ handleSubmit }>
            <input 
                type="text"
                value={inputValue}
                onChange={handleInputChange}
            ></input>
        </form>
    )
}

//esto es para que no se permita utilizar el componenten AddCategory sin la propiedad setCategories
AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}
