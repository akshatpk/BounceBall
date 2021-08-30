//name spacing
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

// Only for debugging code, is this needed, not otherwise
// const Render = Matter.Render;

var myengine,myworld;
var ground, ball;

function setup(){
    var canvas = createCanvas(800,400);
   
    myengine = Engine.create();
    myworld = myengine.world;

    //Code for brown ground
    var ground_options ={
        isStatic: true,
      
    }
    ground = Bodies.rectangle(400,390,800,20,ground_options);
    World.add(myworld,ground);
    console.log(ground);

    // Code for red box
    var redBox_options ={
        isStatic: true,
    }

    redBox = Bodies.rectangle(300,320,100,120,redBox_options);
    World.add(myworld,redBox);

    // Code for green box
    var greenBox_options ={
        isStatic: true,
    }

     // Code for invisible boundaries
     var invisibleBox_options ={
        isStatic: true,
    }
    invis1Box = Bodies.rectangle(0,0,20,420,invisibleBox_options);
    invis2Box = Bodies.rectangle(0,0,820,20,invisibleBox_options);
    invis3Box = Bodies.rectangle(800,400,20,420,invisibleBox_options);
    // Matter.Body.setAngle(invis1Box,130)
    World.add(myworld,invis1Box);
    World.add(myworld,invis2Box);
    World.add(myworld,invis3Box);
    
    greenBox = Bodies.rectangle(450,320,100,120,greenBox_options);
    World.add(myworld,greenBox);

    // Code for yellow box
    var yellowBox_options ={
        isStatic: true,
        angle:-60
        
    }

    yellowBox = Bodies.rectangle(590,290,100,20,yellowBox_options);
    // Matter.Body.setAngle(yellowBox,130)
    World.add(myworld,yellowBox);

    // Code for blue box
    var blueBox_options ={
        isStatic: true,
        angle:-110
        
    }

    blueBox = Bodies.rectangle(130,290,100,20,blueBox_options);
    // Matter.Body.setAngle(blueBox,130)
    World.add(myworld,blueBox);


    // Code for ball
    var ball_options ={
        isStatic: false,
        restitution: 1.17
    }

    ball = Bodies.circle(590,100,20, ball_options);
    World.add(myworld,ball);
    

    // Only for debugging code, is this needed, not otherwise
    // var render = Render.create({
    //   element: document.body,
    //   engine: myengine,
    //   options: {
    //     width: 1600,
    //     height: 700,
    //     wireframes: false
    //   }
    // });
    // Render.run(render);

    //console.log(ball);
}

function draw(){
    background("lightgreen");
    Engine.update(myengine);
    rectMode(CENTER);

    fill("brown")
    rect(ground.position.x,ground.position.y,800,20);
    fill("red")
    rect(redBox.position.x,redBox.position.y,100,120);
    fill("green")
    rect(greenBox.position.x,greenBox.position.y,100,120);
    
    fill("yellow")
    push();
    translate(yellowBox.position.x,yellowBox.position.y);
    rotate(-45);
    rectMode(CENTER);
    rect(0, 0, 100, 20);
    pop();

    fill("blue")
    push();
    translate(blueBox.position.x,blueBox.position.y);
    rectMode(CENTER);
    rotate(45);
    rect(0, 0, 100, 20);
    pop();
   
    fill("red")
    ellipseMode(RADIUS);
    ellipse(ball.position.x, ball.position.y, 20, 20);
}
