var scheduleTimes = ["8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm"]
var currentDate = $('#current-date');
var currentTime = $('#current-time');
var currentHour = moment();
var hour = currentHour.format("H");
var amPm = moment();
var amOrpm = amPm.format("a");


for (var i = 0; i < scheduleTimes.length; i++){
    this["txt" + scheduleTimes[i]] = $("#txt" + scheduleTimes[i]);
    this["btn" + scheduleTimes[i]] = $("#btn" + scheduleTimes[i]);
}

renderTextarea();

function renderTextarea(){
    for (var i = 0; i < scheduleTimes.length; i++) {
        this["txt" + scheduleTimes[i] + "stored"] = localStorage.getItem(scheduleTimes[i]);
        this["txt" + scheduleTimes[i]].val(this["txt" + scheduleTimes[i] + "stored"]);
    }
}

scheduleTimes.forEach(createButtonClick);

function createButtonClick(times, index){
    var btns = this["btn" + times];
    var txt = this["txt" + times];

    btns.click(function(event){
        event.preventDefault();
        localStorage.setItem(times, txt.val());
    })
}

