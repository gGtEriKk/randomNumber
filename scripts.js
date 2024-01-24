const drawButton = document.getElementById("draw-button")

function draw() {
    const initialNumberInput = document.getElementById("initial-number").value
    const limitNumberInput = document.getElementById("limit-number").value
    const drawnNumberParagraph = document.getElementById("drawn-number-paragraph")

    const max = Math.ceil(limitNumberInput)
    const min = Math.floor(initialNumberInput)

    if (initialNumberInput.length === 0 || limitNumberInput.length === 0) {
        alert("Preencha todos os campos!")
    } else if (initialNumberInput >= limitNumberInput) {
        alert("O número mínimo deve ser menor do que o número máximo")
    } else {
        const drawnNumber = Math.floor(Math.random() * (max - min + 1)) + min

        drawnNumberParagraph.innerHTML = drawnNumber
    }
}

drawButton.addEventListener("click", draw)