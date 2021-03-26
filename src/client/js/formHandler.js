import { urlChecker } from './urlChecker'

function handleSubmit(event) {
    console.log("handlesubmit")
    event.preventDefault()

    let inputForm = document.getElementById('name').value
    if (Client.urlChecker(inputForm)) {
        console.log("Handle Submit OK")
        fetch("http://localhost:8000/sentiment", {
            method: "POST",
            credentials: "same-origin",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ inputForm }),
        })
            .then((res) => res.json())
            .then((res) => {
                console.log(res);
                obtenerResultados(res);
            })
 
    } else {
        console.log("wrong url")
        alert("Insert a valid URL")
    }

    console.log("Ok")
}


function obtenerResultados(analysis) {
    console.log("este es el data:"+analysis);

    document.querySelector("#subjetividad").innerHTML = `Subjectivity: ${analysis.subjectivity}`;

    if (analysis.subjectivity === "objective") {
        document.querySelector("#subjetividad").style.backgroundColor = 'green';
    } else {
        document.querySelector("#subjetividad").style.backgroundColor = 'red';
    }

    document.querySelector("#acuerdo").innerHTML = `Agreement: ${analysis.agreement}`;

    if (analysis.agreement === "AGREEMENT") {
        document.querySelector("#acuerdo").style.backgroundColor = 'green';
    } else {
        document.querySelector("#acuerdo").style.backgroundColor = 'red';
    }
    
    document.querySelector("#ironia").innerHTML = `Irony: ${analysis.irony}`;

    if (analysis.irony === "NONIRONIC") {
        document.querySelector("#ironia").style.backgroundColor = 'green';
    } else {
        document.querySelector("#ironia").style.backgroundColor = 'red';
    }
}

export { handleSubmit }
