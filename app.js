'use strict'

async function buscarImagens(raça) {
  const url = `https://dog.ceo/api/breed/${raça}/images`
 
  try {
    const response = await fetch(url)
    const imagens = await response.json()

    if (imagens.status === 'error') {
      alert('Raça não encontrada. Tente outra.')
      return
    }

    mostrarImagens(imagens.message)
  } catch (erro) {
    console.error('Erro ao buscar imagens:', erro)
    alert('Erro ao buscar imagens.')
  }
}

function mostrarImagens(listaDeImagens) {
  const galeria = document.getElementById('galeriaDog')
  galeria.innerHTML = ''

  listaDeImagens.forEach(url => {
    const img = document.createElement('img')
    const selectImg = document.createElement('a')
    img.src = url
    img.alt = 'Imagem de cachorro'
    img.className = 'foto-cachorro'
    selectImg.href = url
    galeria.appendChild(selectImg)
    selectImg.appendChild(img)
  })
}

document.addEventListener('DOMContentLoaded', () => {
  const input = document.querySelector('input')
  const botao = document.querySelector('button')

  botao.addEventListener('click', () => {
    const raca = input.value.trim().toLowerCase()
    if (raca) {
      buscarImagens(raca)
    }
  })

  input.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
      const raca = input.value.trim().toLowerCase()
      if (raca) {
        buscarImagens(raca)
      }
    }
  })
})