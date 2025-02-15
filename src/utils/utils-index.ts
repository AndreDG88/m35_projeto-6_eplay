//Arquivo para reutilização de pequenas funções.

//função para ajuste de preços apresentados.
export const parseToBrl = (amount = 0) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(amount)
}
