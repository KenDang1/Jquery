Jquery started in August 26.2006

----- $(document).ready(onReady);

function onReady(){
console.log('on ready');
    
}
------
When the DOM is ready load this function like the example above


$ - is a function in jquery
$('ul').find('.box.blue')
$('.blue.box').parent('ul') looking up the parent 
$('li').first() 
$('li').first().siblings()

$('ul).empty()  - empty everything in the li or children of ul
$('ul').removed()

Getter - go get something and give you back some value
let divText = $('div').text();
$('#plantNameInput').val()
plantName = $('#plantNameInput').val()

cheat sheet website https://oscarotero.com/jquery/


Setter - to set a value
$('div').text('yolo');
