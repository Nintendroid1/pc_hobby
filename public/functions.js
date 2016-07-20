function bgPicker() 
{
    var bgNum = Math.floor(Math.random() * 5) + 1;
    var b = document.getElementById("demo");
    b.innerHTML = bgNum;
    document.body.style.backgroundImage = "url('Pictures/bg"+bgNum+".jpg')";
}