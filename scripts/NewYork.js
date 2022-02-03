import { getBusinesses } from "./database.js"

const businesses = getBusinesses()

// create a function that says if a business object address state code is equal to NY
// return true, if not return false
const findNewYorkBusinesses = (businessObject) => {
    if (businessObject.addressStateCode === "NY") {
        return true
    } else {
        return false
    }
}

// Create a new array that contains businesses that are in NY
const NewYorkArray = () => {
    // declare a new variable that it set to invoke the true/false statement using the filter method
    const filteredItems = businesses.filter(findNewYorkBusinesses)
    // return that declared variable
    return filteredItems
}

// create an object variable that displays the html format of all ny business objects 
const NYBusiness = (businessObject) => {
    return `
        <section class="business--NY">
            <h3 class="business--NY__name">${businessObject.companyName}</h3>
            <div class="business--NY__street">${businessObject.addressFullStreet}</div>
            <div class="business--NY__citystatezip">${businessObject.addressCity}, ${businessObject.addressStateCode} ${businessObject.addressZipCode}</div>
        </section>
        <hr>
    `
}
// 
const contentTarget = document.querySelector(".businessList--newYork")

// 
export const NYBusinessList = () => {
    const businessArray = NewYorkArray()
    contentTarget.innerHTML = "<h1>New York Businesses</h1>"

    businessArray.forEach(
        (businessObject) => {
            contentTarget.innerHTML += NYBusiness(businessObject)
        }
    );
}