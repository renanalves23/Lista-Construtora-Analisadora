//get input
let num = document.querySelector('input#fnum')
 // let n = num.value

let lista = document.querySelector('select#flista')

let res = document.querySelector('div#res')

let valores = []

//button
  // let button1 = document.querySelector('button#btnEnv')
  // var btn1 = button1.addEventListener('click', function() {
  //   window.alert('clicou')
  // })

                function isNumero(n) {
                  if (Number(n) >= 1 && Number(n) <= 100) {
                    return true
                  }else {
                    return false
                  }
                }

                  function inLista(n, l) {
                    if (l.indexOf(Number(n)) != -1) {
                      return true
                    }else {
                      return false
                    }
                  }


function adicionar() {
  if(isNumero(num.value) && !inLista(num.value, valores)) {
      valores.push(Number(num.value))
      let item = document.createElement('option')
      item.text = `Valor ${num.value} adicionado`
      lista.appendChild(item)
    }else {
    window.alert('Valor inválido ou já encontrado')
  }
  num.value = ''
  num.focus()
}


function finalizar() {
  if (valores.length == 0) {
    window.alert('Acrescente valores antes de finalizar ')
  }else {
    let total = valores.length
    let maior = valores[0]
    let menor = valores[0]
      for (let pos in valores) {
        if (valores[pos] > maior)
             maior = valores[pos]
        if (valores[pos] < menor) 
             menor = valores[pos]
  }      
    res.innerHTML = ''
    res.innerHTML += `<p>Ao todo, temos ${total} números cadastrados</p>`
    res.innerHTML += `<p>O maior valor informado foi ${maior}</p>`
    res.innerHTML += `<p>O menor valor informado foi ${menor}</p>`

  }

}