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
            })
    } else {
        console.log("wrong url")
    }

    console.log("Ok")
}




export { handleSubmit }
