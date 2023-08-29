document.getElementById(`mood`).addEventListener(`click`, function(){
  if(document.documentElement.classList.contains(`dark`)){
    document.documentElement.classList.remove(`dark`);
    document.getElementById(`mood`).innerHTML = `<i class="fa-solid fa-moon"></i>`
  }else{
    document.documentElement.classList.add(`dark`);
    document.getElementById(`mood`).innerHTML = `<i class="fa-solid fa-sun"></i>`
  }
})



function show(){
  var date = new Date();
  var h = date.getHours(); // 0 - 23
  var m = date.getMinutes(); // 0 - 59
  var s = date.getSeconds(); // 0 - 59
  var session = "AM";
  
  if(h == 0){
      h = 12;
  }

  if(h > 12){
      h = h - 12;
      session = "PM";
  }  
  h = (h < 10) ? "0" + h : h;
  m = (m < 10) ? "0" + m : m;
  s = (s < 10) ? "0" + s : s;

  var time = h + ":" + m + ":" + s + " " + session;
  document.getElementById("MyClock").innerText = time;
  document.getElementById("MyClock").textContent = time;
  setTimeout(show, 1000);  
}
show();



setInterval(() => {
	d = new Date();
	hr = d.getHours();
	min = d.getMinutes();
	sec = d.getSeconds();
	hr_rotation = 30 * hr + min / 2;
	min_rotation = 6 * min;
	sec_rotation = 6 * sec;

	hour.style.transform = `rotate(${hr_rotation}deg)`;
	minute.style.transform = `rotate(${min_rotation}deg)`;
	second.style.transform = `rotate(${sec_rotation}deg)`;
}, 1000);
