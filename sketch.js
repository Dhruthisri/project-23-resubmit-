var stick1,stick2,stick3,stick4,stick5,stick6,stick7;

function setup() {
  createCanvas(500,1000);

   stick1 = new stick(150,300,500,700);
    stick2 = new stick(200,300,500,700);
    stick3 =new stick(250,500,600,500);
    stick4 =new stick(300,500,600,500);
    stick5 =new stick(350,500,600,500);
    stick6 =new stick(400,500,500,700);
    stick7 =new stick(450,500,500,700);
  }

function draw() {
  background("black");  
  drawSprites();

  stick1.display();
  stick2.display();
  stick3.display();
  stick4.display();
  stick5.display();
  stick6.display();
  stick7.display();
  
}