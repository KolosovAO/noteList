const sketch = function(p) {
    p.setup = function(){
        p.createCanvas(800, 600);
        p.background(255);
    } 
};
new p5(sketch, 'c1');
new p5(sketch, 'c2');
