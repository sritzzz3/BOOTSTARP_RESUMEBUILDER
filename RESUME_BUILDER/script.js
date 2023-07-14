var experiencecount = 1;
var educationcount = 1;
const skillSet = new Set();
// SET --- if u add dupilacte's t will copy one only ex:- python python phthon c++ it will print python c++
var fileName = " ";


function previewImage(event) {
   /**3-->to know that funtion has been trigerred */
   console.log("previewImage(event) <<");
   console.log(typeof event);
   var imagepreview = document.getElementById("image-preview");
   /*to get elemts by id-->getelementbyid */
   if (event.target.files[0]) {

      /* if we have the 1st file if block wil trigger */
      /* html-no source(Scr)  adding the source(src) in 11 line */
      imagepreview.src = URL.createObjectURL(event.target.files[0]);
      imagepreview.style.display = "block";
      imagepreview.onload = function () {
         URL.revokeObjectURL(imagepreview.src); // free memeory 
      }
   }
   console.log("previewImage(event)<<");

}

// adding a skill 
// empty-->alert 
// repeated-->alert 
// add skills
function addSkill() {
   console.log("addSkill()<<");
   if (document.querySelector("#skill-input-section input").value.length == 0) {
      alert("Please Enter a Skill");
   } else {
      var skillValue = document.querySelector("#skill-input-section input").value;
      if (skillSet.has(skillValue)) {
         alert("Skill already exists");
         return;
      }
      skillSet.add(skillValue);
      document.querySelector("#skills").innerHTML += `
           <div class="skill mt-1">
               <span id="skillname">
                   ${skillValue}
               </span>
               <button class="btn btn-outline-danger delete">
               <i class="fa-solid fa-trash-can"></i>
               </button>
           </div>
       `;
      // += --> add to the exsisting one 
      // delete button 
      document.querySelector("#skill-input").value = "";
      var current_task = document.querySelectorAll(".delete");
      console.log(typeof current_task);
      for (var i = 0; i < current_task.length; i++) {
         current_task[i].onclick = function () {
            this.parentNode.remove();
         };
      }
   }
   console.log("addSkill()>>");
}


// WORK EXPERIENCE
function addWorkExperience() {

   console.log("addWorkExperience() <<");



   let newNode = document.createElement("textarea");

   newNode.classList.add("form-control", "we-filed", "mt-1");
   newNode.setAttribute("rows", 3);
   newNode.setAttribute("id", "experience-" + ++experiencecount);
   newNode.setAttribute("placeholder", "enter your experience(work/project)" + experiencecount);


   let experiencediv = document.getElementById("experience-div");
   let experienceAddbuttonDiv = document.getElementById("we-btns-div");
   let we_del_btn = document.getElementById("we-del-btn");

   experiencediv.insertBefore(newNode, experienceAddbuttonDiv)
   console.log("addWorkExperience() >>");

}


// delete button of expeirence
function removeWorkExperience() {
   console.log("removeWorkExperience() <<" + experiencecount);
   let latestExperience = document.getElementById("experience-" + experiencecount);
   latestExperience.remove();
   --experiencecount

   console.log("removeWorkExperience() >>");
}





// EDUCATION 
function addEducation() {
   console.log("addEducation() <<");

   let newNode = document.createElement("textarea");

   newNode.classList.add("form-control", "ed-filed", "mt-1");
   newNode.setAttribute("rows", 3);
   newNode.setAttribute("id", "education-" + ++educationcount);
   newNode.setAttribute("placeholder", "enter your qualificaion" + educationcount);


   let educationdiv = document.getElementById("education-div");
   let educationAddbuttonDiv = document.getElementById("ed-btns-div");
   let ed_del_btn = document.getElementById("ed-del-btn");

   educationdiv.insertBefore(newNode, educationAddbuttonDiv)

   console.log("addEducation() >>");

}



// remove education
function removeEducation() {

   console.log("removeEducation()" << + educationcount);
   let latestEducation = document.getElementById("education-" + educationcount);
   latestEducation.remove();
   --educationcount

   console.log("removeEducation() >>");

}

// Reload
// location-reset the whole page
// window only the form 
function StartOver() {
   console.log("StartOver() <<");
   window.location.reload();
   console.log("StartOver() >> ");
}

// RESUME TEPLATEE

