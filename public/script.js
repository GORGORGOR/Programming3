var matrix = [];
var side = 20;
var xotArr = [];
var eatArr = [];
var gishaArr = [];
var patArr = [];

var L = 80;
var K = 50;
var xotCount = 1000;
var xotakerCount = 500;
var gishaCount = 300;
var patCount = 100;



for (var i = 0; i < K; i++) {
    matrix.push([]);
    for (var j = 0; j < L; j++) {
      
        matrix[i][j] = 0;
    }
}

var p = 0;
while (p < xotCount) {
    var x = Math.floor(Math.random() * L);
    var y = Math.floor(Math.random() * K);

    if (matrix[y][x] == 0) {
        matrix[y][x] = 1;
        p++;
    }
}
p = 0;
while (p < xotakerCount) {
    var x = Math.floor(Math.random() * L);
    var y = Math.floor(Math.random() * K);

    if (matrix[y][x] == 0) {
        matrix[y][x] = 2;
        p++;
    }
}


p = 0;
while (p < gishaCount) {
    var x = Math.floor(Math.random() * L);
    var y = Math.floor(Math.random() * K);

    if (matrix[y][x] == 0) {
        matrix[y][x] = 3;
        p++;
    }
}
p = 0;
while (p < patCount) {
    var x = Math.floor(Math.random() * L);
    var y = Math.floor(Math.random() * K);

    if (matrix[y][x] == 0) {
        matrix[y][x] = 4;
        p++;
    }
}

function setup() {
    
   
    noStroke()
    frameRate(3);
    createCanvas(matrix[0].length * side, matrix.length * side);
    background('#acacac');


    for (var i = 0; i < matrix.length; i++) {
        for (var j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] == 2) {
                var eatgrass = new Eatgrass(j, i, 2);
                eatArr.push(eatgrass);
            } else if (matrix[i][j] == 1) {
                var grass = new Grass(j, i, 1);
                xotArr.push(grass);
            } else if (matrix[i][j] == 3) {
                var xotakeraker = new Predator(j, i, 1);
                gishaArr.push(xotakeraker);
            } else if (matrix[i][j] == 4) {
                var saxutox = new pat(j, i, 1);
                patArr.push(saxutox);
            }
        }
    }

}

function draw() {
    background('#acacac');
    for (var i = 0; i < matrix.length; i++) {
        for (var j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] == 1) {
                fill("green");
                rect(j * side, i * side, side, side);
            } else if (matrix[i][j] == 2) {
                fill("orange");
                rect(j * side, i * side, side, side);
            } else if (matrix[i][j] == 0) {
                fill('#acacac');
                rect(j * side, i * side, side, side);
            } else if (matrix[i][j] == 3) {
                fill('black');
                rect(j * side, i * side, side, side);
            } else if (matrix[i][j] == 4) {
                fill('#00649E');
                rect(j * side, i * side, side, side);
            }
        }
    }



    for (var i in xotArr) {
        xotArr[i].mul();
    }

    for (var i in eatArr) {
        eatArr[i].eat();
    }
    for (var i in gishaArr) {
        gishaArr[i].eat();
    }

    for (var i in patArr) {
        patArr[i].distroy()
    }
}