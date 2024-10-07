const billInput = document.getElementById('bill');
const tipInput = document.getElementById('tip');
const peopleInput = document.getElementById('people');
const tipPerPersonDisplay = document.getElementById('tip-per-person');
const totalPerPersonDisplay = document.getElementById('total-per-person');

// Función para calcular la propina y el total por persona
function calculateTip() {
    const bill = parseFloat(billInput.value);
    const tipPercentage = parseFloat(tipInput.value);
    const numberOfPeople = parseInt(peopleInput.value);

    if (isNaN(bill) || isNaN(tipPercentage) || isNaN(numberOfPeople) || numberOfPeople <= 0) {
        tipPerPersonDisplay.textContent = '0.00';
        totalPerPersonDisplay.textContent = '0.00';
        return;
    }

    // Calcular la propina total
    const totalTip = (bill * (tipPercentage / 100));
    // Calcular propina y total por persona
    const tipPerPerson = totalTip / numberOfPeople;
    const totalPerPerson = (bill + totalTip) / numberOfPeople;

    // Actualizar el DOM
    tipPerPersonDisplay.textContent = tipPerPerson.toFixed(2);
    totalPerPersonDisplay.textContent = totalPerPerson.toFixed(2);
}

// Event listeners para actualizar en tiempo real
billInput.addEventListener('input', calculateTip);
tipInput.addEventListener('input', calculateTip);
peopleInput.addEventListener('input', calculateTip);