const url = 'https://swapi.dev/api/people';

let characterList = (characters) => {
    characters.map(character => {
        console.log(character.name);

        let li = document.createElement('article'); //<li></li>

    })

    // for (let i = 0; i < characters.length; i++) {
    //     console.log(characters[i].name)
    // }
}

let init = async () => {
    const response = await fetch(url);
    const data = await response.json();


    //väntar på svar från vår fetch
    characterList(data.results);
}

init();