function NotesWidget(area, jsonFile){
    var notes = [];
    const sketch = function(p) {
        let data;
        let self = this;
        this.x = 10;
        this.y = 0;
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
        const increaseY = (c) => this.y += c? 10*c : 10
        const createNoteSpan = () => {
            p.line(this.x,this.y,p.width,this.y)
            increaseY()
            p.line(this.x,this.y,p.width,this.y)
            increaseY()
            p.line(this.x,this.y,p.width,this.y)
            increaseY()
            p.line(this.x,this.y,p.width,this.y)
        }
        p.preload = function(){
            data = p.loadJSON(jsonFile);
        }
        p.setup = function(){
            p.createCanvas(800, 600);
            p.background(255);
            for (let i in data){
                if (i%16 === 0){
                    self.x = 10;
                    increaseY(4)
                    createNoteSpan()
                }
                notes[i] = new Note(data[i],self.x,self.y,self.x+25,self.y+25);
                self.x += 50;
            }
        }
        p.draw = function(){
            for (let i=0; i<notes.length; i++){
                render(notes[i]);
            }
        }
        p.mousePressed = function(){
            p.ellipse(p.mouseX,p.mouseY,5,5)
            console.log(p.mouseX, p.mouseY)
            for (let i=0; i<notes.length; i++){
                if (notes[i].contains(p.mouseX, p.mouseY)){
                    console.log(i)
                    notes.splice(i,1);
                    break;
                }
            }
        }
    };
    new p5(sketch, area);
}


new NotesWidget('c1', 'https://raw.githubusercontent.com/KolosovAO/noteList/master/data1.json');

new NotesWidget('c2', 'https://raw.githubusercontent.com/KolosovAO/noteList/master/data2.json');
