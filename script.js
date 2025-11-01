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

document.addEventListener(`DOMContentLoaded`, () =>{
    let container = document.querySelector(`.container`);
    let goToSignUp = document.getElementById(`goToSignUp`);
    let loginBtn = document.querySelector(`.loginBtn`)
    let signUpBtn = document.getElementById(`signUpBtn`)
    let signInInfo = []

    loginBtn.disabled = true
    signUpBtn.disabled = true
    
    let passwordInput = document.getElementById(`signup-password`)
    let usernameInput = document.getElementById(`signUp-username`)
    let emailInput = document.getElementById(`signUp-email`)
    let loginPasswordInput = document.getElementById(`login-password`)
    let loginUsernameInput = document.getElementById(`username`)

    goToSignUp.addEventListener(`click`, function(event){ //function for when the "sign up?" link is pressed
        event.preventDefault()
        container.classList.add(`show-signup`)
    });

    function checkSignUpFields(){
       signUpBtn.disabled = !(usernameInput.value && emailInput.value && passwordInput.value)
    }
    
    [passwordInput, usernameInput, emailInput].forEach(input => {
        input.addEventListener(`input`, checkSignUpFields)
    })

    function checkLoginFields(){
        let loginPassword = loginPasswordInput.value.trim()
        let loginUsername = loginUsernameInput.value.trim()
        loginBtn.disabled = !(loginPassword && loginUsername)
    }

    
    [loginPasswordInput, loginUsernameInput].forEach(input => {
        input.addEventListener(`input`, checkLoginFields)
    })

    signUpBtn.addEventListener(`click`, () => {
        let newUser = {
            username: usernameInput.value.trim(),
            email: emailInput.value.trim(),
            password: passwordInput.value.trim()
        }
        if(signInInfo.find(user => user.username == newUser.username)){
            alert(`Account already exists`)
            return
        }
        signInInfo.push(newUser)
        console.log(signInInfo)
        passwordInput.value = ``
        usernameInput.value = ``
        emailInput.value = ``
        checkSignUpFields()
        container.classList.remove(`show-signup`)
    })

    loginBtn.addEventListener(`click`, () => {
        let loginUsername = loginUsernameInput.value.trim()
        let loginPassword = loginPasswordInput.value.trim()
        let userFound = signInInfo.find(user =>
            user.username == loginUsername && user.password == loginPassword
         )
        if(userFound){
            window.location = `backgroundPage.html`
        }else{
            alert(`Account not found`)
        }
        setTimeout(() => {
            loginUsernameInput.value = ``
            loginPasswordInput.value = ``
            checkLoginFields()
        }, 1000)
    })
})


