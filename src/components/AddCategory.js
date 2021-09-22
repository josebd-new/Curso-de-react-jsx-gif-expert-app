
import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({ setCategories }) => {

    const [inputValue, setInputValue] = useState('');// '' si no se lo ponemos da undefined y error hy que poner string vacio

    const handleInputChange = (e) => {

        setInputValue(e.target.value);
    }

    const handleSubmit = (e) => {

        e.preventDefault();

        if (inputValue.trim().length > 2) {

            setCategories(cats => [inputValue, ...cats]);
            setInputValue('');

        }
    }

    return (

        <form onSubmit={handleSubmit} >
            <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
            />
        </form>
    )
}

AddCategory.propTypes = {

    setCategories: PropTypes.func.isRequired
}