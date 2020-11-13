(()=>{

    const avenger ={
        nombre: "Steve",
        clave: "Capitan America",
        poder: "Droga"
    }

    const extraer = ({nombre, poder}:any)=>{
       //const{nombre, poder} = avenger;
        
        console.log(nombre);
        console.log(poder);
    }

    //extraer(avenger);

    const avengers:string[] = ["Thor", "Ironman", "Spiderman"];

    const[loki, hombre, arena] = avengers;

    //console.log(loki);
    //console.log(hombre);
    //console.log(arena);

    const extraerArr = (avengers:string[])=>{
        console.log(avengers[0]);
        console.log(avengers[1]);
        console.log(avengers[2]);
     }

     extraerArr(avengers);

})();