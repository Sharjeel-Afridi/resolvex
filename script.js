const signupBtn = document.getElementById('signup');
let newDiv = document.createElement("div");

newDiv.innerHTML = `<div class="overlay"></div>
<div class="loginform">
    <div class="plus"></div>
    <form action="">
        <div>
            <label for="">UserName</label>
            <input type="text">
        </div>
        <div>
            <label for="">Password</label>
            <input type="text">
        </div>
        <button class="signup">Sign Up</button>
    </form>
</div>`

const overlay = newDiv.querySelector('.overlay');
const closeBtn = newDiv.querySelector('#close');

signupBtn.addEventListener('click', () => {
    document.body.appendChild(newDiv);
})

closeBtn.addEventListener('click', () => {
    document.body.removeChild(newDiv);
})
overlay.addEventListener('click', () => {
    document.body.removeChild(newDiv);
})