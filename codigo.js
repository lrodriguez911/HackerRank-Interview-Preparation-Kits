/* const getUsuario = () => ({
 
    id: 1234,
    nombre: 'jose',
    email : 'jose@gmail.com'

}); */
/* class Persona{
    constructor(nombre, edad){
        this.nombre = nombre || 'juan',
        this.edad = edad || 18
    }
    hablar(){
        console.log(`${this.nombre} esta hablando`)
    }
};

let juan = new Persona;

class Profesor extends Persona{
    constructor(nombre, edad, tipo){
        super(nombre, edad)
        this.tipo = tipo;
    
    }
   tipoFormateado(){
         return `tipo de contratacion ${this.tipo}`
    }
}
let lucas = new Profesor('lucas',29,'FT') */

/* let usuarios = [
        {
          nombre: 'toni',
          online: true
        },
        {
          nombre: 'emi',
          online: true
        },
        {
          nombre: 'agus',
          online: false
        }
    ];
    function estaOffline(usuarios, nombre) {
        // La funcion llamada "estaOffline" recibe como argumento un array de objetos llamado 'usuarios' y un string llamada 'nombre'.
        // cada objeto tiene una property 'nombre' que es un string y otra llamada 'online' que es un booleano.
        // La función debe retornar true si el usuario se encuentra offline, de lo contrario false.
        // ej:
        // var usuarios = [
        //     {
        //       nombre: 'toni',
        //       online: true
        //     },
        //     {
        //       nombre: 'emi',
        //       online: true
        //     },
        //     {
        //       nombre: 'agus',
        //       online: false
        //     }
        // ];
        // estaOffline(usuarios, 'agus') retorna true
        // estaOffline(usuarios, 'emi') retorna false
      
        // Tu código aca:
      for (let index = 0; index < usuarios.length; index++) {
          const element = usuarios[index];
          
      }
      }
      estaOffline(usuarios, 'agus') */
    let arr = [5,5,5,5,5]
    function miniMaxSum(arr) {
        // Write your code here
    let minSum = arr[0] === arr[arr.length -1] ? arr[0] * arr.length :
    arr.sort((a,b) => a - b)
    .filter((a,b) => a < arr[arr.length -1])
    .reduce((a, b) => a +b, 0);
    let maxSum = arr[0] === arr[arr.length -1] ? arr[0] * arr.length :
    arr.sort((a,b) => a - b)
    .filter((a,b) => a > arr[0])
    .reduce((a, b) => a +b, 0);
    console.log(minSum, maxSum)
    }
    miniMaxSum()