// import function that will display html for business object names and info
import { Business } from "./Business.js"

//
const mainContainer = document.querySelector("#container")

//
const applicationHTML = `
<h1>Active Businesses</h1>

<article class="businesses">
   
    ${Businesses()}
</article>
`
// 
mainContainer.innerHTML = applicationHTML
