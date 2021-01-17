const fields = document.querySelectorAll("[required]")

//console.log(fields)

function customValidation(event){
    const field = event.target
    
    //Logica para verificar se existem erros
    //console.log(field.validity)
    function verifyErros(){
        let foundError = false;

        for(let error in field.validity){
            // console.log(field.validity[error])
            // se não for customError
            // então verifica se tem erro
            if(error != "customError" && field.validity[error]){
                foundError = error
            }
        }

        return  foundError;
    }

    const error = verifyErros()
    console.log("Error Exists: ", error)

    if(error) {
        //trocar menagem de required
        field.setCustomValidity("Esse campo é obrigatório")
    } else {
        field.setCustomValidity("")
    }

    verifyErros();
   
    

}

for ( field of fields ){
    field.addEventListener("invalid", customValidation)
}


document.querySelector("form")
.addEventListener("submit",event => {
    console.log("pode enviar o formulario")
    // nçao vai enviar o formulario
    event.preventDefault()
})