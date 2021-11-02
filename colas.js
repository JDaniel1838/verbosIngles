

class Cola {
    constructor() {
      this.cola = [];
    }
  
    encolar(element) {
      this.cola.push(element);
      return this.cola;
    }
  
    eliminar() {
      return this.cola.shift();
    }
  
    consultar() {
      return this.cola[0];
    }
  
    tamanio() {
      return this.cola.length;
    }
  
    estaVacio() {
      return this.cola.length === 0;
    }
  
    imprimir() {
      return this.cola;
    }
  }

  const cola = new Cola();
  console.log(cola.encolar('1 elemento')); // ['1 elemento']
  console.log(cola.encolar('2 elemento')); // ['1 elemento', '2 elemento']
  console.log(cola.encolar('3 elemento')); // ['1 elemento', '2 elemento', '3 elemento']
  console.log(cola.eliminar()); // '1 elemento'
  console.log(cola.consultar()); // '2 elemento'
  console.log(cola.estaVacio()); // false
  console.log(cola.imprimir()); // ['2 elemento', '3 elemento']
