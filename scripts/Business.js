// this function takes the business object as parameter and displays proper html on page
// by string interpolating through the business object properties
export const Business = (businessObject) => {
    return `
        <section class="business">
            <h2 class="business__companyName">${businessObject.companyName}</h2>
            <div class="business__address">
                
            ${businessObject.addressFullStreet}<br>
            ${businessObject.addressCity}, ${businessObject.addressStateCode} ${businessObject.addressZipCode}<br>
            ______________________________________________

            </div>
        </section>
    `
}

// create a function that says if a business object state address city is equal to NY
// return true, if not return false
const findNewYorkBusinesses = (businessObject) => {
    if (businessObject.addressStateCode === "NY") {
        return true
    }
    return false
}

// Create a new array that contains supplies that cost less than $50
export const NewYorkArray = () => {
    // declare a new variable that it set to invoke the true/false statement using the filter method
    const filteredItems = businesses.filter(findNewYorkBusinesses)
    // return that declared variable
    return filteredItems
}