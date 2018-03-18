constructor(x, y, ind) {
    this.index = ind;
    this.x = x;
    this.y = y;
    this.multiply = 0;
    this.eatCount = 0;
    this.energy = 3;

}

newDirections() {
    this.directions = [
        [this.x - 1, this.y - 1],
        [this.x, this.y - 1],
        [this.x + 1, this.y - 1],
        [this.x - 1, this.y],
        [this.x + 1, this.y],
        [this.x - 1, this.y + 1],
        [this.x, this.y + 1],
        [this.x + 1, this.y + 1]
    ];
}


getDirections(t) {
    this.newDirections();
    var found = [];

    for (var i in this.directions) {
        var x = this.directions[i][0];
        var y = this.directions[i][1];
        if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
            if (matrix[y][x] == t) {
                found.push(this.directions[i]);
            }
        }
    }
    return found;
}

move() {
    var emptyCord = this.getDirections(0);
    var cord = random(emptyCord);

    if (cord) {
        var x = cord[0];
        var y = cord[1];

        matrix[y][x] = 2;

        matrix[this.y][this.x] = 0;

        this.x = x;
        this.y = y;

    }
}


eat() {

        var emptyCord = this.getDirections(1);

        var cord = random(emptyCord);

        if (cord) {
            this.multiply++;

            var x = cord[0];
            var y = cord[1];

            matrix[y][x] = 2;
            matrix[this.y][this.x] = 0;

            this.x = x;
            this.y = y;


            for (var i in xotArr) {
                if (x == xotArr[i].x && y == xotArr[i].y) {
                    xotArr.splice(i, 1);
                }
            }
            if (this.multiply == 10) {
                this.mul()
                this.multiply = 0;
            }

        } else {
            this.move();
            this.energy--;
            if (this.energy < 3) {
                this.die();
                //this.energy = 10;
            }
        }
    }