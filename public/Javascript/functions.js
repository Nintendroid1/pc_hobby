function bgPicker() 
{
    var bgNum = Math.floor(Math.random() * 5) + 1;
    document.body.style.backgroundImage = "url('Pictures/bg"+bgNum+".jpg')";
}