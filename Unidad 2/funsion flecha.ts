(function() {
    var miFuncion = function(a:string) {
        return a;
    };
    var miFuncionF = function(a:string) { return a; };
    var sumarN = function(a:number, b:number) {
        return a + b;
    };
    var sumarNF = function(a:number, b:number) { return a + b; };

    const hulk = {
        nombre: "Hulk",
        smach() {
            setTimeout(() => {
                console.log(`${this.nombre} smash!!!`);
            }, 100);
        }
    }

})();