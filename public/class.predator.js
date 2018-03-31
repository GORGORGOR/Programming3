//գիշատիչ
class Predator extends mayrakan {


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