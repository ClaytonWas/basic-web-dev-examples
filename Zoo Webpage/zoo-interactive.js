// ============================================
// ZOO INTERACTIVE JAVASCRIPT
// Educational JavaScript for Ages 11-14
// ============================================

// ============================================
// 1. VARIABLES - Storing data in memory
// ============================================
// Variables are like boxes that store information
// We use 'let' to create variables that can change
// We use 'const' to create variables that stay the same

let currentQuizScore = 0; // This tracks the quiz score
let quizAnswered = false; // This tracks if the quiz has been answered

// ============================================
// 2. ARRAYS - Lists of data
// ============================================
// Arrays store multiple items in order, like a shopping list
// Each item has a position number (starting from 0)

// Array of random animal facts
const randomFacts = [
    "Ring-tailed lemurs can jump up to 10 feet in the air!",
    "Orangutans share 97% of their DNA with humans!",
    "Green snakes can live up to 15 years in the wild!",
    "Ring-tailed lemurs sunbathe in the morning to warm up!",
    "Orangutans are the slowest breeding mammals on Earth!",
    "Green snakes are excellent swimmers despite living on land!",
    "Ring-tailed lemurs have a special scent gland on their wrists!",
    "Orangutans can make over 30 different sounds to communicate!",
    "Green snakes can eat prey that's larger than their own head!",
    "Ring-tailed lemurs are the most terrestrial of all lemur species!",
    "African elephants can communicate using sounds too low for humans to hear!",
    "Emperor penguins can dive deeper than any other bird - over 1,800 feet!",
    "Giraffes only sleep about 30 minutes per day, in short 5-minute naps!",
    "Siberian tigers can weigh up to 660 pounds - that's as heavy as 4 adults!",
    "Bottlenose dolphins have names - each has a unique signature whistle!",
    "Elephants have over 40,000 muscles in their trunks alone!",
    "Penguins huddle together in groups of thousands to stay warm in Antarctica!",
    "A giraffe's tongue is 20 inches long and blue-black to prevent sunburn!",
    "No two tigers have the same stripe pattern - they're like fingerprints!",
    "Dolphins can swim at speeds up to 20 miles per hour and leap 15 feet high!"
];

// Array of quiz questions - each question is an object (a collection of related data)
const quizQuestions = [
    {
        question: "Where do Ring-tailed lemurs live?",
        options: ["Africa", "Madagascar", "Australia", "South America"],
        correct: 1 // The correct answer is at position 1 (Madagascar)
    },
    {
        question: "What is special about Orangutans?",
        options: ["They live in water", "They use tools", "They can fly", "They are nocturnal"],
        correct: 1 // The correct answer is at position 1 (They use tools)
    },
    {
        question: "What do Green snakes primarily eat?",
        options: ["Mammals", "Fish", "Insects", "Plants"],
        correct: 2 // The correct answer is at position 2 (Insects)
    },
    {
        question: "How many muscles does an elephant's trunk have?",
        options: ["10,000", "20,000", "30,000", "40,000"],
        correct: 3 // The correct answer is at position 3 (40,000)
    },
    {
        question: "Where are Emperor penguins found?",
        options: ["Arctic", "Antarctica", "Tropical islands", "North America"],
        correct: 1 // The correct answer is at position 1 (Antarctica)
    },
    {
        question: "How tall can giraffes grow?",
        options: ["12 feet", "15 feet", "18 feet", "20 feet"],
        correct: 2 // The correct answer is at position 2 (18 feet)
    },
    {
        question: "What makes each tiger unique?",
        options: ["Their size", "Their roar", "Their stripe pattern", "Their color"],
        correct: 2 // The correct answer is at position 2 (Their stripe pattern)
    },
    {
        question: "How do dolphins communicate?",
        options: ["By dancing", "By signature whistles", "By changing color", "By flashing lights"],
        correct: 1 // The correct answer is at position 1 (By signature whistles)
    },
    {
        question: "How deep can Emperor penguins dive?",
        options: ["500 feet", "1,000 feet", "1,500 feet", "Over 1,800 feet"],
        correct: 3 // The correct answer is at position 3 (Over 1,800 feet)
    },
    {
        question: "What is the largest land animal?",
        options: ["Giraffe", "Elephant", "Tiger", "Orangutan"],
        correct: 1 // The correct answer is at position 1 (Elephant)
    }
];

