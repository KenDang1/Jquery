$(document).ready(onReady);

function onReady(){
    console.log('on ready');

    console.log('.box', $('.box')); // console.log everything Jquery call out
    
    $('.box').first().text('I am a humble box');  // grap an element and change the text

    $('.box').css({
        color: 'purple',
        'font-size': '28px'
    })

    // Select my plantlist element and add another list to it
    $('#plantList').append(`
        <li>
            Bamboo
            <p> 
                Bamboo is a fast growing grass that 
                is native to the northern reaches
                of <strong>Alaska</strong>
            </p>
        </li>
    `);

    let plants = [
        'Monstera',
        'Roses',
        'Cactus',
        'Hosta'
    ];
    for (let plant of plants) {
        $('#plantList').append(`
            <li>${plant}</li>
        `)
    }

    $('body').append(`
        <h1>My awesome new Jquery app</h1>
        <h5 id="welcomeText">Welcome, this will be a nice day!</h5>
    `)

    // Getter (aka 'git 'er')
    let h5Text = $('#welcomeText').text();
    console.log('h5Text is', h5Text);
    
    // Mess with it, and put it back
    let messedUpText = h5Text.split("").reverse().join("");
    // 👆 Stolen from stackOverFlow
    // https://stackoverflow.com/a/959004/830030
    console.log('messedUpText', messedUpText);
    $('#welcomeText').text(messedUpText);

    $('#plantNameInput').val('Lavender')

    





}

console.log('.box outside of onReady', $('.box'));