
const navv = document.getElementsByTagName('nav')
console.log(document.getElementById('body'));
console.log(document.getElementById('body').scrollTop);


function myFunction() {
  const element = document.getElementById("body");
  let x = element.scrollLeft;
  // document.getElementById ("demo").innerHTML = "Horizontally: " + x.toFixed() + "<br>Vertically: " + y.toFixed();
  console.log(x)
}

// function scrollFunction() {
//   if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
//       // navv.classList.add('bg-[#222]')
//       console.log('yes');
//   } else {
//       // navv.classList.remove('bg-[#222]');
//       console.log('yes');
//   }
// };