function generateResume() {
   console.log("generateResume() <<");
   let fullName = document.getElementById("full-name").value;
   let fullNameTemplate = document.getElementById("full-name-template");
   fullNameTemplate.innerHTML = fullName;

   let dob = document.getElementById("dob").value;
   let dobTemplate = document.getElementById("dob-template");
   dobTemplate.innerHTML = dob;

   let phone = document.getElementById("phone").value;
   let phoneTemplate = document.getElementById("phone-template");
   phoneTemplate.innerHTML = phone;

   let email = document.getElementById("email").value;
   let emailTemplate = document.getElementById("email-template");
   emailTemplate.innerHTML = email;

   let address = document.getElementById("address").value;
   let addressTemplate = document.getElementById("address-template");
   addressTemplate.innerHTML = address;

   let linkedin = document.getElementById("linkedin").value;
   let linkedinTemplate = document.getElementById("linkedin-template");
   linkedinTemplate.innerHTML = linkedin;

   let github = document.getElementById("github").value;
   let githubTemplate = document.getElementById("github-template");
   githubTemplate.innerHTML = github;

   let instagram = document.getElementById("instagram").value;
   let instagramTemplate = document.getElementById("instagram-template");
   instagramTemplate.innerHTML = instagram;

   //  Objective
   let objective = document.getElementById("objective").value;
   let objectiveTemplate = document.getElementById("objective-template");
   objectiveTemplate.innerHTML = objective;


   //  skills template
   let skillsetstring = "";
   for (let skill of skillSet) {
      skillsetstring += `<span class="badge rounded-pill bg-secondary skill-pill">${skill}
  </span>`;
   }
   let skillsTemplate = document.getElementById("skill-template-div");
   skillsTemplate.innerHTML = skillsetstring;


   // WORK EXPERIENCE 
   let experiences = document.getElementsByClassName("we-field");
   let experiencesListString = "";
   for (let experience of experiences) {
      experiencesListString += `<li>${experience.value}</li>`;
   }

   let expeirencesTemplate = document.getElementById("we-template");
   expeirencesTemplate.innerHTML = experiencesListString;


   //   Academic Qualification
   let educations = document.getElementsByClassName("ed-field");
   let educationsListString = "";
   for (let education of educations) {
      educationsListString += `<li>${education.value}</li>`;
   }
   let educationTemplate = document.getElementById("ed-template");
   educationTemplate.innerHTML = educationsListString;

   //   profile

   let file = document.getElementById("profile-img").files[0];
   console.log(file);
   if (file === undefined) {
      console.log("No file selected");
   } else {
      let reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = function () {
         //setting when data loading is complete
         document.getElementById("profile-img-template").src = reader.result;
      };
   }


   // UN-HIDE

   document.getElementById("resume-template").style.display = "block";
   document.getElementById("save-btn").style.display = "block";

   //   HIDING THE RESUME TEMPLATE
   document.getElementById("resume-form").style.display = "none";

   
  

  console.log("generateResume() >>");
}

function printResume(areaID) {
   console.log("printResume() <<");
   var printContent = document.getElementById(areaID).innerHTML;
   var originalContent = document.body.innerHTML;
   document.body.innerHTML = printContent;
   window.print();
   document.body.innerHTML = originalContent;
   console.log("printResume() >>");
 }



 function generatePDFUsingHtml2pdfAndHtmlCanvas() {
   // Choose the element id which you want to export.
   var element = document.getElementById("resume-template");
   element.style.width = "700px";
   element.style.height = "900px";
   var opt = {
     margin: 0.5,
     filename: fileName.toLowerCase() + new Date().toLocaleDateString() + ".pdf",
     image: { type: "jpeg", quality: 1 },
     html2canvas: { scale: 1 },
     jsPDF: {
       unit: "in",
       format: "letter",
       orientation: "portrait",
       precision: "12",
     },
   };
   // choose the element and pass it to html2pdf() function and call the save() on it to save as pdf.
   html2pdf().set(opt).from(element).save();
 }
 
 function generatePDFUsingHtml2pdf() {
   // Choose the element that your content will be rendered to.
   const element = document.getElementById("resume-template");
   // Choose the element and save the PDF for your user.
   html2pdf().from(element).save();
   // button.addEventListener("click", generatePDF);
 }
 
 function generatePDF() {
   // using Jspdf;
   window.jsPDF = window.jspdf.jsPDF;
   var doc = new jsPDF();
 
   // Source HTMLElement or a string containing HTML.
   // var elementHTML = document.querySelector("#");
   const elementHTML = document.getElementById("resume-template");
 
   doc.html(elementHTML, {
     callback: function (doc) {
       // Save the PDF
       doc.save(
         fileName.toLowerCase() + "_" + new Date().toLocaleDateString() + ".pdf"
       );
     },
     margin: [10, 10, 10, 10],
     autoPaging: "text",
     x: 0,
     y: 0,
     width: 190, //target width in the PDF document
     windowWidth: 675, //window width in CSS pixels
   });
 }