import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

//import React, { useState, useEffect } from 'react';
//import { getGifs } from '../helpers/getGifs';

export const GifGrid = ({ category }) => {

    const { data: images, loading } = useFetchGifs(category);

    /*  const [count, setCount] = useState(0);
 
     const [images, setImages] = useState([]);
 
     useEffect(() => {
 
         getGifs(category)
             .then(setImages/*esto es lo mismo los gifs lod 
                 metemos directamente en setImages, gifs => setImages(gifs) )
     /* }, [category]) */

    return (

        <>
            <h3 className="animate__animated animate__fadeIn"> {category} </h3>

            {loading && <p className="animate__animated animate__flash">Loading</p>}

            <div className="card-grid">
                {//loading ? 'Cargando...' : ' Fin de cargado'}
            /* <h3> {count}</h3>
            <button onClick={() => setCount(count + 1)}>Contador</button>  */}
                {

                    images.map(img => (

                        <GifGridItem
                            key={img.id}
                            {...img}
                        />

                    ))
                }

            </div>
        </>
    )
}
