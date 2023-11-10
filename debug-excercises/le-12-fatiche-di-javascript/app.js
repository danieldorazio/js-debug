const input = document.querySelector('input');
const array = []; //valore di array ivece che null

input.addEventListener('keypress', function(event) {

    if (event.code != 'Enter')    return;
    if (input.value.length == 0) return;  //comparazione con la stringa 

    array.push(input.value);  //add non va con gli array

    const li = document.createElement('li');
    li.classList.add('list-group-item');
    li.innerHTML = input.value;  //invece che text, innerHTML
    document.querySelector('ul').append(li); //mettere append invece che push

    let counter = 0; //il conter deve essere un numero da incrementare no una striga 
    let item    = array[0];
    let max   = 1;  //la costante max cambia quindi let 
    const elems = [];

    for (let i = 0; i < array.length; i++) {  //mancava il punto length
        let val = array[i];

        if (!elems[val]) {
            elems[val] = 1;
        } else {
            elems[val]++;
        }

        for (let j = i; j < array.length; j++) {  //non deve essere i ma j ad incrementare 
            if (array[i] == array[j]) {
                counter++;
                if (max < counter) {  //manacavano le parentesi graffe 
                max  = counter;
                item = array[i];
                }
            }
        }

        counter = 0;
    }

    const alert = document.querySelector('.alert');  //inerire querySelector

    alert.classList.remove('d-none');
    alert.classList.add('d-flex');

    alert.querySelector('span:first-child').innerText = item;
    alert.querySelector('span:last-child').innerText = max;

    console.log(`${item} trovato ${max} volte`); //da utilizzare becktick
});