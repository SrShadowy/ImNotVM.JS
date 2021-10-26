window.onload = init;

// CANVAS
let canvas;
let context;

// POSSIVEIS GLOBAIS
let win_size = [0, 0];
var mpos = [0, 0];
var offset = [0, 0];
let randomColor;

// DIVS MOVE
let ddh;
let div_dinamic;
let win_id;
let mdown;
let main;
let b_i;
let b_t;
let btn_i;







function dinamic_window() {
  win_size[0] = window.innerWidth - 23;
  win_size[1] = window.innerHeight - 23;
  main.style.width = win_size[0] + 'px';
  main.style.height = win_size[1] + 'px';
  b_i.style.width = main.style.width;
  var top = win_size[1] - 40;
  var left = win_size[0] / 2 - 150;
  b_t.style.top = top + 'px';
  b_t.style.left = left + 'px';

}
var i_divs = 0;
function context_menu_woow() {
  var newdiv = document.createElement("div");
  newdiv.id = "NEW_DIV" + i_divs;
  ++i_divs;
  document.body.appendChild(newdiv);
  main.appendChild(newdiv);

}

let last_top_div;

function divd(type) {
  var windows = document.createElement('div');
  windows.id = "new_window" + i_divs;
  ++i_divs;
  windows.style.position = "absolute";
  windows.style.left = "14px";
  windows.style.top = "45px";
  windows.style.backgroundColor = "royalblue";
  windows.style.border = "1px solid blue";
  windows.style.width = "300px";
  windows.style.height = "200px";
  windows.style.resize = 'both';
  windows.style.overflow = 'auto';
  windows.style.visibility = 'visible';


  var close = document.createElement('button');
  close.id = windows.id;
  close.style.float = 'left';
  close.style.width = "25px";
  close.style.height = "25px";
  close.style.backgroundColor = "red";
  var minimize = document.createElement('button');
  minimize.id = windows.id;
  minimize.style.float = 'left';
  minimize.style.width = "25px";
  minimize.style.height = "25px";
  minimize.style.backgroundColor = "yellow";

  var header = document.createElement('div');
  header.id = windows.id + "header";
  header.style.padding = "13px";
  header.style.backgroundColor = "rgb(60, 60, 70)";

  defaults();

  if (type != undefined) {
    var new_componete = document.createElement(type);
    new_componete.style.top = "25px";
    new_componete.style.width = "99%";
    new_componete.style.height = "90%";
    new_componete.style.overflow = 'auto';
    new_componete.src = "https://srshadowy.github.io/Teclado_Sonoro/";
    windows.appendChild(new_componete);
  }else
  {
    windows.style.color = "white";
    //windows.innerHTML += ("MY PROJECTS");


    var new_componete = document.createElement('div');
    new_componete.id = windows.id;
    new_componete.style.backgroundSize = "cover";
    new_componete.style.width = "30px";
    new_componete.style.height = "30px";
    new_componete.style.float = "bottom";
    new_componete.style.position = "relative";
    new_componete.style.padding = "10px";
    new_componete.style.backgroundImage = "url('./icons/web-browser-hd.png')";
    new_componete.style.textAlign = "center";
    new_componete.value = "NAVEGADOR";
    new_componete.onclick = function()
    {
      window.open("https://srshadowy.github.io/", '_blank').focus();
    }
    new_componete.innerHTML += "<span>My GIT</span>";
    windows.appendChild(new_componete);

    var new_componete = document.createElement('div');
    new_componete.id = windows.id;
    new_componete.style.backgroundSize = "cover";
    new_componete.style.width = "30px";
    new_componete.style.height = "30px";
    new_componete.style.float = "left";
    new_componete.style.position = "relative";
    new_componete.style.padding = "10px";
    new_componete.style.backgroundImage = "url('./icons/folder.png')";
    new_componete.style.textAlign = "center";
    new_componete.value = "FOLDER";
    new_componete.onclick = function()
    {
      window.open("https://github.com/SrShadowy/MemoryScanner", '_blank').focus();
    }
    //new_componete.innerHTML += "<span>memory Scanner</span>";
    windows.appendChild(new_componete);

    var new_componete = document.createElement('div');
    new_componete.id = windows.id;
    new_componete.style.backgroundSize = "cover";
    new_componete.style.width = "30px";
    new_componete.style.height = "30px";
    new_componete.style.float = "left";
    new_componete.style.position = "relative";
    new_componete.style.padding = "10px";
    new_componete.style.backgroundImage = "url('./icons/folder.png')";
    new_componete.style.textAlign = "center";
    new_componete.value = "NAVEGADOR";
    new_componete.onclick = function()
    {
      window.open("https://github.com/SrShadowy/AppLauncher", '_blank').focus();
    }
    //new_componete.innerHTML += "<span style='display:flex; top:30px'>Applauncher</span>";
    windows.appendChild(new_componete);



    // site apresentação = https://srshadowy.github.io/
    // apresetação do memory scanner
    // Applauncher

  }

  document.getElementById('dd.h').appendChild(windows);
  close.onclick = function (e) {
    e.preventDefault();
    console.log("feixa");
    var x = document.getElementById(close.id);
    x.parentNode.removeChild(x);
  }

  function defaults()
  {
    windows.appendChild(close);
    windows.appendChild(minimize);
    windows.appendChild(header);
  }

  minimize.onclick = function()
  {
    windows.style.visibility = 'hidden';
    var xopen = document.createElement('div');;
    xopen.type = 'button';
    xopen.id = windows.id;
    xopen.style.float = 'left';
    xopen.style.width = "40px";
    xopen.style.height = "40px";
    xopen.style.color = 'white';
    xopen.style.backgroundColor = "royalblue";
    xopen.value = 'Win';
    xopen.style.backgroundSize = "cover";
    xopen.style.backgroundImage = "url('./icons/folder.png')";
    xopen.onclick = function()
    {
      windows.style.visibility = 'visible';
      b_t.removeChild(xopen);
    }
    b_t.appendChild(xopen);
  }


  // by https://www.w3schools.com/howto/howto_js_draggable.asp
  dragElement(windows);

  function dragElement(elmnt) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    var xpx = document.getElementById(elmnt.id + "header");
    if (xpx != undefined) {
      document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
    } else {
      elmnt.onmousedown = dragMouseDown;
    }

    function dragMouseDown(e) {
      e = e || window.event;
      e.preventDefault();
      // get the mouse cursor position at startup:
      pos3 = e.clientX;
      pos4 = e.clientY;
      document.onmouseup = closeDragElement;
      // call a function whenever the cursor moves:
      document.onmousemove = elementDrag;
      // push to z
      if (last_top_div != undefined) last_top_div.style.zIndex--;
      last_top_div = windows;
      windows.style.zIndex++;
    }

    function elementDrag(e) {
      e = e || window.event;
      e.preventDefault();
      // calculate the new cursor position:
      pos1 = pos3 - e.clientX;
      pos2 = pos4 - e.clientY;
      pos3 = e.clientX;
      pos4 = e.clientY;
      // set the element's new position:
      elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
      elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }

    function closeDragElement() {
      /* stop moving when mouse button is released:*/
      document.onmouseup = null;
      document.onmousemove = null;
    }
  }
}

