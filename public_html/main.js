var idioma = 1;
function getData(url, functionName, divName = "") {
    var conn = new XMLHttpRequest();
    conn.onreadystatechange = function () {
        if (conn.status === 200 && conn.readyState === 4) {
            if ((conn.responseText === "" || conn.responseText === null) && divName !== "") {
                document.getElementById(divName).innerHTML = "No s'ha trobat l'arxiu " + url;
            } else {
                window[functionName](conn.responseText, divName);
            }
        } else {
            if (divName === "") {

            } else {
                //document.getElementById(divName).innerHTML = "No s'ha trobat el document demanat.";
            }
        }
    };
    conn.open("GET", url);
    conn.send();
}

function buscaHTML(filename, divName) {
    console.log("colocant " + filename + " a " + divName);
    getData(filename, 'setHTMLfile', divName);
}


function setMainPage() {
    buscaHTML('static/portada.html', 'main');
    setTimeout(() => {
        buscaHTML('static/nav.html', 'nav');
        buscaHTML('static/english.html', 'main');
        buscaHTML('static/footer.html', 'footer');
    }, "4000");
}
//-- funcions que posen elements al lloc (per a situar elements HTML)
function setHTMLfile(data, divName) {
    if (data === null) {
//document.getElementById(divName).innerHTML = "No s'ha trobat el document sol.licitat";
    } else {
        document.getElementById(divName).innerHTML = data;
    }
}


function traducir() {

    if (idioma === 1) {
        buscaHTML('static/main.html', 'main');
        idioma = 0;
    } else {
        buscaHTML('static/english.html', 'main');
        idioma = 1;
    }
}

/*< https://api.openweathermap.org/data/2.5/weather?q=Vinaros&appid=83042d396628e2689c3c1f52227bc945 />*/


 