// var pass = ''
// while (pass !== "1234") {
//    pass = prompt("1234")
// }1234

bmw.addEventListener('dragstart', (e) => e.dataTransfer.setData('text', 'bmw'))
Mercedes.addEventListener('dragstart', (e) => e.dataTransfer.setData('text', 'Mercedes'))
Porsche.addEventListener('dragstart', (e) => e.dataTransfer.setData('text', 'Porsche'))
toyota.addEventListener('dragstart', (e) => e.dataTransfer.setData('text', 'toyota'))


box1.addEventListener('dragover', (e) => e.preventDefault())
box2.addEventListener('dragover', (e) => e.preventDefault())
box3.addEventListener('dragover', (e) => e.preventDefault())
box4.addEventListener('dragover', (e) => e.preventDefault())


///////////////////////////////////////////////
let counter = 0; 
///////////////////////////////////////////////
box1.addEventListener('drop', (e) => {
    var id = e.dataTransfer.getData('text');
    var elememnt = document.getElementById(id);
    box1.appendChild(elememnt);

    elememnt.style.border = 'none'
    elememnt.style.fontSize = '25px'
    elememnt.style.fontWeight = 'bold';

    if (id === 'bmw') {
        box1.style.boxShadow = '0 0 20px rgb(74, 255, 68)';
        elememnt.style.color = 'rgb(74, 255, 68)';
        elememnt.style.borderRadius = '10px';
        box1.style.outline = 'rgb(74, 255, 68) solid 2px';
        if (counter < 4) { 
            counter++; 
            document.getElementById('counter').innerText = counter; 
        }
    } else {
        elememnt.style.color = 'red';
        box1.style.boxShadow = '0 0 20px red';
        box1.style.outline = 'red solid 2px';
    }
});


///////////////////////////////////////////////////

box2.addEventListener('drop', (e) => {
    var id = e.dataTransfer.getData('text');
    var elememnt = document.getElementById(id);
    box2.appendChild(elememnt);

    elememnt.style.border = 'none'
    elememnt.style.fontSize = '25px'
    elememnt.style.fontWeight = 'bold';

    if (id === 'Mercedes') {
        box2.style.boxShadow = '0 0 20px rgb(74, 255, 68)';
        elememnt.style.color = 'rgb(74, 255, 68)';
        elememnt.style.borderRadius = '10px';
        box2.style.outline = 'rgb(74, 255, 68) solid 2px';

        if (counter < 4) {
            counter++; 
            document.getElementById('counter').innerText = counter; 

        }
        } else {
        elememnt.style.color = 'red';
        box2.style.boxShadow = '0 0 20px red';
        box2.style.outline = 'red solid 2px';
    }
});
////////////////////////////////////////////////////

box3.addEventListener('drop', (e) => {
    var id = e.dataTransfer.getData('text');
    var elememnt = document.getElementById(id);
    box3.appendChild(elememnt);

    elememnt.style.border = 'none'
    elememnt.style.fontSize = '25px'
    elememnt.style.fontWeight = 'bold';

    if (id === 'Porsche') {
        box3.style.boxShadow = '0 0 20px rgb(74, 255, 68)';
        elememnt.style.color = 'rgb(74, 255, 68)';
        elememnt.style.borderRadius = '10px';
        box3.style.outline = 'rgb(74, 255, 68) solid 2px';
        elememnt.style.border = 'none'

        if (counter < 4) {
            counter++;
            document.getElementById('counter').innerText = counter
        }

    } else {
        elememnt.style.color = 'red';
        box3.style.boxShadow = '0 0 20px red';
        box3.style.outline = 'red solid 2px';
    }
});
//////////////////////////////////////////////////////

box4.addEventListener('drop', (e) => {
    var id = e.dataTransfer.getData('text');
    var elememnt = document.getElementById(id);
    box4.appendChild(elememnt);

    elememnt.style.border = 'none'   
    elememnt.style.fontSize = '25px'
    elememnt.style.fontWeight = 'bold';

    if (id === 'toyota') {
        box4.style.boxShadow = '0 0 20px rgb(74, 255, 68)';
        elememnt.style.color = 'rgb(74, 255, 68)';
        elememnt.style.borderRadius = '10px';
        box4.style.outline = 'rgb(74, 255, 68) solid 2px';
        elememnt.style.border = 'none'

        if (counter < 4) {
            counter++; 
            document.getElementById('counter').innerText = counter;
        }
    } else {
        elememnt.style.color = 'red';
        box4.style.boxShadow = '0 0 20px red';
        box4.style.outline = 'red solid 2px';
    }
});

////////////////////////////////////////////////////

bmw.addEventListener('dblclick', () => {
    orginal.appendChild(bmw);
    bmw.style.color = '';
    box1.style.boxShadow = '';
    box1.style.outline = '';
    bmw.style.border = '2px solid white';
    bmw.style.fontSize = ''
    bmw.style.fontWeight = '';

    if (counter > 0) {
        counter--;
        document.getElementById('counter').innerText = counter;
    }
});

Mercedes.addEventListener('dblclick', () => {
    orginal.appendChild(Mercedes);
    Mercedes.style.color = '';
    box2.style.boxShadow = '';
    box2.style.outline = '';
    Mercedes.style.border = '2px solid white'; 
    Mercedes.style.fontSize = ''
    Mercedes.style.fontWeight = '';
    if (counter > 0) {
        counter--;
        document.getElementById('counter').innerText = counter;
    }
});

Porsche.addEventListener('dblclick', () => {
    orginal.appendChild(Porsche);
    Porsche.style.color = '';
    box3.style.boxShadow = '';
    box3.style.outline = '';
    Porsche.style.border = '2px solid white';
    Porsche.style.fontSize = ''
    Porsche.style.fontWeight = '';

    if (counter > 0) {
        counter--;
        document.getElementById('counter').innerText = counter;
    }
});

toyota.addEventListener('dblclick', () => {
    orginal.appendChild(toyota);
    toyota.style.color = '';
    box4.style.boxShadow = '';
    box4.style.outline = '';
    toyota.style.border = '2px solid white';
    toyota.style.fontSize = ''
    toyota.style.fontWeight = '';

    if (counter > 0) {
        counter--;
        document.getElementById('counter').innerText = counter;
    }
});