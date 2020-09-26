var character = document.getElementById("character");
var block = document.getElementById("block");
var randomPosition;

function jump()
{
    if(character.classList != "animate")
        character.classList.add("animate");
    else
        return;
    setTimeout(function()
    {
        character.classList.remove("animate");
    },500)
}

document.addEventListener('mousemove', function(e)
{
    let left = e.offsetX;
    if (left < 480)
        character.style.left = left + 'px';
})

window.setInterval(function()
{
    randomPosition = Math.floor(Math.random() * 480);
    console.log("randomPosition = " + randomPosition);
}, 1000);

window.setInterval(function()
{
    var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    console.log(blockLeft);
    if (blockLeft < randomPosition + 10 && blockLeft > randomPosition - 10)
    {
        block.style.backgroundColor = "green";
        //block.style.animation = "blockUp";
    }
},10);

// var checkDead = setInterval(function()
// {
//     var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
//     var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
//     if(blockLeft < 20 && blockLeft > 0 && characterTop >= 130)
//     {
//         block.style.animation = "none";
//         block.style.display = "none";
//         alert("You lose");
//     }
// }, 10);