//Arquivo para reutilização de pequenas funções.

import { Game } from '../pages/Home/home-index'

//função para ajuste de preços apresentados.
export const parseToBrl = (amount = 0) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(amount)
}

//função de soma dos valores
export const getTotalPrice = (items: Game[]) => {
  return items.reduce((accumulator, currentItem) => {
    if (currentItem.prices.current) {
      return (accumulator += currentItem.prices.current)
    }
    return 0
  }, 0)
}