// ============================================
// 3. FUNCTIONS - Reusable blocks of code
// ============================================
// Functions are like recipes - you write them once and can use them many times
// Functions help organize code and avoid repetition

// Variable to store the currently selected quiz questions
let selectedQuizQuestions = [];

// Function to show a random fact
function showRandomFact() {
    // Get a random number between 0 and the length of the array
    // Math.random() gives a number between 0 and 1
    // Math.floor() rounds down to the nearest whole number
    const randomIndex = Math.floor(Math.random() * randomFacts.length);
    
    // Get the fact at that random position
    const randomFact = randomFacts[randomIndex];
    
    // Get the display element
    const factDisplay = document.getElementById('randomFactDisplay');
    
    // Set the text content and show it
    // Facts now stay visible - they don't disappear automatically
    factDisplay.textContent = randomFact;
    factDisplay.style.display = 'block';
}

// Function to toggle theme (day/night mode)
function toggleTheme() {
    // Get the body element
    const body = document.body;
    
    // Toggle the 'night-mode' class
    // classList.toggle adds the class if it's not there, removes it if it is
    body.classList.toggle('night-mode');
    
    // Get the theme button
    const themeBtn = document.getElementById('themeBtn');
    
    // Change the button text based on current theme
    if (body.classList.contains('night-mode')) {
        themeBtn.textContent = '☀️ Day Mode';
    } else {
        themeBtn.textContent = '🌙 Night Mode';
    }
    
    // Save the theme preference
    localStorage.setItem('theme', body.classList.contains('night-mode') ? 'night' : 'day');
}

// Function to load saved theme
function loadTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'night') {
        document.body.classList.add('night-mode');
        document.getElementById('themeBtn').textContent = '☀️ Day Mode';
    }
}

// Function to load saved zoo name
function loadZooName() {
    // Get the saved zoo name from browser storage
    const savedZooName = localStorage.getItem('zooName');
    
    // If there's a saved name, use it; otherwise use the default
    if (savedZooName) {
        document.getElementById('zooName').textContent = savedZooName;
    }
}

// Function to show the edit input for zoo name
function showZooNameEdit() {
    // Get the current zoo name
    const currentName = document.getElementById('zooName').textContent;
    
    // Get the edit container and input field
    const editContainer = document.getElementById('zooNameEditContainer');
    const nameInput = document.getElementById('zooNameInput');
    
    // Set the input value to the current name
    nameInput.value = currentName;
    
    // Show the edit container
    editContainer.style.display = 'flex';
    
    // Focus on the input field so user can start typing immediately
    nameInput.focus();
    nameInput.select(); // Select all text so it's easy to replace
}

// Function to save the zoo name
function saveZooName() {
    // Get the input field
    const nameInput = document.getElementById('zooNameInput');
    
    // Get the new name and trim whitespace
    const newName = nameInput.value.trim();
    
    // Check if the name is not empty
    if (newName !== '') {
        // Update the h1 element with the new name
        document.getElementById('zooName').textContent = newName;
        
        // Save to browser storage
        localStorage.setItem('zooName', newName);
        
        // Hide the edit container
        document.getElementById('zooNameEditContainer').style.display = 'none';
    } else {
        // If empty, show an alert (or you could show a message)
        alert('Please enter a zoo name!');
        nameInput.focus();
    }
}

// Function to cancel editing the zoo name
function cancelZooNameEdit() {
    // Hide the edit container
    document.getElementById('zooNameEditContainer').style.display = 'none';
    
    // Clear the input field
    document.getElementById('zooNameInput').value = '';
}

// Function to show/hide fun facts for each animal
function toggleFunFact(animalName) {
    // Get the fact element for this specific animal
    const factElement = document.getElementById('fact-' + animalName);
    
    // Check if it's currently hidden
    if (factElement.style.display === 'none') {
        // Show it
        factElement.style.display = 'block';
    } else {
        // Hide it
        factElement.style.display = 'none';
    }
}

