document.querySelector("#btnConsultar").onclick = function () {
    //alert("Funcional!!!") 
    let cep = document.querySelector("#cep").value 
    fetch("https://viacep.com.br/ws/" + cep + "/json/", {
        method: 'GET',
        headers: { 
            Accept: 'application/json', 
            'Content-Type' : 'application/json'
        }
    }).then(function(response) { 
            response.json().then(function(data) {
                document.querySelector("#cidade").innerHTML = data['localidade']
            })
        })
    }

    //document.querySelector("#cidade").innerHTML = cep

