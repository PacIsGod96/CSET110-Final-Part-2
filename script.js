let container = document.querySelector(`.container`);
let goToSignUp = document.getElementById(`goToSignUp`);
let goToLogin = document.getElementById(`goToLogin`);


goToSignUp.addEventListener(`click`, function(event){ //function for when the "sign up?" link is pressed
    event.preventDefault(); //will stop the page from relaoding just incase
    container.classList.add(`show-signup`); //will show the sign up div
});

goToLogin.addEventListener(`click`, function(event){ //function for when the sign up button is pressed
    event.preventDefault();  //will stop the page from relaoding just incase
    container.classList.remove(`show-signup`); //will go back to the login div
})

function togglePassword(id, link){
    let input = document.getElementById(id)
    if(input.type == `password`){
        input.type = `text`
        link.textContent = `Hide Password`
    }else{
        input.type = `password`
        link.textContent = `Show Password`
    }
}