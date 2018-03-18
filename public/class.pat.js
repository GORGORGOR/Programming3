//պատ
class pat {
    constructor(x, y, ind) {
        this.index = ind;
        this.x = x;
        this.y = y;
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

    distroy() {

        this.newDirections();


        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x > -1 && x < matrix[0].length && y > -1 && y < matrix.length) {
                matrix[y][x] = 0;

                for (var j in xotArr) {
                    if (x == xotArr[j].x && y == xotArr[j].y) {
                        xotArr.splice(i, 1);
                    }
                }

                for (var j in eatArr) {
                    if (x == eatArr[j].x && y == eatArr[j].y) {
                        eatArr.splice(i, 1);
                    }
                }

                for (var j in gishaArr) {
                    if (x == gishaArr[j].x && y == gishaArr[j].y) {
                        gishaArr.splice(i, 1);
                    }
                }

            }


        }




    }

}