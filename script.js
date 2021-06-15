var stampa = document.getElementById("stampa")

function run() {
    var arrayStudente = {
        student: []
    }
    
    var name = document.getElementById("name").value
    var surname = document.getElementById("surname").value
    var age = parseInt(document.getElementById("age").value)
        arrayStudente.student.push({
        name: name,
        surname: surname,
        age: age
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
            }
    
            varMomentanea += '</li>';
    
        } else {
            varMomentanea += '<li>' + key + ': ' + arrayStudente[key] + '</li>'
        }
    }
    
    stampa.innerHTML += varMomentanea;
    
        
}


    function svuota() {  
        document.getElementById("name").value = "";
        document.getElementById("surname").value = "";
        document.getElementById("age").value = "";
    
      }


    