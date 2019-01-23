let baseURL = 'https://api.spacexdata.com/v2/rockets';

const searchForm = document.querySelector('form');
const Rockets = document.querySelector('ul');

searchForm.addEventListener('submit', fetchSpace);

function fetchSpace(e) {
    e.preventDefault();
    // console.log(e);

baseURL = 'https://api.spacexdata.com/v2/rockets';

let select = document.querySelector('select').value;

if(select !== '') {
    if(select === 'Falcon 1') {
        baseURL += '/falcon1';
    } else if (select === 'Falcon 9') {
        baseURL += '/falcon9';
    } else if (select === 'Falcon Heavy') {
        baseURL += '/falconheavy';
    } else if (select === 'Big Falcon Rocket') {
        baseURL += '/bfr';
    }
 };

    fetch(baseURL).then(result => {
        // console.log(result.json());
        return result.json()
    })
    .then(json => {
        console.log(json);
        displayRockets(json);
    });
}


// Removes parent so next display doesnt display underneath.
function displayRockets(json) {
    while (Rockets.firstChild) {
        Rockets.removeChild(Rockets.firstChild);
}

    console.log('Results:',json);
    if(Array.isArray(json) === true){
    json.forEach(option => {
        console.log(option);
        returnInfo(option);
    });
}   else {
    returnInfo(json);
   }
}
    function returnInfo(json){
        let n = document.createElement('h3') 
        n.innerText = json.name;
        Rockets.appendChild(n);
        
        let img = document.createElement('img')
        img.src = json.flickr_images['0'];
        Rockets.appendChild(img);
        

        let desc = document.createElement('p')
        desc.innerText = json.description;
        Rockets.appendChild(desc);
        
    }
