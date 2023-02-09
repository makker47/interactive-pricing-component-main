// I did two separate querySelector "value", becouse doesn't work for me querySelectorAll for some reason.

document.querySelector(".slider").addEventListener("input", function() {
  let data = document.querySelector(".slider").value;
  let slider = document.querySelector(".slider");
  let color = "linear-gradient(90deg, var(--Soft-Cyan)" + data + "%, var(--Light-Grayish-Blue)" + data + "%)";
  let cost = document.querySelector(".value");
  let costmobile = document.querySelector(".value1");
  

  cost.innerHTML = data;
  costmobile.innerHTML = data;

  slider.style.background = color;
  
 console.log(slider);
});


let x = document.querySelector(".checkbox");

x.addEventListener("click", function() {
  let x = document.querySelector(".checkbox");
  let annualdesktop = document.getElementById("annual");
  let annual = document.querySelector("#annual1");
  let cost = document.querySelector(".value");
  let costmobile = document.querySelector(".value1");
  let data = document.querySelector(".slider").value;


  if (x.checked == true){
    annual.innerHTML = "Year";
    
    costmobile.innerHTML = data * 25 / 100;
  } else  {
    annual.innerHTML = "Month";
  }
  
  if (x.checked == true){
    annualdesktop.innerHTML = "Year";
    cost.innerHTML = data * 25 / 100;
    
  } else {
    annualdesktop.innerHTML = "Month";
  }
   
  
});