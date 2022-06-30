
// window.addEventListener('scroll', progressAll);

// function progressAll() {
//   const triggerProgress = window.innerHeight / 2;
//   const progressTop = document.getElementById("container---2");
//   const progressStart = progressTop.getBoundingClientRect().top;
//   console.log(progressStart);
//   if (progressStart < triggerProgress) {

// const progress = document.getElementById("#progressDoneHtml");
// progress.style.width = progress.getAttribute("data-done");

// const css = document.getElementById("#progressDoneCss");
// css.style.width = css.getAttribute("data-done");

// const js= document.getElementById("#progressDoneJavascript");
// js.style.width = js.getAttribute("data-done");

// const reactjs = document.getElementById("#reactjsDoneReactjs");
// reactjs.style.width = reactjs.getAttribute("data-done");
//   }
// }


var progress = document.getElementById('progressDoneHtml');
progress.style.width = progress.getAttribute('data-done')

var progress = document.getElementById('progressDoneCss');
progress.style.width = progress.getAttribute('data-done')

var progress = document.getElementById('progressDoneJavascript');
progress.style.width = progress.getAttribute('data-done')

var progress = document.getElementById('progressDoneReactjs');
progress.style.width = progress.getAttribute('data-done')