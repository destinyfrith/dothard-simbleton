import { getBusinesses } from "./database.js"
import { Business } from "./Business.js"

//
const contentTarget = document.querySelector(".supplies")

// create a function that displays the business objects by name in a list form
const BusinessList = () => {
    const businessArray = getBusinesses()
    contentTarget.innerHTML = "<h1>Active Businesses</h1>"

    // using for each method to display each business name object in the business array
    businessArray.forEach(
        (businessName) => {
            contentTarget.innerHTML += Business(businessName)
        }
    );
}