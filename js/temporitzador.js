export function retarda(temps) {
  /*Si es descomenta la segon linea s'executa reject.
per a demostrar que passa si la promessa no és compleix
*/
  console.log('01entra');
  var dobleTemps = temps * 2;
  var promesa = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (temps == dobleTemps) {
        reject('el tiempo no va bien ');
      } else {
        console.log('02entra');
        resolve('tiempo concluido ');
      }
    }, temps);
  });

  return promesa;
}

export async function cuenta1(num, element, funcio, interval = 1000) {
  if (element == null || element == undefined || element == '') {
    var element = document.createElement('div');
    element.setAttribute('id', 'crono2');
    document.body.appendChild(element);
  }

  let p1 = await new Promise((resolver) => {
    let intervalCents = interval / 100;
    let contador_s = num;
    let contador_cs = 0;

    var inter = setInterval(() => {
      if (contador_cs == 0) {
        contador_cs = 100;
        contador_s--;

        if (contador_s == 0) {
          clearInterval(inter);
          contador_cs = 'fin';
          console.log(p1);
        }
      }
      //element.innerHTML = contador_s + '<br>' + contador_cs;
      element.innerHTML = contador_s + '<br>' + contador_cs;
      contador_cs--;
    }, intervalCents);
    console.log('--->' + p2);
  });
  let p2 = await new Promise((resolver) => {
    console.log('espera');
    resolver(funcio(num * interval));
  });
}

export async function cuenta(num, element, funcio, interval = 1000) {
  console.log('ENTRA');
  let p1 = await new Promise((resolver) => {
    let intervalCents = interval / 100;
    let contador_s = num;
    let contador_cs = 0;

    var inter = setInterval(() => {
      if (contador_cs == 0) {
        contador_cs = 100;
        contador_s--;

        if (contador_s == 0) {
          clearInterval(inter);

          contador_cs = 'fin';
          resolver('ok');
          // console.log(p1);
        }
      }
      element.innerHTML = contador_s + '<br>' + contador_cs;
      contador_cs--;
    }, intervalCents);
  });
  console.log(p1);
  let p2 = await new Promise((resolver) => {
    resolver(funcio(1000));
  });
  console.log(p2);
}
