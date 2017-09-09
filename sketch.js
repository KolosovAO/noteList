function NotesWidget(area, jsonFile){
    var notes = [];
    const sketch = function(p) {
        let data;
        let x = 10;
        let y = 0;
        const render = (noteObj) => {
            switch(noteObj.tone){
                case 1:
                    p.fill(255);
                    p.ellipse(noteObj.x,noteObj.y,10,10);
                    break;
                case 2:
                    p.fill(255);
                    p.ellipse(noteObj.x,noteObj.y,10,10);
                    p.line(noteObj.x+5,noteObj.y,noteObj.x+5,noteObj.y-30)
                    break;
                case 4:
                    p.fill(0);
                    p.ellipse(noteObj.x,noteObj.y,10,10);
                    p.line(noteObj.x+5,noteObj.y,noteObj.x+5,noteObj.y-30)
                    break;
                case 8:
                    p.fill(0);
                    p.ellipse(noteObj.x,noteObj.y,10,10);
                    p.line(noteObj.x+5,noteObj.y,noteObj.x+5,noteObj.y-30)
                    p.line(noteObj.x+5,noteObj.y-30,noteObj.x+15,noteObj.y-15)
                    break;
                case 16:
                    p.fill(0);
                    p.ellipse(noteObj.x,noteObj.y,10,10);
                    p.line(noteObj.x+5,noteObj.y,noteObj.x+5,noteObj.y-30)
                    p.line(noteObj.x+5,noteObj.y-30,noteObj.x+15,noteObj.y-15)
                    p.line(noteObj.x+5,noteObj.y-20,noteObj.x+12,noteObj.y-10)
                    break;
                case 32:
                    p.fill(0);
                    p.ellipse(noteObj.x,noteObj.y,10,10);
                    p.line(noteObj.x+5,noteObj.y,noteObj.x+5,noteObj.y-30)
                    p.line(noteObj.x+5,noteObj.y-30,noteObj.x+15,noteObj.y-15)
                    p.line(noteObj.x+5,noteObj.y-20,noteObj.x+12,noteObj.y-10)
                    p.line(noteObj.x+5,noteObj.y-13,noteObj.x+10,noteObj.y-6)
                    break;
            }
        }
        const increaseY = (c) => y += c? 10*c : 10
        const createNoteSpan = () => {
            p.line(x,y,p.width,y);
            increaseY();
            p.line(x,y,p.width,y);
            increaseY();
            p.line(x,y,p.width,y);
            increaseY();
            p.line(x,y,p.width,y);
        }
        const drawAll = () => {
        	y = 0;
            for (let i=0; i<notes.length; i++){
                if (i%16 === 0){		
                    x = 10;
                    increaseY(4);
                    createNoteSpan();
                }
                render(notes[i]);
            }
        }
        p.preload = function(){
            data = p.loadJSON(jsonFile);
        }
        p.setup = function(){
            p.createCanvas(800, 1000);
            p.background(255);
            for (let i in data){
                if (i%16 === 0){
	                x = 10;
	                increaseY(4);
	                createNoteSpan();
                }
                notes[i] = new Note(data[i],x+10,y,25,25);
                x += 50;
            }
            drawAll();
        }
        p.draw = function(){

        }	
        p.mousePressed = function(){
            for (let i=0; i<notes.length; i++){
                if (notes[i].contains(p.mouseX, p.mouseY)){
                    p.clear();
                    for (let j=i+1; j<notes.length; j++){
                    	if (notes[j].x>50){
                    		notes[j].x -= 50;	
                    	} else {
                    		notes[j].y -= 70;
                    		notes[j].x = 770;
                    	}
                    }
                    notes.splice(i,1);
                }
            }
            drawAll();
        }
    };
    new p5(sketch, area);
}


let c1 = new NotesWidget('c1', 'https://raw.githubusercontent.com/KolosovAO/noteList/master/data2.json');

let c2 = new NotesWidget('c2', 'https://raw.githubusercontent.com/KolosovAO/noteList/master/data1.json');
