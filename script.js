$(document).ready(onReady);

function onReady(){
    console.log('on ready');

    console.log('.box', $('.box')); // console.log everything Jquery call out
    
    $('.box').first().text('I am a humble box');

}