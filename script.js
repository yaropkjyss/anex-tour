const modal = document.getElementById('modal');
const btn = document.getElementById('aboutBtn');
const closeBtn = document.querySelector('.close');

btn.addEventListener('click', () => {
    modal.classList.add('active');
});

closeBtn.addEventListener('click', () => {
    modal.classList.remove('active');
});

window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.classList.remove('active');
    }
});

document.getElementById("myForm").addEventListener("submit", function(event){
    event.preventDefault();

    let username = document.getElementById("username").value;
    let email = document.getElementById("email").value;
    
    let isValid = true;

    if (username == "") {
        document.getElementById("usernameError").textContent = "Имя пользователя обязательно"
        isValid = false;
    } else {
        document.getElementById("usernameError").textContent = "";
    }

    if (email == "") {
        document.getElementById("emailError").textContent = "Почта обязательна"
        isValid = false;
    } else {
        document.getElementById("emailError").textContent = "";
    }

})