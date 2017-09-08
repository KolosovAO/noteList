function Note(noteObj, x, y, w, h){
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.deleted = 0;
    switch(noteObj.note){
        case 'c':
            this.y += 10;
            break;
        case 'd':
            this.y += 5;
            break;
        case 'e':
            break;
        case 'f':
            this.y -= 5;
            break;
        case 'g':
            this.y -= 10;
            break;
        case 'a':
            this.y -= 15;
            break;
        case 'h':
            this.y -= 20;
            break;
    }
    this.note = noteObj.note;
    this.tone = noteObj.tone;
    this.contains = (x,y) => x>this.x-this.w && x<this.x+this.w && y>this.y-this.h && y<this.h+this.y
}
