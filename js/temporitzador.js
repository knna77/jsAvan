/*li he posat retarda (de nom) perquè em pareixia confús
posar-li temporitzador a una funció que està dins d'un fitxer 
anomenat temporitzador*/
//Aquesta funció ha sigut comentada a l'exercici 1
export function retarda(temps) {
  var dobleTemps = temps * 2;
  var promesa = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (temps == dobleTemps) {
        reject('el tiempo no va bien ');
      } else {
        resolve('tiempo concluido ');
      }
    }, temps);
  });
  return promesa;
}
/*Aquesta funció, al ser assíncrona ens permet que s'executen les promeses
amb l'ordre que noslatres dessitgem (p1 i quan finalitza p2)
Paràmetres:
-El número amb el que s'inicia el compte enrere.
-element en el que escriurem el compte enrere.
-Una funció callback, que s'executarà quan el compte finalitze.
-L'interval en milisegons en el que canvia cada número. Per defecte valdrà 1 segon.
*/
export async function cuenta(num, element, funcio, interval = 1000) {
  let p1 = await new Promise((resolver) => {
    //interval dividit per cent és per a contar centècimes
    let intervalCents = interval / 100;
    //Són els segons
    let contador_s = num;
    //Posem el contador de centècimes a zero
    let contador_cs = 0;
    //Inicialitzem un interval de centècima
    let inter = setInterval(() => {
      if (contador_cs == 0) {
        //cada vegada que arribe a zero el posem a cent
        contador_cs = 100;
        //Quan passen 100 centècimes baixem el contador de segons de un en un
        contador_s--;
        //quan el contador de segons arriba a zero
        if (contador_s == 0) {
          //parem el interval
          clearInterval(inter);
          //Fem que al contador de centècimens aparega escrit fin
          contador_cs = 'fin';
          //li passem al resolver el messatge de promesa concluida en èxit
          resolver('ok');
        }
      }
      //Escribim en l'html el cronòmetre
      element.innerHTML = contador_s + '<br>' + contador_cs;
      //cada vegada que és produeix un interval baixem una centècima
      contador_cs--;
    }, intervalCents);
  });
  //Mostrem (per consola) el resolver de la promesa p1
  console.log(p1);
  //quan conclou p1 comença p2 amb la funció que hem passat per paràmetre
  let p2 = await new Promise((resolver) => {
    resolver(funcio(1000));
  });
  //Mostrem (per consola) el resolver de la promesa p2
  console.log(p2);
}