function init() {

  main = document.getElementById('mother_of_divs');
  b_i = document.getElementById('b.i');
  b_t = document.getElementById('b.t');
  btn_i = document.getElementById('btn.i');
  ddh = document.getElementById('dd.h');

  main.style.backgroundImage = "url('./icons/background1.jpg')";
  main.style.backgroundSize = "cover";

  btn_i.style.width = "40px";
  btn_i.style.backgroundSize = "cover";
  btn_i.style.backgroundImage = "url('./icons/logoOS.png')";

  var navegador = document.getElementById("browser");
  navegador.style.backgroundSize = "cover";
  navegador.style.width = "30px";
  navegador.style.height = "30px";
  navegador.style.float = "bottom";
  navegador.style.position = "relative";
  navegador.style.left = "20px";
  navegador.style.top = "50px";
  navegador.style.padding = "10px";
  navegador.style.backgroundImage = "url('./icons/web-browser-hd.png')";
  navegador.id = "browser";
  navegador.value = "NAVEGADOR";
  navegador.onclick = function()
  {
    window.open("https://github.com/SrShadowy", '_blank').focus();
  }

  var folder = document.getElementById("folder");
  folder.style.backgroundSize = "cover";
  folder.style.width = "30px";
  folder.style.height = "30px";
  folder.style.float = "bottom";
  folder.style.position = "relative";
  folder.style.left = "20px";
  folder.style.top = "70px";
  folder.style.padding = "10px";
  folder.style.backgroundImage = "url('./icons/folder.png')";
  folder.id = "folder";
  folder.onclick = function()
  {
    divd();
  }

  main.addEventListener('contextmenu', event => event.preventDefault());

  btn_i.onclick = function (e) {
    if (document.getElementById("iniciar") == null) {
      var iniciar = document.createElement('div');
      iniciar.id = "iniciar";
      iniciar.style.position = "fixed";
      iniciar.style.left = "14px";
      iniciar.style.top = "45px";
      iniciar.style.backgroundColor = "blue";
      iniciar.style.border = "2px solid red";
      iniciar.style.width = "200px";
      iniciar.style.height = "200px";

      var btn = document.createElement('input');
      btn.id = iniciar.id;
      btn.type = "button"
      btn.style.left = "0px";
      btn.style.top = "0px";
      btn.style.width = "200px";
      btn.style.height = "30px";
      btn.name = "btn_IFRAME";
      btn.value = "Nothing in moment :)";
      btn.style.color = "red";
      btn.style.backgroundColor = "blue";
      btn.onclick = function (e) {
        divd("iframe");
        //window.open("https://github.com/SrShadowy", '_blank');
        var elem = document.getElementById("iniciar");
        elem.parentNode.removeChild(elem);
      }

      iniciar.appendChild(btn);
      main.appendChild(iniciar);
    } else {
      var elem = document.getElementById("iniciar");
      elem.parentNode.removeChild(elem);
    }
  }

  setInterval(dinamic_window, 1000 / 30);
}

