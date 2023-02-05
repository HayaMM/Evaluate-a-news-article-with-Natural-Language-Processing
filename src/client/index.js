import { handleSubmit } from "./js/formHandler.js";
import './styles/resets.scss'
import './styles/base.scss'
import './styles/footer.scss'
import './styles/form.scss'
import './styles/header.scss'

window.addEventListener('DOMContentLoaded', () => {
    // save button 
    const buttonForm = document.getElementById('myButton');
    // add event listener on click the button
    buttonForm.addEventListener('click', event => handleSubmit(event));
    console.error();
})

export { handleSubmit }