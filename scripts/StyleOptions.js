export const StyleOptions = async () => {
    const response = await fetch("http://localhost:8088/styles")
    const styles = await response.json()

    let stylesHTML = ""
        // for (const style of styles) {
        //     stylesHTML += `<div>
        //     <input type='radio' name='style' value='${style.id}' /> ${style.style}
        //     </div>`
        // }
    const stylesArray = styles.map(
        (style) => {
            return `<div>
                <input type='radio' name='style' value='${style.id}' /> ${style.style}
            </div>`
        }
    )

    // Fill in the rest
    stylesHTML += stylesArray.join("")

    return stylesHTML
}