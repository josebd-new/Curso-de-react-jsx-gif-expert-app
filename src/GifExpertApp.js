import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';


export const GifExpertApp = () => {

    //const categories = ['One Punch', 'Samurai X', 'Dragon Ball'];
    //const [categories, setCategories] = useState(['One Punch', 'Samurai X', 'Dragon Ball']);

    const [categories, setCategories] = useState(['One Punch']);


    /*   const handleAdd = () => {
  
          // se puede agregar un elemento al array de varias maneras
          // el array y agregar el ultimo setcategories([...categories,'hola soy jose']);
          // lo que queremos primero y luego el array setcategories(['hola soy jose',...categories]);
           y con esto devolveriamos un nuevo arreglo en vexz de agregarlo
          y es bastente util lo veremos despues 
  
          setcategories(cats => [...cats, 'HunterXHunter']); 
  
      }*/

    return (

        <>

            <h2> GifExpertApp </h2>
            <AddCategory setCategories={setCategories} />
            <hr></hr>

            <ol>

                {
                    categories.map(category => (
                        // en el key es donde tiene que ir el id base de datos
                        <GifGrid
                            key={category}
                            category={category}
                        />

                    ))
                }

            </ol>

        </>

    );

}

