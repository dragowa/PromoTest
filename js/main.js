
var module = (function() {

    var randomString = function (length) {
        
        var text = "";
    
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        
        for(var i = 0; i < length; i++) {
        
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        
        }
        
        return text;

    }
  
    var random = randomString(15);

    var elem = document.getElementById("get-info").value = random;

    console.log(elem);

    localStorage.setItem("promoCode", elem);

    var info = document.getElementById("get-info");

    info.innerHTML = elem;

    document.getElementById("btn").style.display = 'none';

    var maxCount = function () {
        count--;
        if (count <= 0) {
            document.getElementById('count').innerHTML = count;
            alert("No promo code more");
        } else {
            document.getElementById('count').innerHTML = count;
 
        }
    }

    maxCount();

    return;
  
});

window.onload = function () {
    if (localStorage.getItem("promoCode")) {
        document.getElementById("btn").style.display = 'none';
        var sObj = JSON.stringify(localStorage.promoCode)
        document.getElementById("get-info").innerHTML = sObj;
        count--;
        document.getElementById('count').innerHTML = count;
    } else {
        console.log("LocalStorage is empty");
    }

    var check = function () {
        if (count <= 0) {
            alert("No promo code more");
        } else {
            return;
        }
    };

    check();
};

var count = 3; 

document.getElementById('count').innerHTML = count;
