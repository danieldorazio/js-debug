const input = document.querySelector('input');
const array = [];

input.addEventListener('keypress', function(event) {  //ad ogni click della tastiera parte la funzione

    if (event.code != 'Enter')    return;
    if (input.value.length == '') return;

    array.push(input.value);

    const li = document.createElement('li');
    li.classList.add('list-group-item');
    li.innerHTML = input.value;
    document.querySelector('ul').append(li);

    let counter = '';
    let item    = array[0];
    const max   = 1;
    const elems = [];

    for (let i = 0; i < array; i++) {
        let val = array[i];

        if (!elems[val]) {
            elems[val] = 1;
        } else {
            elems[val]++;
        }

        for (let j = i; j < array.length; i++) {
            if (array[i] == array[j]) {
                counter++;
                if (max < counter)
                max  = counter;
                item = array[i];
            }
        }

        counter = 0;
    }

    const alert = document.querySelector('.alert');

    alert.classList.remove('d-none');
    alert.classList.add('d-flex');

    alert.querySelector('span:first-child').innerText = item;
    alert.querySelector('span:last-child').innerText = max;

    console.log(`${item} trovato ${max} volte`);
});


// che cosa fa?
//  1)  riga 2: array null => []
//  2) riga 13: .text => .innerHTML
//  3) riga 14: .push => .append
//  4)  riga 9: .add => .push
//  5) riga 50: "" => ``
//  6) riga 42: getElementsByClassName => querySelector
//  7) 
//  8)
//  9)
// 10) 
// 11) 
// 12)