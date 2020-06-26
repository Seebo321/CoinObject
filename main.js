let mainElement=document.querySelector('body')
const heading=document.createElement('h1')
mainElement.append(heading)
heading.append('Flip The Coin!')
let flipStr=document.createElement('h3')
 let coin = {
    state: 0,
    flip: function() {
        this.state=Math.round(Math.random())
        
        /* 1. Randomly set your coin object's "state" property to be either 
           0 or 1: use "this.state" to access the "state" property on this object.*/
    },
    toString: function() {
        if(this.state==0){return "heads"}else{
            return "tails"
        }
        /* 2. Return the string "Heads" or "Tails", depending on whether
           "this.state" is 0 or 1. */
    },
    toHTML: function() {
        let image = document.createElement('img');
        if(this.state==0){
            image.src='./images/heads.jpg'
            // https://www.techiedelight.com/change-size-of-image-with-javascript/
            image.style.width = '100px';
            image.style.height = 'auto';
        }else{image.src='./images/tails.jpg'
        image.style.width = '100px';
        image.style.height = 'auto';}
        /* 3. Set the properties of this image element to show either face-up
           or face-down, depending on whether this.state is 0 or 1.*/
        return mainElement.append(image);
    }
};
const flip20=document.createElement('button')
mainElement.append(flip20)
flip20.append('20 Flips!')
flip20.id='flip20'
flip20.addEventListener("click", function () {

    for(i=0;i<20;i++){if(i<19){
coin.flip()
mainElement.append(flipStr)
flipStr.append(coin.toString()+', ')}else{
    coin.flip()
mainElement.append(flipStr)
flipStr.append(coin.toString())
}
    }
     })
     const flip20Images=document.createElement('button')
     mainElement.append(flip20Images)
     flip20Images.append('20 images!')
     flip20Images.addEventListener("click", function () {
            for(i=0;i<20;i++){
        coin.flip()
        coin.toHTML()
            }})
 const reset=document.createElement('button')
 mainElement.append(reset)
reset.append('Pick up the coins!')
reset.addEventListener("click", function () {
flipStr.remove()
let pictures=document.querySelector('img')
pictures.remove()
// mainElement.remove(image)
                   })

// testing
// coin.flip()
// console.log(coin.state)
// console.log(coin.toString())
// coin.flip()
// console.log(coin.state)
// console.log(coin.toString())
// coin.flip()
// console.log(coin.state)
// console.log(coin.toString())
// coin.flip()
// console.log(coin.state)
// console.log(coin.toString())
// coin.toHTML()
// coin.flip()
// console.log(coin.state)
// console.log(coin.toString())
// coin.toHTML()
// coin.flip()
// console.log(coin.state)
// console.log(coin.toString())
// coin.toHTML()
