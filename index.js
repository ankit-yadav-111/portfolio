var tablinks = document.getElementsByClassName("tab-link");
var tabcontents=document.getElementsByClassName("tab-content");
function opentab(tabname){
  for(tablink of tablinks){
    tablink.classList.remove("active-link");
  }

  for(tabcontent of tabcontents){
    tabcontent.classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabname).classList.add("active-tab");
}
document.getElementById("open").onclick=function(){sidemenu.style.right="0"};
document.getElementById("close").onclick=function(){  sidemenu.style.right="-200px"};
var sidemeu =document.getElementById("sidemenu");

  const scriptURL = 'https://script.google.com/macros/s/AKfycbwpB3i2EwBFGDNDvE2CLHa-El2fxrRwSdx7MP_DkXrvQ25Pos9azhnrouMoW9p_rWz-/exec'
  const form = document.forms['submit-to-google-sheet']
  const msg=document.getElementById("msg")
  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response =>{
        msg.innerHTML="Message sent successfully"
        setTimeout(function(){
          msg.innerHTML=""
        },5000)
        form.reset()
      })
      .catch(error => console.error('Error!', error.message))
  })

// function openmenu(){
//   sidemenu.style.right="0";
// }
// function closemenu(){
//   sidemenu.style.right="-200px";
// }
