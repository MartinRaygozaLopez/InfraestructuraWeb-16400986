"use strict";
(function () {
    var miFuncion = function (a) {
        return a;
    };
    var miFuncionF = function (a) { return a; };
    var sumarN = function (a, b) {
        return a + b;
    };
    var sumarNF = function (a, b) { return a + b; };
    const hulk = {
        nombre: "Hulk",
        smach() {
            setTimeout(() => {
                console.log(`${this.nombre} smash!!!`);
            }, 100);
        }
    };
})();
