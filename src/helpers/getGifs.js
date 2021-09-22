


export const getGifs = async (category) => {

    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=RRtLs1qXoLR0KgI1gpzZigpv6ul2Uke4`;
    const respuesta = await fetch(url);
    const { data } = await respuesta.json();

    const gifs = data.map(img => {

        return {

            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
            // poniendo la interrogacion estoy haciendo un condicional 
            // diciendole que si trae la imagen que utilice lo siguiente .downsized_medium.url 
        }
    })

    return gifs;
}