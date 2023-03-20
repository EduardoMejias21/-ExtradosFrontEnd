const URL = `https://pokeapi.co/api/v2/pokemon/`


const searchInput = document.querySelector("#search")
const divContainer = document.querySelector("#container")
const btnSearch = document.querySelector("#btnSearch")
window.onload = async ()=>{
    btnSearch.addEventListener("click",()=>{
        searchPokemon()
    })
}
export async function searchPokemon(){
    try{
        const response = await fetch( URL + searchInput.value.toLowerCase() )
        const data = await response.json()
        console.log(data)
        divContainer.innerHTML = 
        `
        <div class="container border">
            <div class="text-center" >
                <h1 class="display-3">${data.name.toUpperCase()}</h1>
                <img src="${data.sprites.front_default}" alt="" style="height: 12rem;">
            </div>
            <table class="table table-warning border shadow">
                <tbody>
                    <tr>
                        <th scope="row">Tipo</th>
                        <td>${data.types[0].type.name}</td>
                    </tr>
                    <tr>
                        <th scope="row">Altura</th>
                        <td>${data.height*10} cm </td>
                    </tr>
                    <tr>
                        <th scope="row">Peso</th>
                        <td class="divTableCell">${data.weight/10} kg </td>
                    </tr>
                </tbody>
            </table>
        </div>
        `
    }catch(error){
        console.error(error)
    }
}

export function searchPokemons(number){
    for(let i = 0; i => number; i++)
    {
        searchPokemon(i)
    }
}