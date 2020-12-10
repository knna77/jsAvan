/*He declarat la variable promesa  baix peruqè demostra millor el 
funcionament de la pràctica. El primer que s'executa és el últim que hi ha escrit
*/
//retarda: retrasa el temps que li passem per paràmetre (ms)
function retarda(temps) {
  /*Si es descomenta la linea de baix s'executa reject.
 per a demostrar que passa si la promessa no és compleix 
 */
  var dobleTemps = temps * 2;
  //temps = temps * 2;
  var promesa = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (temps == dobleTemps) {
        reject('el tiempo no va bien ');
      } else {
        resolve('tiempo concluido ');
      }
    }, temps);
  });
  promesa
    .then((res) => {
      //quan es compleix la promesa
      resposta.innerHTML = res;
    })
    .catch((error) => {
      //quan no es compleix la promesa
      resposta.innerHTML = error;
    });
}
retarda(5000);
var respPromesa;
//referèmcia al div on mostrem la resposta
respPromesa = document.getElementById('resposta');
