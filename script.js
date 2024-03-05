const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');
const fruits = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

function search(str) {
    const userInput = str.toLowerCase();
    const results = [];

    // Filter fruits based on user input
    fruits.forEach(fruit => {
        if (fruit.toLowerCase().includes(userInput)) {
            results.push(fruit);
        }
    });

    return results;
}

function searchHandler(e) {
    const inputVal = e.target.value;
    const results = search(inputVal);
    showSuggestions(results, inputVal);
}

function showSuggestions(results, inputVal) {
    suggestions.innerHTML = "";

    results.forEach(result => {
        const li = document.createElement("li");
        li.textContent = result;
        suggestions.appendChild(li);
    });

    // Highlight the first suggestion
    if (results.length > 0) {
        suggestions.firstChild.classList.add("highlighted");
        // Show suggestions
        suggestions.parentElement.style.display = 'block'; // or 'flex' based on your needs
    } else {
        // Hide suggestions if there are none
        suggestions.parentElement.style.display = 'none';
    }
}


function useSuggestion(e) {
    const selectedOption = e.target.textContent;
    input.value = selectedOption;
}

// Event listeners
input.addEventListener("input", searchHandler);
suggestions.addEventListener("click", useSuggestion);