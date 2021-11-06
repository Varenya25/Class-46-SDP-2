var background, backgroundImage;
var author, authorImage;
var hannah, hannahImage;
var magicalBooks, magicalBooksImage;
var magicalPens, magicalPensImage;
var magicalPages, magicalPagesImage;

function preload(){
  //load backgroundImage here
  backgroundImage = loadImage("Images/BGImage.png");
  //load authorImage here
  authorImage = loadImage("Images/author.png");
  //load hannahImage here
  hannahImage = loadImage("Images/hannah.png");
  //load magicalBooksImage here
  magicalBooksImage = loadImage("Images/magicalBook.png");
  //load magicalPensImage here
  magicalPensImage = loadImage("Images/magicalPen.png");
  //load magicalPagesImage here
  magicalPagesImage = loadImage("Images/magicalPage.png");
}


function setup(){
  //create canvas
  createCanvas(windowWidth, windowHeight);
  console.log(windowWidth);
  console.log(windowHeight);

  //create background
  background = createSprite(windowWidth/2, windowHeight/2, windowWidth, windowHeight);
  background.shapeColor = "lightBlue";
  background.addImage(backgroundImage);
  background.scale = 1.5;
  //create author
  author = createSprite(windowWidth-1000, windowHeight-50, 20, 60);
  author.shapeColor = "yellow";
  author.addImage(authorImage);
  author.scale = 0.5;
  //create hannah
  hannah = createSprite(windowWidth-1200, windowHeight-200, 20, 60);
  hannah.shapeColor = "red";
  hannah.addImage(hannahImage);
  hannah.scale = 0.8;
}
 
  
function draw(){
 
  //calling the functions
   spawnMagicalBooks();

   drawSprites();
}

function spawnMagicalBooks(){
  if (frameCount%60 == 0){
    magicalBooks = createSprite(random(300,900),random(300,900));
    magicalBooks.addImage(magicalBooksImage);
    magicalBooks.velocityX = -4;
    magicalBooks.scale = 0.3;
  }

}