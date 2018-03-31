var matrix = [];
var side = 20;
var xotArr = [];
var eatArr = [];
var gishaArr = [];
var patArr = [];
var norkerArr = [];

var L = 80;
var K = 50;
var xotCount = 1000;
var xotakerCount = 500;
var gishaCount = 300;
var patCount = 100;
var norkerCount = 100;


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
p = 0;
while (p < norkerCount) {
    var x = Math.floor(Math.random() * L);
    var y = Math.floor(Math.random() * K);

    if (matrix[y][x] == 0) {
        matrix[y][x] = 5;
        p++;
    }
}

function setup() {


    noStroke()
    createCanvas(matrix[0].length * side, matrix.length * side);
    background('#acacac');
    frameRate(3);
    textSize(20);
    textSize(30);
    textAlign(CENTER);


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

    function exanak() {
        var p = document.getElementById("p");
        if (frameCount % 40 >= 0 && frameCount % 40 < 10) {
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
            p.innerText = "garun";
        }
        else if (frameCount % 40 >= 10 && frameCount % 40 < 20) {
            for (var i = 0; i < matrix.length; i++) {
                for (var j = 0; j < matrix[i].length; j++) {
                    if (matrix[i][j] == 1) {
                        fill('#ebff00');
                        rect(j * side, i * side, side, side);
                    } else if (matrix[i][j] == 2) {
                        fill('#dee589');
                        rect(j * side, i * side, side, side);
                    } else if (matrix[i][j] == 0) {
                        fill('#acacac');
                        rect(j * side, i * side, side, side);
                    } else if (matrix[i][j] == 3) {
                        fill('#90af80');
                        rect(j * side, i * side, side, side);
                    } else if (matrix[i][j] == 4) {
                        fill('#83e1ef');
                        rect(j * side, i * side, side, side);
                    }
                }
            }
            p.innerText = "amar";
        }
        else if (frameCount % 40 >= 20 && frameCount % 40 < 30) {
            for (var i = 0; i < matrix.length; i++) {
                for (var j = 0; j < matrix[i].length; j++) {
                    if (matrix[i][j] == 1) {
                        fill("yellow");
                        rect(j * side, i * side, side, side);
                    } else if (matrix[i][j] == 2) {
                        fill('#8e8e8e');
                        rect(j * side, i * side, side, side);
                    } else if (matrix[i][j] == 0) {
                        fill('#acacac');
                        rect(j * side, i * side, side, side);
                    } else if (matrix[i][j] == 3) {
                        fill('#776767');
                        rect(j * side, i * side, side, side);
                    } else if (matrix[i][j] == 4) {
                        fill('#cccccc');
                        rect(j * side, i * side, side, side);
                    }
                }
            }
            p.innerText = "ashun";
        }
        else if (frameCount % 40 >= 30 && frameCount % 40 <= 39) {
            for (var i = 0; i < matrix.length; i++) {
                for (var j = 0; j < matrix[i].length; j++) {
                    if (matrix[i][j] == 1) {
                        fill("white");
                        rect(j * side, i * side, side, side);
                    } else if (matrix[i][j] == 2) {
                        fill("black");
                        rect(j * side, i * side, side, side);
                    } else if (matrix[i][j] == 0) {
                        fill('#acacac');
                        rect(j * side, i * side, side, side);
                    } else if (matrix[i][j] == 3) {
                        fill('#dbe5da');
                        rect(j * side, i * side, side, side);
                    } else if (matrix[i][j] == 4) {
                        fill('#92e589');
                        rect(j * side, i * side, side, side);
                    }
                }
            }
            p.innerText = "cmer";
        }
    }



    exanak();



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