import PocketBase from './node_modules/pocketbase/dist/pocketbase.es.mjs';
const apiURL = "https://top-g.pockethost.io/api/collections/qna/records"
const pb = new PocketBase('https://top-g.pockethost.io');
const loginBtn = document.getElementById('login');
let newDiv = document.createElement("div");
const questionField = document.getElementById('question');
const search = document.getElementById('search');

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


async function searchQuestion(searchTerm) {
    // Convert the search term to lowercase for case-insensitive search
    const searchTermLower = searchTerm.toLowerCase();

    // Use the filter method to find items that match the search term
    const apiResponse = await fetch(apiURL).then((resp)=>{return resp.json()}).then(data => {return data});
    
    const matchingItems = apiResponse.items.filter(item =>
        item.questions.toLowerCase().includes(searchTermLower)
    );

    // Extract the answers corresponding to the matching questions
    const matchingAnswers = matchingItems.map(item => item.answers);
    console.log(`Search results for "${searchTerm}":`,matchingAnswers);
    
      
}

search.addEventListener('click', () => {
    const searchTerm = questionField.value;
    searchQuestion(searchTerm);
})

loginBtn.addEventListener('click', () => {
    document.body.appendChild(newDiv);
    console.log("login button")
})

closeBtn.addEventListener('click', () => {
    document.body.removeChild(newDiv);
    console.log("login button")
})
overlay.addEventListener('click', () => {
    document.body.removeChild(newDiv);
    console.log("login button")
})