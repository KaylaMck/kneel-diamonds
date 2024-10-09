export const MetalOptions = async () => {
    const response = await fetch("http://localhost:8088/metals")
    const metals = await response.json()

    let metalsHTML = "<h2>Which type of metal would you like?</h2>"
    for (const metal of metals) {
        metalsHTML += ` <input type='radio' name='metal' value='${metal.id}' /> ${metal.metal}`
    }
    
    return metalsHTML
}