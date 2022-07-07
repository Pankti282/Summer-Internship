




window.addEventListener("scroll", progressAll);

function progressAll()
 {
  var triggerProgress = (window.innerHeight / 2);
  console.log(triggerProgress);
 var progressTop = document.getElementById("about");

  var progressStart = progressTop.getBoundingClientRect().top;
  console.log(progressStart);
  if (progressStart < triggerProgress)
   {
    // html

    var progress = document.getElementById("progressDoneHtml");
    progress.style.width = progress.getAttribute("data-done");
    progress.style.opacity = 1;

    // Css

    var progressCss = document.getElementById("progressDoneCss");
    progressCss.style.width = progressCss.getAttribute("data-done");
    progressCss.style.opacity = 1;

    

    // Javascript

    var progressJavascript = document.getElementById("progressDonejs");
    progressJavascript.style.width = progressJavascript.getAttribute("data-done");
    progressJavascript.style.opacity = 1;

    // REACTJS

    var progressReactJS = document.getElementById("progressDoneReactjs");
    progressReactJS.style.width = progressReactJS.getAttribute("data-done");
    progressReactJS.style.opacity = 1;
  }
}
//  window.addEventListener("scroll", progressAll);

// function progressAll() {
//   var height = (window.innerHeight / 8) *4;
//   var range = document.getElementById(".container-2");
//   var prog = range.getBoundingClientRect().top;

//   if (prog < height) {

// const progress = document.getElementById("progressDoneHtml");
// progress.style.width = progress.getAttribute('data-done');
// progress.style.opacity=1;

// var progress = document.getElementById("progressDoneCss");
// progress.style.width = progress.getAttribute('data-done');

// var progress = document.getElementById("progressDonejs");
// progress.style.width = progress.getAttribute('data-done');

// var progress = document.getElementById("progressDoneReactjs");
// progress.style.width = progress.getAttribute('data-done');
//   }
// }


const number=document.querySelectorAll(".number")
const speed=100;
number.forEach(element =>{
    incNumber(element)
});
function incNumber(elem){
    let text =+elem.innerText;
    const value=+elem.getAttribute("data-target");
    const inc=value/speed;
    if(text<value){
        elem.innerText=inc+text;
        setTimeout(() =>{
            incNumber(elem)
        },20);
    }else{
        elem.innerText=value;
    }
}

// const Numbers =document.querySelectorAll(".number");
// Numbers.forEach(function(number){

//     number.innerText ="20";
//     updateNumber();

//     function updateNumber() {
//         const target= +number.getAttribute("data-tareget");
//         const c = +number.innerText;
//         const increment =target/1000;
//         if(c<target){
//             number.innerText='${Math.ceil(c + increment)}';
//             setTimeout(updateNumber,10);
//         }else{
//             number.innerText = target;
//         }
//         }
    
// });