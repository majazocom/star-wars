const url = 'https://swapi.dev/api/people';

let characterList = (characters) => {

    characters.map(character => {
        console.log(character.name);

        let el = document.createElement('article'); //<article></article>

        let elText = document.createTextNode(character.name); //Luke Skywalker

        el.appendChild(elText); // <article>Luke Skywalker</article>

        document.getElementById('characters').appendChild(el); 
        // <section id="characters">
        //     <article>Luke Skywalker</article>
        // </section>

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