
    function check(){

var isFirefox = typeof InstallTrigger !== 'undefined';

if (isFirefox) {
  alert('Ваш бразуер - Firefox. Страница может отображаться некорректно. Для просмотра рекомендуем сменить браузер. С уважением, moss');
}}

check()


    console.log('чё надо?? закрой обратно!');
    function redirect() {
        if (screen.width <= 480) {
        window.location = "https://gdccorpmain.000webhostapp.com/password/mobile.html";
        }
    }
    
    function openwin(m) {
        if (document.getElementById(m).style.display == 'none') {
            document.getElementById(m).style.display = 'block';
            console.log('открыто ок');

        }
        else {

        }
    }

    function openclosewin(num)
    { 
        if (document.getElementById(num).style.display == 'none') {
            document.getElementById(num).style.display = 'block';
        }
        else {
            console.log('закрытооткрыто ок');
            document.getElementById(num).classList.add('winclose');
            setTimeout(actclose, 980,num);
        }
    }

    function openclosewinn(num)
    { 
        if (document.getElementById(num).style.display == 'none') {
            document.getElementById(num).style.display = 'block';
            setTimeout(openwin,2500,94);
        }
        else {
        
        }
    }
    
 function closewin(n) {
        if (document.getElementById(n).style.display != 'none') {
            console.log('закрыто ок');
            document.getElementById(n).classList.add('winclose');
            setTimeout(actclose, 980,n);
            
        }
        else {

        }

    }
 function actclose(n) {
    document.getElementById(n).style.display = 'none';
    document.getElementById(n).classList.remove('winclose');
 }


  function closewinn(n) {
        if (document.getElementById(n).style.display != 'none') {
            document.getElementById(n).classList.add('winclose1');
            setTimeout(actclosee, 980,n);
            
        }
        else {

        }

    }
 function actclosee(n) {
    document.getElementById(n).style.display = 'none';
    document.getElementById(n).classList.remove('winclose1');
 }


    dragElement(document.getElementById('5'));
    dragElement(document.getElementById('6'));
    dragElement(document.getElementById('7'));
    dragElement(document.getElementById('12'));
    dragElement(document.getElementById('13'));
    dragElement(document.getElementById('11'));
    dragElement(document.getElementById('18'));
    dragElement(document.getElementById('19'));
    dragElement(document.getElementById('20'));
    dragElement(document.getElementById('21'));
    dragElement(document.getElementById('22'));
    dragElement(document.getElementById('23'));
    dragElement(document.getElementById('25'));
    dragElement(document.getElementById('95'));


function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "header")) {
    document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
  } else {
    elmnt.onmousedown = dragMouseDown;
  }

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
    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    document.onmouseup = null;
    document.onmousemove = null;
        }
    }


  function collapse(n) {
    warning(997);
    setTimeout(closewin, 1000,7);
    setTimeout(ii,1400);
    setTimeout(closewinn,2000, 997);

  }
  function ii() {
    document.getElementById(999).style.display = 'none';
    document.getElementById(998).style.display = 'none';

    document.getElementById(995).style.display = 'block';
    document.getElementById(994).style.display = 'block';
    document.getElementById(993).style.display = 'block';
    document.getElementById(992).style.display = 'block';
    document.getElementById(991).style.display = 'none';
    document.getElementById(990).style.display = 'none';
    document.getElementById(989).style.display = 'inline';

  }

  function rr (n) {
    console.log('ну и куда ты лезешь, м?');
    closewinn(n);
  }
  function warning(n) {
      document.getElementById(n).style.display = 'block';
      setTimeout(rr,2000,n);
      
  }

    setTimeout(warning, 1000,-2);
    setTimeout(closewin,3300,-1);
    setTimeout(closewinn,2800,-2);
    setTimeout(openwin,1500,-3);
    setTimeout(closewin,1700,-3);
    setTimeout(openwin, 2000,-6);
    setTimeout(closewin, 2200,-6);
    setTimeout(warning, 2600,-5);
    setTimeout(closewinn, 3000,-5);
    setTimeout(openwin,1600, -3);
    setTimeout(closewin,1900,-3);

