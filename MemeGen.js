// This is the Meme Generator Assessment for the Springboard Software 
// Engineering Bootcamp as completed by Jason Cox.  Started May 6, 2020 

function makeMeme (){

    // get inputs from the meme-maker form
    const imagePath = document.querySelector('input[name="image-path"]').value 
    const uprTxtRAW = document.querySelector('input[name="upper-text"]').value
    const lowTxtRAW = document.querySelector('input[name="lower-text"]').value

    const newMeme = document.createElement("div")
    newMeme.classList.add("meme")

    // create an image element
    const imageElement = initMemeImage( imagePath)

    // create hover-over cancel image
    const cancelImg = initMemeImage("cancelimg.png")
    cancelImg.setAttribute("id", "cancel-image")

    // create a span to hold the upper text
    const upperTxt = initMemeText(uprTxtRAW)
    upperTxt.classList.add("upper-text")

    // create a span to hold the lower text
    const lowerTxt = initMemeText(lowTxtRAW)
    lowerTxt.classList.add("lower-text")

    // add the event listeners
    cancelImg.addEventListener("click", function(){ newMeme.remove() })
    
    //put it all together
    newMeme.append(cancelImg, imageElement, upperTxt, lowerTxt)
    document.querySelector("#meme-container").appendChild(newMeme)

}

function initMemeImage( path ){
    //initialize the images
    const image = document.createElement("img")
    image.setAttribute("src", path)
    image.classList.add("meme-img")
    return image
}

function initMemeText( txt ){
    //initialize the text containers
    const txtElement = document.createElement("span")
    txtElement.classList.add("meme-text")
    txtElement.innerText = txt
    return txtElement
}

function blingTitle(){
    //bling my title
    const title = document.querySelectorAll(".title-letter")
    
    setInterval( function(){
        for( letter of title ){
            if( letter.id === "last" ){ letter.style.color = randomColor() }
            else{ letter.style.color = letter.nextElementSibling.style.color }
        }
    }, 400)
}

function randomColor(){
    return "#" + Math.trunc( Math.random() * 16777215 ).toString(16)
}

function startMemeMaker(){
    //get things going
    blingTitle()
    const memeMaker = document.querySelector("#meme-maker")
    memeMaker.addEventListener("submit", function(e){
        e.preventDefault()
        makeMeme()
        memeMaker.reset()
    })
}



document.addEventListener("DOMContentLoaded", startMemeMaker )