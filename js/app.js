/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

// this method is the same instructions we took in the wibinar  


/**
 * Define Global Variables
 * 
*/
//selecting sections with elements
let allpagesections =document.querySelectorAll("section");

//selecting nav-list with id 
let nav_ul=document.querySelector("#navbar__list");

//creating a fragment to contain the new created elements 
let Docfragment=document.createDocumentFragment();



/**
 * End Global Variables
*/


 


// build the li nav
allpagesections.forEach((element) => {
  // selecting the data - nav - text from all sections to know how many sections
  let data_nav=element.getAttribute("data-nav");
   
  //creating li with the same numbers of sections
  let newliElement=document.createElement("li");
  //creating a text for data nav information
  let liText = document.createTextNode(data_nav)
//adding the the text to the li
  newliElement.appendChild(liText);
// adding the li to the fragment
  Docfragment.appendChild(newliElement);
// making smoth scroll to all sections
  newliElement.addEventListener('click',function(){
      element.scrollIntoView({behavior:'smooth'});

  })
})
 

  // adding all li to the fragment
  nav_ul.appendChild( Docfragment)
  //selecting all li  from the page
  let allLi =document.querySelectorAll("li");

// Add class 'active' to section when near top of viewport

window.onscroll =  () => {

    allpagesections.forEach((theSection , x) => {
        //  using getBoundingRect() to get the position and boundries 
        domRect  = theSection.getBoundingClientRect();
        // check the bonderies, 0  to check the start of the section and 300 to check the end of it and not to make two sections has the same class.
        if (domRect.top >  0 && domRect.top <  300 ) {
            // add the active class to the active section
            theSection.classList.add("your-active-class");

            //select the data nav value from the active section
            let ActiveSection = theSection.getAttribute("data-nav");
             
            //select the text value from the li navbar to compare its value with the active sections
            
                let activeLi = allLi[x].innerText
             
            //comparing which the data-nav with the text
                if( ActiveSection == activeLi){
            //adding active class to li  link       
                    allLi[x].classList.add("active-li");
                
                } 
           // if we moved to another section, the pervious section class and pervious li class will removed
        } else {

            // check if the active class in not active section
            if( theSection.classList.contains("your-active-class")){
            // remove the class
            theSection.classList.remove("your-active-class");
                //remove the class from the li link 
                allLi[x].classList.remove("active-li");
            }

            
        }
    })
};
 



 



 

 