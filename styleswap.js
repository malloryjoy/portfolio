function swapStyleSheet(sheet) {
        document.getElementById("stylin").setAttribute("href", sheet);  
    }

function initate() {
        var style1 = document.getElementById("defaultsheet");
        style1.onclick = swapStyleSheet("./css/bootstrap_styles.css");
        var style2 = document.getElementById("ellesheet");
        style2.onclick = swapStyleSheet("./css/elle.css");
        var style3 = document.getElementById("fidisheet");
        style3.onclick = swapStyleSheet("./css/FiDi.css");
        var style4 = document.getElementById("millissheet");
        style4.onclick = swapStyleSheet("./css/millis.css");

        
        
        
    }
