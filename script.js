var g =0
var arrayStudente = {
    student: [
        {name:"Tony" , surname:"D'Agata" , age:26, matricola:"D'Agata"+g},
        {name:"Dayron" , surname:"Aguilera" , age:35, matricola:"Aguilera"+g}
    ]
}
function run() {
    var name = document.getElementById("name").value
    var surname = document.getElementById("surname").value
    var age = document.getElementById("age").value
    if (name === "") {
        name = prompt("inserisci il nome")
    } else {
        name = document.getElementById("name").value
    }
    if (surname === "") {
        surname = prompt("inserisci il cognome")
    } else {
        surname = document.getElementById("surname").value
    }
    if (age === "") {
        age = prompt("inserisci l'età")
    } else {
        age = document.getElementById("age").value
    }

    
    var matricola = surname + age + g
    arrayStudente.student.push({
        name: name,
        surname: surname,
        age: age,
        matricola: matricola
    });

    
    for (var key in arrayStudente) {
        console.log(key, arrayStudente[key])
    }
    
    var stampa = document.getElementById('stampa');
    
    // stampa.innerHTML = '<li>model: </li>'
    var varMomentanea = '';
    
    for (var key in arrayStudente) {  // ciclo nell'oggetto
    
        if (key === 'student') { // qui scelgo l'array
            varMomentanea += '<li>Studente: ';
    
            for (var x = 0; x < arrayStudente[key].length; x++) { // ciclo l'array dei student
                varMomentanea += arrayStudente[key][x]['name'] + ', ';
                varMomentanea += arrayStudente[key][x]['surname'] + ', ';
                varMomentanea += arrayStudente[key][x]['age'] + ', ';
                varMomentanea += arrayStudente[key][x]['matricola'] + ', </br>';

            }
    
            varMomentanea += '</li>';
    
        } else {
            varMomentanea += '<li>' + key + ': ' + arrayStudente[key] + '</li>'
        }
    }
    stampa.innerHTML = varMomentanea;  
    return g++ 
}
function svuota() 
{  
    document.getElementById("name").value = "";
    document.getElementById("surname").value = "";
    document.getElementById("age").value = "";
}

