const url = 'https://swapi.dev/api/people';

let characterList = (characters) => {
    console.log(characters)
    
}

let init = async () => {
    const response = await fetch(url);
    const data = await response.json();


    console.log(data);

    //väntar på svar från vår fetch
    console.log('nu har vår fetch blivit klar');
    characterList(data.results);
}

init();