// Function to filter animals based on search
function filterAnimals(searchTerm) {
    // Convert search term to lowercase for case-insensitive search
    const searchLower = searchTerm.toLowerCase();
    
    // Get all animal containers
    const animalContainers = document.querySelectorAll('.animal-container');
    
    // Loop through each container
    animalContainers.forEach(function(container) {
        // Get the animal name and habitat from data attributes
        const animalName = container.getAttribute('data-animal').toLowerCase();
        const habitat = container.getAttribute('data-habitat').toLowerCase();
        
        // Get the h2 element (animal name) and h4 element (habitat description)
        const animalTitle = container.querySelector('h2').textContent.toLowerCase();
        const habitatText = container.querySelector('h4').textContent.toLowerCase();
        
        // Check if search term matches animal name, habitat, or title
        if (animalName.includes(searchLower) || 
            habitat.includes(searchLower) || 
            animalTitle.includes(searchLower) ||
            habitatText.includes(searchLower)) {
            // Show this container
            container.classList.remove('hidden');
        } else {
            // Hide this container
            container.classList.add('hidden');
        }
    });
}

// Function to randomly select questions from the quiz array
function selectRandomQuestions(allQuestions, count) {
    // Create a copy of the questions array so we don't modify the original
    const questionsCopy = [...allQuestions];
    const selected = [];
    
    // Select random questions
    for (let i = 0; i < count && questionsCopy.length > 0; i++) {
        // Get a random index from the remaining questions
        const randomIndex = Math.floor(Math.random() * questionsCopy.length);
        
        // Remove the selected question from the copy and add it to selected
        selected.push(questionsCopy.splice(randomIndex, 1)[0]);
    }
    
    return selected;
}

// Function to create and display the quiz
function showQuiz() {
    // Get the modal element
    const modal = document.getElementById('quizModal');
    
    // Show the modal
    modal.style.display = 'flex';
    
    // Reset quiz variables
    currentQuizScore = 0;
    quizAnswered = false;
    
    // Randomly select 3 questions from all available questions
    selectedQuizQuestions = selectRandomQuestions(quizQuestions, 3);
    
    // Get the container where quiz questions will go
    const quizContainer = document.getElementById('quizContainer');
    
    // Clear any previous quiz content
    quizContainer.innerHTML = '';
    
    // Loop through the selected questions and create HTML for them
    selectedQuizQuestions.forEach(function(question, questionIndex) {
        // Create a div for this question
        const questionDiv = document.createElement('div');
        questionDiv.className = 'quiz-question';
        
        // Add the question text
        questionDiv.innerHTML = '<h3>Question ' + (questionIndex + 1) + ': ' + question.question + '</h3>';
        
        // Create a container for the options
        const optionsDiv = document.createElement('div');
        
        // Loop through each option
        question.options.forEach(function(option, optionIndex) {
            // Create a button for this option
            const optionButton = document.createElement('button');
            optionButton.className = 'quiz-option';
            optionButton.textContent = option;
            
            // Add click event listener
            optionButton.addEventListener('click', function() {
                // Check if already answered
                if (quizAnswered) return;
                
                // Disable all options for this question
                const allOptions = questionDiv.querySelectorAll('.quiz-option');
                allOptions.forEach(function(opt) {
                    opt.classList.add('disabled');
                });
                
                // Check if answer is correct
                if (optionIndex === question.correct) {
                    // Correct answer - add green styling
                    optionButton.classList.add('correct');
                    currentQuizScore++;
                } else {
                    // Incorrect answer - add red styling
                    optionButton.classList.add('incorrect');
                    // Also highlight the correct answer
                    allOptions[question.correct].classList.add('correct');
                }
                
                // Update score display
                updateQuizScore();
            });
            
            // Add the button to options container
            optionsDiv.appendChild(optionButton);
        });
        
        // Add options to question div
        questionDiv.appendChild(optionsDiv);
        
        // Add question to quiz container
        quizContainer.appendChild(questionDiv);
    });
    
    // Initialize score display
    updateQuizScore();
}

// Function to update quiz score display
function updateQuizScore() {
    const scoreElement = document.getElementById('quizScore');
    // Use the selected questions length instead of all questions
    const totalQuestions = selectedQuizQuestions.length;
    const percentage = Math.round((currentQuizScore / totalQuestions) * 100);
    
    scoreElement.textContent = 'Score: ' + currentQuizScore + ' / ' + totalQuestions + ' (' + percentage + '%)';
    
    if (currentQuizScore === totalQuestions) {
        scoreElement.textContent += ' 🎉 Perfect Score!';
    } else if (percentage >= 80) {
        scoreElement.textContent += ' 🌟 Great Job!';
    } else if (percentage >= 60) {
        scoreElement.textContent += ' 👍 Good Try!';
    }
}

