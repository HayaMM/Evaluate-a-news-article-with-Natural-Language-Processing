import { checkForName } from "./nameChecker.js";
import { isALink } from "./urlHandle.js";

function handleSubmit(event) {
    event.preventDefault()
    // check what text was put into the form field
    let formText = document.getElementById('name').value
    // alert user to input a value
    if (formText == '') {
        alert('Enter a link');
        return;
    }

    if (checkForName(formText)) {
        return;
    }

    // check if the input is a link
    if (isALink(formText)) {
        console.log("::: Form Submitted :::")
        fetch('http://localhost:8081/subURL', {
            method: 'POST',
            credentials: 'same-origin',
            headers: { 'Content-Type': 'application/json' },
            // body data type must match "Content-Type" header        
            body: JSON.stringify({ input: formText })
        })
            .then(res => res.json())
            .then((data) => { editdom(data) })
    }
    else {
        alert("please be sure your input is a link")
    }
}
function editdom(data) {
    document.getElementById('polarity').innerHTML = `Polarity:  ${data.score_tag}`;
    document.getElementById('textArticle').innerHTML = `Text: ${data.text}`;
    document.getElementById('subjectivity').innerHTML = `Subjectivity: ${data.subjectivity}`;
}
export { handleSubmit, checkForName, isALink }