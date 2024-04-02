function addingEventListener() {

const input = document.getElementById('button');
function clickAlert() {
    alert('I was clicked!');
  }
input.addEventListener('click',function(){
    console.log('input clicked');});
}
addingEventListener()