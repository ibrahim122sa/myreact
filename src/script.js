
const api = 'https://randomuser.me/api?results=8';

async function get(){
    const response = await fetch(api);
    const data = await response.json();
    printData(data)


}


function printData(data){
    const print = data.map(m => m)
    console.log(print);

    const header = document.querySelector('#header')
    const content = document.querySelector('#content')
    header.innerHTML = `<ul> <li> ibra </li> 
    
    ${data.map(m => `<li>${m.name}</li>`)}
    </ul>`;
    console.log(header);
}


// export default get
get();