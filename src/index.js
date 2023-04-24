const navv = document.getElementById("nav");
console.log(document.getElementById("body"));
console.log(document.getElementById("body").scrollTop);

// const element = document.getElementById("body");
// let y = element.scrollTop;

// function myFunction() {
//   const element = document.getElementById("nav");
//   // document.getElementById ("demo").innerHTML = "Horizontally: " + x.toFixed() + "<br>Vertically: " + y.toFixed();
//   console.log(y)
//


// window.addEventListener('scroll', function() {
//   document.getElementById('showScroll').innerHTML = window.pageYOffset + 'px';
//   console.log();
// });



function scrollFunction() {
  const element = document.getElementById("body");
  // let y = element.scrollTop;
  let y = window.pageYOffset;
  // console.log(y.toFixed())
  // if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
  if (y > 50) {
    navv.classList.add("bg-[#222]");
    // console.log("yes");
  } else {
    navv.classList.remove("bg-[#222]");
    // console.log('yes');
  }
}
