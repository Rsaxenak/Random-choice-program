var rand;
var randshow;
var button1, input1;
var widthOP = 500;
var heightOP = 350;

function setup() 
{
  createCanvas(1000, 700);
  input1 = createInput("Enter number of choices");
  input1.position(widthOP - 20, heightOP - 20)
  button1 = createButton("Enter");
  button1.position(widthOP + 20, heightOP + 30);

  rand = 0;
}
function draw() 
{
  background("white");
  button1.mousePressed(button1GotPressed);
  randshow = Math.round(rand)

  textSize(30);
  text("Your Number is : " + randshow, widthOP - 50, 200);
  drawSprites();
}

function button1GotPressed() 
{
  rand = random(1, input1.value());
}