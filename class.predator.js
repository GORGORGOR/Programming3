//գիշատիչ
class Predator {
    constructor(x, y, ind) {
        this.index = ind;
        this.x = x;
        this.y = y;
        this.multiply = 0;
        this.eatCount = 0;
        this.energy = 8;

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
        var emptyCor = this.getDirections(0);
        var cor = random(emptyCor);

        if (cor) {
            var x = cor[0];
            var y = cor[1];

            matrix[y][x] = 3;

            matrix[this.y][this.x] = 0;

            this.x = x;
            this.y = y;

        }
    }
    eat() {

        var emptyCor = this.getDirections(2);

        var cor = random(emptyCor);

        if (cor) {
            this.multiply++;

            var x = cor[0];
            var y = cor[1];

            matrix[y][x] = 3;
            matrix[this.y][this.x] = 0;

            this.x = x;
            this.y = y;


            for (var i in eatArr) {
                if (x == eatArr[i].x && y == eatArr[i].y) {
                    eatArr.splice(i, 1);
                    
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

    mul() {
        var emptyCor = this.getDirections(0);

        var cor = random(emptyCor);
        if (cor) {
            var x = cor[0];
            var y = cor[1];

            this.multiply++;

            var norGishatich = new Predator(x, y, this.index);
            gishaArr.push(norGishatich);

            matrix[y][x] = 3;
            this.multiply = 0;
        }
    }
    die() {
        matrix[this.y][this.x] = 0;
        for (var i in gishaArr) {
            if (this.x == gishaArr[i].x && this.y == gishaArr[i].y) {
                gishaArr.splice(i, 1);
                
            }
        }
    }

}