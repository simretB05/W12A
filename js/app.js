

//selected html tag with querySelector
let get_main = document.querySelector( `.main-section` )

//created a function that takes details for parameter and 
function callAxios(details){
    
// created a  successFunction with response argument  and used a loop to
//  loop through the response data and display the deta dinamicaly 
// in HTML this function gets the response when response status is ok
    function successFunction( response ){
        
        for ( let i = 0; i < response[`data`][`categories`].length; i++ ){
            get_main.insertAdjacentHTML( `afterbegin`, `
            <div >
                <img src="${ response[`data`][`categories`][i][`strCategoryThumb`] }">
                <h3>${ response[`data`][`categories`][i][`strCategory`] }</h3>
                <p>${ response[`data`][`categories`][i][`strCategoryDescription`] }</p>
            </div>` )
            // .slice(0, 7)
        }
    
    
    }
    // create faliure  function to catch error if 
    // response status is not ok and display a message for users to try again
        function failureFunction(error) {
            get_main.insertAdjacentHTML(`beforebegin`,`<h3>try again</h3>`)
    }
        
    // used axios to request data from a given url"data sorce" 
    // and then use the success and the failure functions to display responce or faliure message to customers
        axios.request({
        url:`https://www.themealdb.com/api/json/v1/1/categories.php`
        } ).then( successFunction ).catch( failureFunction )
}
    // used event -listener to listen to a click on a button which 
    // will then be used to add a function that js calls 
let call = document.querySelector( `#call` )
    
call.addEventListener(`click`, callAxios)
