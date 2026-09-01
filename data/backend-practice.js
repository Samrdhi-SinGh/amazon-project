const xhr = new XMLHttpRequest();//Creates a new HTTP message to send to the backend. message = request.

xhr.addEventListener('load', ()=>{
  console.log(xhr.response);
});
xhr.open('GET', 'https://supersimplebackend.dev');
xhr.send();