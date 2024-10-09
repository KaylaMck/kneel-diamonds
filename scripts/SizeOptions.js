export const SizeOptions = async () => {
    const response = await fetch("http://localhost:8088/sizes")
    const sizes = await response.json()

    let sizesHTML = ""
        for (const size of sizes) {
            sizesHTML += `<input type='radio' name='size' value='${size.id}' /> ${size.carets}`
        }


    // Fill in the rest


    return sizesHTML
}