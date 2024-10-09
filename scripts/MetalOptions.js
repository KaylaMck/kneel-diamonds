export const MetalOptions = async () => {
    const response = await fetch("http://localhost:8088/metals")
    const metals = await response.json()

    let metalsHTML = ""
    // for (const metal of metals) {
    //     metalsHTML += ` <div>
    //     <input type='radio' name='metal' value='${metal.id}' /> ${metal.metal}
    //     </div>`
    // }
    const metalsArray = metals.map(
        (metal) => {
            return `<div>
                <input type='radio' name='metal' value='${metal.id}' /> ${metal.metal}
            </div>`
        }
    )

    metalsHTML += metalsArray.join("")

    return metalsHTML
}