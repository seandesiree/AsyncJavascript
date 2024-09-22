async function fetchCharacters(character) {
    const publicKey="d89a4cd079ab160427ebb9a0ab5274f0"
    const hash="2471c047c9bc67e1f290a176c812f6b98cbabbaf";
    const url="http://gateway.marvel.com/v1/public/characters?name="+character+"&ts=1&apikey="+publicKey+"&hash="+hash;
    
    try{
        
        const response= await fetch(url);
            
        const data = await response.json();
        console.log(data);
        return data;
    }catch(error){
        console.error(error);
    }
}

async function addToDocument(data) {
    const heroData= await data;
    console.log(heroData.data.results[0].name)
    const userInfoElement=document.getElementById("characterInfo");
    userInfoElement.innerHTML= '<h2>'+heroData.data.results[0].name+'</h2> <p><strong>Description</strong>: '+heroData.data.results[0].description;
}

addToDocument(fetchCharacters('black panther'));