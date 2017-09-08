function Note(noteObj, x, y, w, h){
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.note = noteObj.note;
    this.tone = noteObj.tone;
    this.contains = (x,y) => x>this.x && x<this.x+this.w && y>this.y && y<this.y+this.h
    this.render = () => {
        switch(this.tone){
            case 1:
            case 2:  //+палочка
            case 4:  //круг закрашен
            case 8:  //+флаг
            case 16: //+флаг
            case 32: //+флаг
            break;
        }
    }
}
