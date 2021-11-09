window.onload = init;

// CANVAS
let canvas;
let context;

// POSSIVEIS GLOBAIS
let win_size = [0, 0];
let mpos = [0, 0];
let offset = [0, 0];
let randomColor;
let radios = 0;

// DIVS MOVE
let ddh;
let div_dinamic;
let win_id = 3;
let mdown;
let main;
let b_i;
let b_t;
let btn_i;
let islc, islh;


// DESKTOP FUNCIONS
let if_clicked_in_empty = 0;
function item_clicked(element)
{
  if(islc != undefined &&  element == undefined)
  {
    islc.style.backgroundColor = "#00000000";
    islc.style.border = "none";
    islc = undefined;
    return;
  }

  if(islc == undefined) islc = element

  if(islc != element)
  {
    islc.style.backgroundColor = "#00000000";
    islc.style.border = "none";
  }    
  if(element != undefined)
  {
    element.style.backgroundColor = "#03a9f4";
    element.style.border = "solid white 1px";
  }

  islc = element;
}
function item_houver(element)
{
  if(islh == undefined)
  islh = element

  else if(islh != element)
  {
    islh.style.backgroundColor = "#00000000";
    if(islh.style.borderTopStyle == "solid")
    islh.style.backgroundColor = "#31c9eb80";
    
  }
  if(element != undefined)
  {
    element.style.backgroundColor = "#31c9eb80";
    if(element.style.borderTopStyle == "solid")
      element.style.backgroundColor = "#03a9f4";

  }
  islh = element;
}

// OVER


let icons = ["folder.png", "web-browser-hd.png", "calc.png", "unknow.png", "logoOS.png"];



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



function append_digito(e)
{
  //console.log("CALLME");

  let calc_display = document.getElementById('Display'+e.name);
  if(calc_display != undefined)
  {
	if(calc_display.value == 0)
  		calc_display.value = e.value;
  else
			calc_display.value += e.value;
  }
}

function calclu(e)
{
  let calc_display = document.getElementById('Display'+e.name);
  if(calc_display != undefined)
  {
    var x = eval(calc_display.value);
    calc_display.value = x;
  }

}

function folder_itens(elemento, name, icon)
{
  if(elemento == undefined)
  return elemento;

  elemento.style.position = "relative";
  elemento.style.width = "50px";
  elemento.style.border = "solid 1px";
  elemento.style.fontSize = "smaller";
  elemento.style.textAlign = "Center";
  elemento.style.float = "bottom";
  elemento.style.padding = "1px";
  elemento.style.margin = "1px";
  elemento.value = name;
    x = document.createElement('img');
    x.src = icon;
    x.height = "40";
  elemento.appendChild(x);
  elemento.style.overflowWrap = "Break-Word";
  elemento.style.border = "none";
  elemento.innerHTML += "<span>" + name + "</span>";

  elemento.onmouseover = function()
  {
    if_clicked_in_empty = 1;
    item_houver(this);
  }
  
  elemento.onmouseout = function(){
    if_clicked_in_empty = 0;
    item_houver(undefined);
  }
  elemento.onclick = function()
  {
    if_clicked_in_empty = 1;
    item_clicked(this);
  }


  return elemento;
}

function bk()
{
 console.log(("'"+ document.getElementById('cbkg').value +"'"));

  if(document.getElementById('cbkg') != undefined)
  main.style.backgroundImage = ("url('"+ document.getElementById('cbkg').value +"')");
}


