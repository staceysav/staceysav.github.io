let phrases = [
    { text: 'Go outside', image: "assets/park.jpg" },
    { text: 'Relax in a swimming pool', image: "assets/swimming-pool.jpg" },
    { text: 'Notice your breaths', image: "assets/breath.jpg" },
    { text: 'Play sudoku', image: "assets/sudoku.jpg" },
    { text: 'Find stretching excercies on Youtube', image: "assets/stretch.jpg" },
    { text: 'Take photos of 5 cats', image: "assets/street_cat.jpg" },
    { text: 'Hug you loved one', image: "assets/hug.jpg" },
    { text: 'Make some tea', image: "assets/tea.jpg" },
    { text: 'Call your parents', image: "assets/call.jpg" },
    { text: 'Send a meme to a friend', image: "assets/meme.jpg" },
    { text: 'Add a song to your workout playlist', image: "assets/gym.jpg" },
    { text: 'Clean the table', image: "assets/clean.jpg" },
    { text: 'Find a joke and tell it to somebody', image: "assets/joke.jpg" },
    { text: 'Do squats', image: "assets/squats.jpg" },
    { text: 'Listen to a Learn to swim tutorial', image: "assets/swim.jpg" },
    { text: 'Read a book', image: "assets/reading.jpg" },
    { text: 'Create a place to keep recipes', image: "assets/recipes.jpg" },
    { text: 'Complete a Duolingo lesson', image: "assets/langlesson.jpg" },
    { text: 'Learn 5 phrases in Turkish', image: "assets/lang.jpg" },
    { text: 'Put on makeup', image: "assets/makeup.jpg" },
    { text: 'Give yourself a massage', image: "assets/massage.jpg" },
    { text: 'Make a face mask', image: "assets/facemask.jpg" },
    { text: 'Journal', image: "assets/journaling.jpg" },
    { text: 'Make a gratitude list', image: "assets/gratitude_list.jpg" },
    { text: 'Practice yoga', image: "assets/yoga.jpg" },
    { text: 'Meditate', image: "assets/meditate.jpg" },
    { text: 'Wear eye-liner', image: "assets/eyeliner.jpg" },
    { text: 'Put a new screen wallpaper', image: "assets/wallpaper.jpg" },
    { text: 'Dance', image: "assets/dancing.jpg" },
    { text: 'Make a list of things that make you happy', image: "assets/happy_list.jpg" },
    { text: 'Take a shower', image: "assets/shower.jpg" },
    { text: 'Prepare meals for your freezer', image: "assets/meals.jpg" },
    { text: 'Give yourself a manicure or pedicure', image: "assets/manicure.jpg" },
    { text: 'Plan a trip', image: "assets/travel.jpg" },
    { text: 'Plan a date night with your sweetie', image: "assets/romance2.jpg" },
    { text: 'Learn more about posing', image: "assets/posing.jpg" },
    { text: 'Dream and plan', image: "assets/dream.jpg" },
]

function showRandomActivity(activities) {
    let randomIndex = Math.floor(Math.random() * phrases.length);
    return activities[randomIndex];
}

let button = document.querySelector('.button');
let phrase = document.querySelector('.phrase');
let advice = document.querySelector('.advice');
let image = document.querySelector('.image');
let secondPart = document.querySelector('.secondPart');

button.addEventListener('click', function () {
    randomActivity = showRandomActivity(phrases);
    phrase.textContent = randomActivity.text;
    image.src = randomActivity.image;
})




// $.getJSON("/info.json", (data) => {console.log(data)})