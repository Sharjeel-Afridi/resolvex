const loginBtn = document.getElementById('login');
let newDiv = document.createElement("div");

newDiv.innerHTML = `<div class="overlay"></div>
<div class="loginform">
    
    <form action="">
        <img src="./assets/close.svg">
        <div>
            <label for="">Username</label>
            <input type="text">
        </div>
        <div>
            <label for="">Password</label>
            <input type="text">
        </div>
        <button class="login">Login</button>
    </form>
</div>`

const overlay = newDiv.querySelector('.overlay');
const closeBtn = newDiv.querySelector('img');

loginBtn.addEventListener('click', () => {
    document.body.appendChild(newDiv);
})

closeBtn.addEventListener('click', () => {
    document.body.removeChild(newDiv);
})
overlay.addEventListener('click', () => {
    document.body.removeChild(newDiv);
})