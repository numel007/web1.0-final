// Select elements
const display = document.querySelector("#display")
const inputSize = document.querySelector("#input-size")
const showSize = document.querySelector('#show-size')
const inputFont = document.querySelector("#select-font")
const showFont = document.querySelector("#show-font")
const inputColor = document.querySelector("#input-color")
const showColor = document.querySelector("#show-color")
const inputBgColor = document.querySelector("#input-bg-color")
const showBgColor = document.querySelector("#show-bg-color")
const inputText = document.querySelector("#enter-text")
const inputWeight = document.querySelector("#font-weight")
const inputStyle = document.querySelector("#font-style")
const inputSpacing = document.querySelector("#letter-spacing")
const inputPadding = document.querySelector("#padding")

// Add event listeners to selected elements
inputSize.addEventListener('input', handleInput)
inputFont.addEventListener('input', handleInput)
inputColor.addEventListener('input', handleInput)
inputBgColor.addEventListener('input', handleInput)
inputText.addEventListener('input', handleInput)
inputWeight.addEventListener('input', handleInput)
inputStyle.addEventListener('input', handleInput)
inputSpacing.addEventListener('input', handleInput)
inputPadding.addEventListener('input', handleInput)

// Handle inputs in form field
function handleInput() {
    // Modify font size
    let fontSize = parseInt(inputSize.value)
    display.style.fontSize = fontSize + 'px'
    showSize.innerHTML = fontSize

    // Modify font family
    let fontFamily = inputFont.value
    display.style['font-family'] = fontFamily
    showFont.innerHTML = fontFamily

    // Modify font color
    let colorChoice = inputColor.value
    display.style.color = colorChoice
    showColor.innerHTML = colorChoice

    // Modify background color
    let bgColor = inputBgColor.value
    display.style.backgroundColor = bgColor
    showBgColor.innerHTML = bgColor

    // Modify displayed text
    let text_str = inputText.value
    display.innerHTML = text_str

    // Modify font weight
    let font_Weight = inputWeight.value
    display.style.fontWeight = font_Weight

    // Modify font style
    let font_Style = inputStyle.value
    display.style.fontStyle = font_Style

    // Modify letter spacing
    let letter_spacing = inputSpacing.value
    display.style.letterSpacing = letter_spacing + 'px'

    // Modify text area padding
    let padding = inputPadding.value
    display.style.padding = padding + 'px'
}