// Function to close the quiz modal
function closeQuiz() {
    const modal = document.getElementById('quizModal');
    modal.style.display = 'none';
}

// ============================================
// 4. EVENT LISTENERS - Making things interactive
// ============================================
// Event listeners wait for things to happen (like clicks) and then run code
// This is how we make web pages respond to user actions

// Wait for the page to fully load before running our code
document.addEventListener('DOMContentLoaded', function() {
    // Load saved data
    loadTheme();
    loadZooName();
    
    // ============================================
    // Theme Switcher Button
    // ============================================
    const themeBtn = document.getElementById('themeBtn');
    themeBtn.addEventListener('click', toggleTheme);
    
    // ============================================
    // Random Fact Button
    // ============================================
    const randomFactBtn = document.getElementById('randomFactBtn');
    randomFactBtn.addEventListener('click', showRandomFact);
    
    // ============================================
    // Quiz Button
    // ============================================
    const quizBtn = document.getElementById('quizBtn');
    quizBtn.addEventListener('click', showQuiz);
    
    // ============================================
    // Close Quiz Button
    // ============================================
    const closeQuizBtn = document.getElementById('closeQuiz');
    closeQuizBtn.addEventListener('click', closeQuiz);
    
    // Close quiz when clicking outside the modal
    const quizModal = document.getElementById('quizModal');
    quizModal.addEventListener('click', function(event) {
        // If clicking the modal background (not the content), close it
        if (event.target === quizModal) {
            closeQuiz();
        }
    });
    
    // ============================================
    // Fact Reveal Buttons (one for each animal)
    // ============================================
    // Get all buttons with class "fact-reveal-btn"
    const factButtons = document.querySelectorAll('.fact-reveal-btn');
    
    // Add event listener to each button
    factButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            // Get the animal name from the button's data attribute
            const animalName = button.getAttribute('data-animal');
            // Toggle the fact for this animal
            toggleFunFact(animalName);
        });
    });
    
    // ============================================
    // Search Box
    // ============================================
    const searchInput = document.getElementById('animalSearch');
    
    // Listen for input events (when user types)
    searchInput.addEventListener('input', function() {
        // Get the value the user typed
        const searchTerm = searchInput.value;
        // Filter animals based on search term
        filterAnimals(searchTerm);
    });
    
    // ============================================
    // Zoo Name Editor
    // ============================================
    // Get the edit button
    const editZooNameBtn = document.getElementById('editZooNameBtn');
    editZooNameBtn.addEventListener('click', showZooNameEdit);
    
    // Get the save button
    const saveZooNameBtn = document.getElementById('saveZooNameBtn');
    saveZooNameBtn.addEventListener('click', saveZooName);
    
    // Get the cancel button
    const cancelZooNameBtn = document.getElementById('cancelZooNameBtn');
    cancelZooNameBtn.addEventListener('click', cancelZooNameEdit);
    
    // Allow saving by pressing Enter key
    const zooNameInput = document.getElementById('zooNameInput');
    zooNameInput.addEventListener('keypress', function(event) {
        // Check if Enter key was pressed (key code 13)
        if (event.key === 'Enter') {
            saveZooName();
        }
        // Check if Escape key was pressed (key code 27)
        if (event.key === 'Escape') {
            cancelZooNameEdit();
        }
    });
});

// ============================================
// CONCEPTS LEARNED:
// ============================================
// 1. Variables (let, const) - storing data
// 2. Arrays - lists of data
// 3. Objects - collections of related data
// 4. Functions - reusable code blocks
// 5. Event Listeners - responding to user actions
// 6. DOM Manipulation - changing HTML with JavaScript
// 7. Conditional Logic (if/else) - making decisions
// 8. Loops (forEach) - repeating actions
// 9. Local Storage - saving data in the browser (theme preference)
// 10. Math.random() - generating random numbers
// 11. String Methods - working with text
// 12. CSS Classes - styling with JavaScript
// ============================================

