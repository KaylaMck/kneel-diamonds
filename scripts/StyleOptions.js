export const StyleOptions = async () => {
    const response = await fetch("http://localhost:8088/styles")
    const styles = await response.json()

    let stylesHTML = ""
        for (const style of styles) {
            stylesHTML += `<input type='radio' name='style' value='${style.id}' /> ${style.style}`
        }


    // Fill in the rest


    return stylesHTML
}