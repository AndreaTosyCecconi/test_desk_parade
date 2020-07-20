let data, year, month, day, hour, minute, second;
let dateText;

function onLoad(e) {
  setup();
};

function onUnload(e) {
  window.removeEventListener('load', onLoad);
  window.removeEventListener('unload', onUnload);
  delete e['returnValue'];
};




function setup() {
  console.log("In setup");
  data = new Date();
  year = data.getFullYear();
  month = data.getMonth()+1;
  day = data.getDate();
  hour = data.getHours();
  minute = data.getMinutes();
  second = data.getSeconds();

  checkLayout();

  triggerOnDate(19, 14, false, "22_1");
  triggerOnDate(19, 14, false, "22_2");
  triggerOnDate(19, 14, false, "22_3");
  triggerOnDate(19, 14, false, "22_4");
  triggerOnDate(19, 14, false, "22_5");
  triggerOnDate(19, 14, false, "22_6");
  triggerOnDate(19, 14, false, "22_7");
  triggerOnDate(19, 14, false, "22_8");
  triggerOnDate(19, 14, false, "22_9");
  triggerOnDate(19, 14, false, "22_10");
  triggerOnDate(19, 14, false, "22_11");

  triggerOnDate(19, 14, false, "23_1");
  triggerOnDate(19, 14, false, "23_2");
  triggerOnDate(19, 14, false, "23_3");
  triggerOnDate(19, 14, false, "23_4");
  triggerOnDate(19, 14, false, "23_5");
  triggerOnDate(19, 14, false, "23_6");
  triggerOnDate(19, 14, false, "23_7");
  triggerOnDate(19, 14, false, "23_8");
  triggerOnDate(19, 14, false, "23_9");
  triggerOnDate(19, 14, false, "23_10");
  triggerOnDate(19, 14, false, "23_11");

  triggerOnDate(19, 14, false, "24_1");
  triggerOnDate(19, 14, false, "24_2");
  triggerOnDate(19, 14, false, "24_3");
  triggerOnDate(19, 14, false, "24_4");
  triggerOnDate(19, 14, false, "24_5");
  triggerOnDate(19, 14, false, "24_6");
  triggerOnDate(19, 14, false, "24_7");
  triggerOnDate(19, 14, false, "24_8");
  triggerOnDate(19, 14, false, "24_9");
  triggerOnDate(19, 14, false, "24_10");
  triggerOnDate(19, 14, false, "24_11");


  }

function triggerOnDate(day_, hour_, halfAnHour, id){
  if (day > day_) {
    console.log("Alert on "+id+": oggi è il "+day+", il contenuto è disponibile dal "+day_);
    document.getElementById(id).classList.toggle("unavailable");
  }else if (day == day_ && hour >= hour_) {
    if (halfAnHour) {
      if (hour > hour_) {
        console.log("Alert on "+id+": sono le "+hour+", il contenuto è disponibile dalle ore "+hour_);
        document.getElementById(id).classList.toggle("unavailable");
      }else if (hour == hour_ && minute >= 30) {
        console.log("Alert on "+id+": sono le "+hour+":"+minute+", il contenuto è disponibile dalle ore "+hour_+":30");
        document.getElementById(id).classList.toggle("unavailable");
      }
    }else{
      console.log("Alert on "+id+": sono le "+hour+", il contenuto è disponibile dalle ore "+hour_);
      document.getElementById(id).classList.toggle("unavailable");
    }

  }



}



function checkLayout(){
  if (window.innerWidth > 600) {
    // DESKTOP
    document.getElementsByClassName("livemain_22")[0].style.display = "block";
    document.getElementsByClassName("livemain_23")[0].style.display = "block";
    document.getElementsByClassName("livemain_24")[0].style.display = "block";
    document.getElementById("day24").style.color = "black";
    document.getElementById("day24").innerHTML = "24 luglio";
    document.getElementById("day22").style.color = "black";
    document.getElementById("day22").innerHTML = "22 luglio";
    document.getElementById("day23").style.color = "black";
    document.getElementById("day23").innerHTML = "23 luglio";
  } else {
    // MOBILE
    open23();
    open24();
    open22();
  }
}












