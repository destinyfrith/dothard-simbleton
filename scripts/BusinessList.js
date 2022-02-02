import { getBusinesses } from "./database.js"
import { Business } from "./Business.js"


// this function declares the variable constant target to select the class id in the document
// id is specified with a hashtag
const contentTarget = document.querySelector("#container")

// create a function that displays the business objects by name in a list form
export const BusinessList = () => {
    const businessArray = getBusinesses()

    // this displays the title of the documents within the html
        contentTarget.innerHTML = "<h1>Active Businesses</h1>"

    // using for each method to display each business name object in the business array
    businessArray.forEach(
        (businessObject) => {
            // the html document aka the target will now display the business object from the business function
            contentTarget.innerHTML += Business(businessObject)
        }
    );
}