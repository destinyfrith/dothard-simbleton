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