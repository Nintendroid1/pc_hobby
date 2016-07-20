function myFunction(min, max) 
      {
        //alert("Page is loaded");
        //console.log("Min Value: " + min + " Max Value: " + max);
        var bgNum = Math.floor(Math.random() * 5) + 1;
        var b = document.getElementById("demo");
        b.innerHTML = bgNum;
        return min + max;
      }
      
      function myDelegate(fn){
        console.log(fn);
        var a = 1;
      }