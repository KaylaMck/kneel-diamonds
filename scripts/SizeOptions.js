import { setSizeChoice } from "./TransientState.js"

const handleSizeChoice = (changeEvent) => {
    if (changeEvent.target.name === "size") {
        setSizeChoice(parseInt(changeEvent.target.value))
    }
}

export const SizeOptions = async () => {
    const response = await fetch("http://localhost:8088/sizes")
    const sizes = await response.json()

    document.addEventListener("change", handleSizeChoice)

    let sizesHTML = ""
        // for (const size of sizes) {
        //     sizesHTML += `<div>
        //     <input type='radio' name='size' value='${size.id}' /> ${size.carets}
        //     </div>`
        // }
     const sizesArray = sizes.map(
        (size) => {
            return `<div>
                <input type='radio' name='size' value='${size.id}' /> ${size.carets}
                </div>`
        }
    )
    
    sizesHTML += sizesArray.join("")


    // Fill in the rest


    return sizesHTML
}