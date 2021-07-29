  /***********************************
      This script applies the variant immediately and stores the changes so it can be 
      reverted back to control
      ***********************************/

      //Target the element that needs changing and store the change
      const element = document.querySelector("h1 .dd-c-headline__content");
      const elementOriginal = element.innerHTML;

      const caseStudyBlock = document.getElementsByClassName("dd-c-layout--bg-solitude")[0]

      //Change the text of the masthead text
      element.innerHTML =
        "Our mission is simple: to unleash our clients’ recurring revenue growth";
      const elementTest = element.innerHTML;

      //Add the anchor that is to go under the masthead 
      const anchor = document.createElement("a");
      const linktext = document.createTextNode("Who are we?");
      anchor.appendChild(linktext);
      anchor.title = "Who we are";
      anchor.href = "https://daydot.agency/who-we-are";
      anchor.style.fontSize = "medium";
      element.append(anchor);

      //Create test buttons element
      let testButtons = document.createElement("DIV"); // Create a <button> element
      testButtons.innerHTML = `<Button id='control' class='test_button'>CONTROL</Button>
         <Button id='variation' class='test_button'>VARIATION</Button>`; // Insert text
      
      //Append test button wrapper element
      document.body.appendChild(testButtons);

      //Create temporary CSS
      let style = document.createElement("style");
      style.type = "text/css";
      style.innerHTML = `.testButtons { 
         display: flex;
         align-items: center;
         justify-content: center;
         position: fixed;
         bottom: 0;
         width:100%
      }
      .active {background-color:#4F97D1}
      
      .test_button {
      border-radius: 5px;
      color: #1E3356;
      font-weight: bold;
      }
      /*Css for psuedo lightbox setup*/
      body {
        font-family: Verdana, sans-serif;
        margin: 0;
        }

      * {
        box-sizing: border-box;
        }

      .row > .column {
        padding: 0 8px;
      }

      .row:after {
        content: "";
        display: table;
        clear: both;
      }

      .column {
        float: left;
        width: 25%;
      }

/* The Modal (background) */
.modal {
  display: none;
  position: fixed;
  z-index: 1;
  padding-top: 100px;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: black;
}

/* Modal Content */
.modal-content {
  position: relative;
  background-color: #fefefe;
  margin: auto;
  padding: 0;
  width: 90%;
  max-width: 1200px;
}

/* The Close Button */
.close {
  color: white;
  position: absolute;
  top: 10px;
  right: 25px;
  font-size: 35px;
  font-weight: bold;
}

.close:hover,
.close:focus {
  color: #999;
  text-decoration: none;
  cursor: pointer;
}

.mySlides {
  display: none;
}

.cursor {
  cursor: pointer;
}

/* Next & previous buttons */
.prev,
.next {
  cursor: pointer;
  position: absolute;
  top: 50%;
  width: auto;
  padding: 16px;
  margin-top: -50px;
  color: white;
  font-weight: bold;
  font-size: 20px;
  transition: 0.6s ease;
  border-radius: 0 3px 3px 0;
  user-select: none;
  -webkit-user-select: none;
}

/* Position the "next button" to the right */
.next {
  right: 0;
  border-radius: 3px 0 0 3px;
}

/* On hover, add a black background color with a little bit see-through */
.prev:hover,
.next:hover {
  background-color: rgba(0, 0, 0, 0.8);
}

/* Number text (1/3 etc) */
.numbertext {
  color: #f2f2f2;
  font-size: 12px;
  padding: 8px 12px;
  position: absolute;
  top: 0;
}

img {
  margin-bottom: -4px;
}

.caption-container {
  text-align: center;
  background-color: black;
  padding: 2px 16px;
  color: white;
}

.demo {
  opacity: 0.6;
}

.active,
.demo:hover {
  opacity: 1;
}

img.hover-shadow {
  transition: 0.3s;
}

.hover-shadow:hover {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

.pad-header { 
         display: flex;
         align-items: center;
         justify-content: center;
         width:100%;
         padding:20px;
      }

      `;
      //Append CSS to whole document
      document.getElementsByTagName("head")[0].appendChild(style);

      //Add class
      testButtons.className = "testButtons";

      //Add listeners to buttons
      const control_button = document.getElementById("control");
      control_button.addEventListener("click", function () {
        //Use stored values to restore control
        element.innerHTML = elementOriginal;
        caseStudyBlock.style.display = "block";
        caseStudiesWrapperTest.style.display = "none";

        //Change button appearance to active
        control_button.classList.add("active");
        variation_button.classList.remove("active");
      });

      const variation_button = document.getElementById("variation");
      //VS
      variation_button.addEventListener("click", function () {
        //Use stored values to restore variation
        element.innerHTML = elementTest;
        element.append(anchor);
        caseStudyBlock.style.display = "none";
        caseStudiesWrapperTest.style.display = "block";

        //Change button appearance to active
        variation_button.classList.add("active");
        control_button.classList.remove("active");
      });

      caseStudyBlock.style.display = "none";

      // Add the lightbox set for the case studies wrapper element
      let caseStudiesWrapperTest = document.createElement("DIV"); // Create a <button> element
      caseStudiesWrapperTest.innerHTML = `
      <div class='pad-header'><H2>Case Studies</H2></div>
      <div class="column">
    <img src="https://daydot.agency/assets/img/uploads/cs-05-masthead.jpg" style="width:100%" onclick="openModal();currentSlide(1)" class="hover-shadow cursor">
  </div>
  <div class="column">
    <img src="https://daydot.agency/assets/img/uploads/cs-06-masthead.jpg" style="width:100%" onclick="openModal();currentSlide(2)" class="hover-shadow cursor">
  </div>
  <div class="column">
    <img src="https://daydot.agency/assets/img/uploads/cs-12-masthead.jpg" style="width:100%" onclick="openModal();currentSlide(3)" class="hover-shadow cursor">
  </div>
  <div class="column">
    <img src="https://daydot.agency/assets/img/uploads/cs-13-masthead.jpg" style="width:100%" onclick="openModal();currentSlide(4)" class="hover-shadow cursor">
  </div>
</div>

<div id="myModal" class="modal">
  <span class="close cursor" onclick="closeModal()">&times;</span>
  <div class="modal-content">

    <div class="mySlides">
      <div class="numbertext">1 / 4</div>
      <img src="https://daydot.agency/assets/img/uploads/cs-05-masthead.jpg" style="width:100%">
    </div>

    <div class="mySlides">
      <div class="numbertext">2 / 4</div>
      <img src="https://daydot.agency/assets/img/uploads/cs-06-masthead.jpg" style="width:100%">
    </div>

    <div class="mySlides">
      <div class="numbertext">3 / 4</div>
      <img src="https://daydot.agency/assets/img/uploads/cs-12-masthead.jpg" style="width:100%">
    </div>
    
    <div class="mySlides">
      <div class="numbertext">4 / 4</div>
      <img src="https://daydot.agency/assets/img/uploads/cs-13-masthead.jpg" style="width:100%">
    </div>
    
    <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
    <a class="next" onclick="plusSlides(1)">&#10095;</a>

    <div class="caption-container">
      <p id="caption"></p>
    </div>


    <div class="column">
      <img class="demo cursor" src="https://daydot.agency/assets/img/uploads/cs-05-masthead.jpg" style="width:100%" onclick="currentSlide(1)" alt="Nature and sunrise">
    </div>
    <div class="column">
      <img class="demo cursor" src="https://daydot.agency/assets/img/uploads/cs-06-masthead.jpg" style="width:100%" onclick="currentSlide(2)" alt="Snow">
    </div>
    <div class="column">
      <img class="demo cursor" src="https://daydot.agency/assets/img/uploads/cs-12-masthead.jpg" style="width:100%" onclick="currentSlide(3)" alt="Mountains and fjords">
    </div>
    <div class="column">
      <img class="demo cursor" src="https://daydot.agency/assets/img/uploads/cs-13-masthead.jpg" style="width:100%" onclick="currentSlide(4)" alt="Northern Lights">
    </div>
  </div>
`;

//Add the new layout-Note this is draft, go back to customer to clarify
caseStudiesWrapperTest.classList.add("row");

const productStudy = document.getElementsByClassName("dd-c-layout--bg-white")[3]

productStudy.appendChild(caseStudiesWrapperTest);
function openModal() {
  document.getElementById("myModal").style.display = "block";
}

function closeModal() {
  document.getElementById("myModal").style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  captionText.innerHTML = dots[slideIndex - 1].alt;
}