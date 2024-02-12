function startTime()
{
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
  var session = 'AM';

  if(h==0)
  {
    h=12;
  }
  if(h>12)
  {
    h= h-12;
    session = 'PM';
  }
  if(h<10)
  {
    h = '0' + h;
  }
  if(m<10)
  {
    m = '0' + m;
  }
  if(s<10)
  {
    s = '0' + s;
  }
  document.getElementById('hours').innerHTML = h;
  document.getElementById('minutes').innerHTML = m;
  document.getElementById('seconds').innerHTML = s;
  document.getElementById('session').innerHTML = session;

  setTimeout(startTime, 500);
}
window.onload = startTime;



const container = document.querySelector(".container")
const clock = document.querySelector(".clock");

document.addEventListener("mousemove", (e) =>
{
    rotateElement(e, container);
});

document.addEventListener("mouseleave", (e) => 
{
  stopRotation(e, container);
});

function rotateElement(event, element)
{
    // get mouse position
    const x = event.clientX;
    const y = event.clientY;

    //get container position
    const style = window.getComputedStyle(container);
    const top =  parseInt(style.getPropertyValue('top')); // remove the unit and convert to number
    const left =  parseInt(style.getPropertyValue('left'));
    // get offset from middle as a percentage
    // and tone it down a little
    const offsetX = (((x - left) / container.offsetWidth) - 0.5) * 45;
    const offsetY = -(((y - top) / container.offsetHeight) - 0.5) * 45;

    // apply rotation
    element.style.setProperty("--rotateX", offsetX + "deg");
    element.style.setProperty("--rotateY", offsetY + "deg"); 
    element.style.setProperty("transition", "transform 0s linear");
    // element.style.setProperty("--rotateY", -1 * offsetY + "deg");
};
