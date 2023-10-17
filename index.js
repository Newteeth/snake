const canvas = document.querySelector('.canvas')
const ctx = canvas.getContext("2d")

canvas.width = 400
canvas.height = 400
const cageW = canvas.width
const cageH = canvas.height
const requestAnimationFrame = window.requestAnimationFrame 
const cancelAnimationFrame = window.cancelAnimationFrame

let  letVarieble = {
    x: 197,
    y: 200,
    x1: Math.floor(Math.random() * cageW),
    y1: Math.floor(Math.random() * cageW),
    boxRow: 10,
    lineThickness: 1,
    animationID: '',
    count: 1,
    arrayRect: []
}
let { x, y, x1, y1, boxRow, lineThickness, animationID, count, arrayRect } = letVarieble
const box = Math.floor(cageW / boxRow)

function Rectangle(x, y, box, color, speed){
    this.x = x,
    this.y = y,
    this.box = box,
    this.color = color
    this.speed = speed
}
Rectangle.prototype.drow = function(){
    ctx.strokeStyle = this.color
    ctx.fillStyle = 'white'
    ctx.fillRect(x, y, box, box)
    ctx.strokeRect(x, y, box, box);
}
Rectangle.prototype.update = function (...args) {
    let [ ars ] = args

    if (ars === 'ArrowLeft') x -= this.speed
    if (ars === 'ArrowRight' || ars == 'start') x += this.speed
    if (ars === 'ArrowUp')   y -= this.speed
    if (ars === 'ArrowDown') y += this.speed
    
    if (x > canvas.width)  x = -box
    if (x < - box)         x = canvas.width
    if (y > canvas.height) y = -box
    if (y < - box)         y = canvas.height
}
const rectangle = new Rectangle(x, y, box, 'black', 3)

let data = {
    handleKeyDown: function(event) {
        cancelAnimationFrame(animationID)
        if (event.type == 'click') {
            const click = event.target.innerText.toLowerCase()
            this.loop(click)
        }
        if (event.type == 'keydown') {
            const key = event.key
            this.loop(key)
        }
    },
    loop: function(args){
        arrayXYCoordinates = this.arrayXYCoordinates
        requestAnimationFrame(function str(){
            ctx.clearRect(0, 0, canvas.width, canvas.height)
            rectangle.drow()
            rectangle.update(args)
            animationID = requestAnimationFrame(str)
        })
    }
}
document.addEventListener('keydown', data.handleKeyDown.bind(data))
const btn = document.querySelector('.btn')
btn.addEventListener('click', data.handleKeyDown.bind(data))










// function growthSnake(count){
//     return ctx.fillRect(x - box  * (count), y, box, box)
// }


// Object.prototype.on = function(){
//     const args = Array.prototype.slice.call(arguments)

//     if(typeof this.listeners === 'undefined') {
//         const listeners = []
//     }
//     const listener = {
//         type: args[0],
//         func: args[1]
//     }
//     this.listeners.push(listener)
//     this.addEventListener.apply(this. args)

// }

// Object.prototype.listener = function(){
//     console.log(this.listeners)
//     return this.listeners
// }
//   function loop() {
//     ctx.fillStyle = "rgba(0, 0, 0, 0.25)";
//     ctx.fillRect(0, 0, width, height);
//     while (balls.length < 25) {
//       var ball = new Ball(
//         random(0, width),
//         random(0, height),
//         random(-7, 7),
//         random(-7, 7),
//         "rgb(" +
//           random(0, 255) +
//           "," +
//           random(0, 255) +
//           "," +
//           random(0, 255) +
//           ")",
//         random(10, 20),
//       );
//       balls.push(ball);
//     }
//     for (var i = 0; i < balls.length; i++) {
//       balls[i].draw();
//       balls[i].update();
//     }
//     requestAnimationFrame(loop);
//   }







// function drawBoard(){
//     let cell;
//     ctx.lineWidth = lw
//     ctx.strokeStyle = 'rgb(2,7,159)'
//     for (let i = 0; i < cageW; i += box){
//         for (let j = 0; j < cageH; j += box){
//             cell = ctx.strokeRect(i, j, box, box)
//         }
//     }
//     return cell    
// }
// drawBoard()





// function splitToDigits(number_X, number_Y) {
//   const digits_X = [];
//   const digits_Y = []
//   while (number_X && number_Y) {
//     digits_X.push(number_X % 10);
//     number_X= Math.floor(number_X/10);
//     digits_Y.push(number_Y % 10);
//     number_Y= Math.floor(number_Y/10);
//   }
//   return [digits_X.reverse(), digits_Y.reverse()];
// }


// let x = 0;
// let y = 0;
// const w = 100
// // const h = 100
// function fillCell(x1, y1){
//     const array = splitToDigits(x1, y1)
//     x1 = array[0][0]*100 - 1
//     y1 = array[1][0]*100 - 1
//     console.log('====>',x1, y1)
//     console.log('fillCell', x1, y1)
//     ctx.fillStyle = "#FF0003"
//     ctx.fillRect(x1, y1, w, h)
// }
// let time = 10000
// function moveFill(x, y){
//     console.log('---->', y)
//     ctx.fillStyle = "#FF0000"
//     ctx.fillRect(x, y, w, h)
//     y -=100
//     // ctx.lineWidth = lw
//     // ctx.strokeStyle = 'rgb(2,7,159)'
//     // ctx.strokeRect(x, y, box, box)
//     ctx.fillStyle = "#00ffff"
//     ctx.fillRect(x, y, w, h)
//     y +=100
//     records()
// }
// function str(){
//     console.log('++++>', x, y)
//     console.log('str work')
//     while(time != 5000){
//         console.log('====>', x, y)
//         y += 100
//         setInterval(moveFill(x, y), time)
//         time -= 1000
//         console.log(time, y)
//     }
// }
// let count = 0
// function records(){
//     const text = document.querySelector('.record p')
//     count += 1
//     text.innerHTML = count
// }