let last_top_div;
function divd(type) {

  var type_img = 0;
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
  windows.style.borderRadius = radios + "%";

  windows.onmouseover = function()
  {
    if_clicked_in_empty = 1;
  }
  windows.onmouseout = function()
  {
    if_clicked_in_empty = 0;
  }

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
    switch(type)
    {
      case "calc":
      {
        var calcs = document.getElementById('calc').innerHTML;
        var x = document.createElement('div');
        x.innerHTML = calcs;
        x.id = "calc";//+i_divs;
        x.childNodes[1].childNodes[1].id = "Display"+i_divs;
        x.childNodes[1].childNodes[1].style.width = "90%";
        x.childNodes[1].childNodes[1].style.height = "50px";
        x.childNodes[1].childNodes[1].style.textAlign = "end";
        x.childNodes[1].childNodes[1].style.backgroundColor = "black";
        x.childNodes[1].childNodes[1].style.color = "white";

        for( i = 0; i < x.childNodes[3].childNodes.length; i++)
        {
          if( x.childNodes[3].childNodes[i].value != undefined)
          {  
            x.childNodes[3].childNodes[i].name = i_divs; 
          }
        }

        //console.log(x.childNodes.length);
        //calcs.style.visibility = "visible";


        windows.appendChild(x);
        type_img = 2;
        windows.style.width = "260px";
        windows.style.height = "370px";
      }
      break;

      case "iframe":
        windows.style.overflow = "hidden";
        windows.style.overflowX = "auto";
        var new_componete = document.createElement(type);
        new_componete.style.top = "25px";
        new_componete.style.width = "inherit";
        new_componete.style.height = "inherit";
        new_componete.style.overflow = 'auto';
        new_componete.src = "https://srshadowy.github.io/Teclado_Sonoro/";
        windows.appendChild(new_componete);
        type_img = 1;
      break;

      case "topgear":
        windows.style.overflow = "auto";
        //windows.style.overflowX = "auto";
        var new_componete = document.createElement('iframe');
        new_componete.style.top = "25px";
        new_componete.style.width = "inherit";
        new_componete.style.height = "inherit";
        //new_componete.style.overflow = 'auto';
    
        new_componete.src = "https://www.retrogames.cc/embed/23881-top-gear-usa.html";

        windows.style.width = "650px";
        windows.style.height = "500px";

        windows.appendChild(new_componete);
        type_img = 1;
      break;

      case "cbackground":
        windows.style.overflow = "auto";
        windows.style.width = "350px";
        windows.style.height = "200px";
        new_componete = document.createElement('div');
        new_componete.style.padding = "10px";
        new_componete.style.color = "white";
        new_componete.innerHTML = "<br><span>URL IMG</span><input id='cbkg' value='./icons/background1.jpg'><input type='button' onclick='bk()' value='change'><br><span>Radius Windows</span>";
        x = document.createElement("input");
        x.type = "number";
        x.value = radios;
        x.onclick = function(){
          radios = x.value;
        }
     

        new_componete.appendChild(x);
        windows.appendChild(new_componete);
        type_img = 3;
      break;

    }

  }else
  {
    type_img = 0;
    windows.style.color = "white";
    //windows.innerHTML += ("MY PROJECTS");
    let new_componete = document.createElement('div');
    new_componete.id = windows.id;
    new_componete = folder_itens(new_componete, "GIT", "./icons/web-browser-hd.png");

    new_componete.ondblclick = function()
    {
      window.open("https://srshadowy.github.io/", '_blank').focus();
    }

    windows.appendChild(new_componete);

    new_componete = document.createElement('div');
    new_componete.id = windows.id;
    new_componete = folder_itens(new_componete, "MemoryScanner", './icons/folder.png');
    new_componete.style.float = "left";
  
    new_componete.ondblclick = function()
    {
      window.open("https://github.com/SrShadowy/MemoryScanner", '_blank').focus();
    }
    //new_componete.innerHTML += "<span>memory Scanner</span>";
    windows.appendChild(new_componete);

    new_componete = document.createElement('div');
    new_componete.id = windows.id;
    new_componete = folder_itens(new_componete, "AppLauncher", './icons/folder.png');
    new_componete.style.float = "left";
    
    new_componete.ondblclick = function()
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
    //console.log("feixa");
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
    //xopen.style.backgroundColor = "black";
    xopen.value = 'Win';
    xopen.style.backgroundSize = "cover";
    var lets_img = ( "url('./icons/" +  icons[type_img] +"')");
    xopen.style.backgroundImage = lets_img;
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
      //console.log(elmnt.offsetTop + " e " + pos2 + " contudo: " + elmnt.style.top );
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

function DesktopDrag(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  elmnt.onmousedown = dragMouseDown;
  

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    //console.log(elmnt.style.top + " e " + pos2 + " contudo: " + elmnt.style.top );
    elmnt.style.top =  (elmnt.style.top.slice(0,-2)  - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    document.onmouseup = null;
    document.onmousemove = null;
  }
}

function itemDesktop(element, icon, name, Left_start, Top_Start)
{
  if(element == undefined)
    return element;

  element.style.color     = "white";
  element.style.float     = "bottom";
  element.style.width     = "60px";
  element.style.position  = "relative";
  element.style.left      = Left_start;
  element.style.top       = Top_Start;
  element.style.textAlign = "center";
  element.style.border    = "none";

    new_div = document.createElement('img');
    new_div.src = icon;
    new_div.height = "50";
    new_div.id = element.id+"Img";
    new_div.alt= name;
    
    element.appendChild(new_div);
    new_div = document.createElement('div');
    title = document.createElement('span');
    title.innerHTML = name;
    new_div.appendChild(title);
    element.appendChild(new_div);

  element.onmouseover = function()
  {
    if_clicked_in_empty = 1;
    item_houver(this);
  }
  
  element.onmouseout = function(){
    if_clicked_in_empty = 0;
    item_houver(undefined);
  }
  element.onclick = function()
  {
    if_clicked_in_empty = 1;
    item_clicked(this);
    DesktopDrag(this);
  }

  return element;
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
  navegador = itemDesktop(navegador, "./icons/web-browser-hd.png", "Browser", "20px", "50px");
  navegador.ondblclick = function()
  {
    window.open("https://github.com/SrShadowy", '_blank').focus();
  }

  folder = document.getElementById("folder");
  folder = itemDesktop(folder, "./icons/folder.png", "folder", "20px", "70px");
  folder.ondblclick = function()
  {
    if_clicked_in_empty = 0;
    divd();
  }

  main.onclick = function()
  {
    if(if_clicked_in_empty == 0)
      item_clicked(undefined);
  }
  main.addEventListener('contextmenu', event => event.preventDefault());
  main.oncontextmenu = right;

  function right(e)
  {
    e.preventDefault();
    if(if_clicked_in_empty != 0)
    return;

    window.onclick = function()
    {
      cm_e = document.getElementById('context_menu_e').style.display = "none";
    }

    cm_e = document.getElementById('context_menu_e');
    cm_e.style.display = "block";
    cm_e.style.left = (e.pageX-40) + "px";
    cm_e.style.top =  (e.pageY-30) + "px";
  }

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

      var btn = document.createElement('input');
      btn.id = iniciar.id;
      btn.type = "button"
      btn.style.left = "0px";
      btn.style.top = "30px";
      btn.style.width = "200px";
      btn.style.height = "30px";
      //btn.name = "btn_IFRAME";
      btn.value = "calculadora :)";
      btn.style.color = "red";
      btn.style.backgroundColor = "blue";
      btn.onclick = function (e) {
        divd("calc");
        //window.open("https://github.com/SrShadowy", '_blank');
        var elem = document.getElementById("iniciar");
        elem.parentNode.removeChild(elem);
      }

      iniciar.appendChild(btn);
      var btn = document.createElement('input');
      btn.id = iniciar.id;
      btn.type = "button"
      btn.style.left = "0px";
      btn.style.top = "60px";
      btn.style.width = "200px";
      btn.style.height = "30px";
      //btn.name = "btn_IFRAME";
      btn.value = "Vazio :)";
      btn.style.color = "red";
      btn.style.backgroundColor = "blue";
      btn.onclick = function (e) {
        divd("vazio");
        //window.open("https://github.com/SrShadowy", '_blank');
        var elem = document.getElementById("iniciar");
        elem.parentNode.removeChild(elem);
      }

      iniciar.appendChild(btn);
      
      iniciar.appendChild(btn);
      var btn = document.createElement('input');
      btn.id = iniciar.id;
      btn.type = "button"
      btn.style.left = "0px";
      btn.style.top = "90px";
      btn.style.width = "200px";
      btn.style.height = "30px";
      //btn.name = "btn_IFRAME";
      btn.value = "Top Gear (USA) :)";
      btn.style.color = "red";
      btn.style.backgroundColor = "blue";
      btn.onclick = function (e) {
        divd("topgear");
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