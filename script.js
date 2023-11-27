
const apiURL = "https://top-g.pockethost.io/api/collections/qna/records"
const loginBtn = document.getElementById('login');
let newDiv = document.createElement("div");
let answerDiv = document.createElement("div");
const questionField = document.getElementById('question');
const search = document.getElementById('search');
let ol = document.createElement('ol');

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

    const matchingQuestions = [];
    matchingItems.forEach(item => {
        matchingQuestions.push(item.questions);
    });
    // Extract the answers corresponding to the matching questions
    const matchingAnswers = matchingItems.map(item => item.answers);
    console.log(`Search results for "${searchTerm}":`,matchingAnswers);
    
    
    matchingQuestions.forEach((question, index) => {
        const answer = matchingAnswers[index];
        const li = document.createElement('li');
        li.innerHTML = `<h3>${question}</h3><p>${answer}</p>`;
        ol.appendChild(li);
    });
    answerDiv.appendChild(ol);
    
}





search.addEventListener('click', () => {
    const searchTerm = questionField.value;
    searchQuestion(searchTerm);
    document.body.appendChild(answerDiv);
})

loginBtn.addEventListener('click', () => {
    document.body.appendChild(newDiv);
})

closeBtn.addEventListener('click', () => {
    document.body.removeChild(newDiv);
})
overlay.addEventListener('click', () => {
    document.body.removeChild(newDiv);
})