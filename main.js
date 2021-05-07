
    function imie() {
    const imie = document.getElementById('imie').value
    if(imie.length < 3 ) {
        alert('za krótkie imię')
    }
    
    }
    
    
    function nazwisko() {
        const imie = document.getElementById('nazwisko').value
        if(imie.length < 5 ) {
            alert('za krótkie nazwisko')
        }
    }
    
    function mail() {
        const mail = document.getElementById('mail').value
        if(email.search('@') < -1)
        alert ('niepoprawny email')
        else(email.search('@') = true)
        console.log(mail)
    }