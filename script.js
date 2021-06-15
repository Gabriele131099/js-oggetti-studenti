function run() {
    var arrayStudente = {
        student: []
     }
        
        var name = document.getElementById("name").value
        var surname = document.getElementById("surname").value
        var age = parseInt(document.getElementById("age").value)
    
        // lo facciamo in un modo un po' "anonimo", per evitare dopo
        // di sovrascrivere lo stesso oggetto.
        arrayStudente.student.push({
            name: name,
            surname: surname,
            age: age
        });
    
    
    for (var i = 0; i < arrayStudente.student.length; i++) {
        console.log(arrayStudente.student[i])
        for (var key in arrayStudente.student[i]) {
            console.log(key , arrayStudente.student[i] [key])
        }    
    }
    
    return arrayStudente
}