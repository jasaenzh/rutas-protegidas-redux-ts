// URL base para poder consumir API => Vamos a tomar como Ejmplo la de Rick and Morty
const baseUrl = 'https://rickandmortyapi.com/api/';
const charactersUrl = `${baseUrl}character/`;



export const getMorty = () => {
    const id = '2';
    return fetch(charactersUrl + id).then(res => res.json())

}