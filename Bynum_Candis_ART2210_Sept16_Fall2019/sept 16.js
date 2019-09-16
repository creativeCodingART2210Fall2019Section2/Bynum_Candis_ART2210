function setup(){

    createCanvas (windowWidth,windowHeight);

}


function draw(){
}

function draw(){
    var x=0
    while( x <= width ){ 	//while (condition) is true, keep going
        ellipse(x, 200, 30, 30);
    x = x + 50; 
    }

    for(var x = 0; x <= width; x+=50){  
        //for(initialization; termination; increment)
                     ellipse(x, 200, 30, 30);
        }  
        
    ellipse (100, 200, 30, 30);
    ellipse (150, 200, 30, 30);
    ellipse (200, 200, 30, 30);
    for(var x = 0; x <= width; x+=50){  
        //for(initialization; termination; increment)
                     ellipse(x, 200, 30, 30);
        } 
    for(var x = 0; x <= width; x+=50){  
			for(var y = 0; y <= height; y+=50){  
		 		ellipse(x, y, 30, 30);
		 	}
		} 
        
        let time = new Date();
        textSize(22);
        text(time, 300, 250, 700, 100); // Text wraps within text box
        

}
    
function windowResized(){

    resizeCanvas (windowWidth,windowHeight);

}