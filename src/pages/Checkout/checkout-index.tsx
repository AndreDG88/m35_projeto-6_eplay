//configuração da página para finalização da compra dos produtos.
import { useState } from 'react'
import Button from '../../components/Button/button-index'
import Card from '../../components/Card/card-index'
import { InputGroup, Row, TabButton } from './checkout-styles'
import boletoIcon from '../../assets/images/boleto.png'
import cartaoIcon from '../../assets/images/cartao.png'

const Checkout = () => {
  const [payWithCard, setPaywithCard] = useState(false)

  return (
    <div className="container">
      <Card title="Dados de cobrança">
        <>
          <Row>
            <InputGroup>
              <label htmlFor="FullName">Nome completo</label>
              <input id="FullName" type="text" />
            </InputGroup>
            <InputGroup>
              <label htmlFor="email">E-mail</label>
              <input id="email" type="email" />
            </InputGroup>
            <InputGroup>
              <label htmlFor="cpf">CPF</label>
              <input id="cpf" type="text" />
            </InputGroup>
          </Row>
          <h3 className="margin-top">Dados de entrega - conteúdo digital</h3>
          <Row>
            <InputGroup>
              <label htmlFor="deliveryemail">E-mail</label>
              <input id="deliveryemail" type="email" />
            </InputGroup>
            <InputGroup>
              <label htmlFor="confirmdeliveryemail">Confirme o e-mail</label>
              <input id="confirmdeliveryemail" type="email" />
            </InputGroup>
          </Row>
        </>
      </Card>
      <Card title="Pagamento">
        <>
          <TabButton
            isActive={!payWithCard}
            onClick={() => setPaywithCard(false)}
          >
            <img src={boletoIcon} alt="Boleto" />
            Boleto bancário
          </TabButton>
          <TabButton
            isActive={payWithCard}
            onClick={() => setPaywithCard(true)}
          >
            <img src={cartaoIcon} alt="Cartão de Crédito" />
            Cartão de crédito
          </TabButton>
          <div className="margin-top">
            {payWithCard ? (
              <>
                <Row>
                  <InputGroup>
                    <label htmlFor="cardOwner">Nome do titular do cartão</label>
                    <input type="text" id="cardOwner" />
                  </InputGroup>
                  <InputGroup>
                    <label htmlFor="cpfcardOwner">
                      CPF do titular do cartão
                    </label>
                    <input type="text" id="cpfcardOwner" />
                  </InputGroup>
                </Row>
                <Row marginTop="24px">
                  <InputGroup>
                    <label htmlFor="cardDisplayName">Nome no cartão</label>
                    <input type="text" id="cardDisplayName" />
                  </InputGroup>
                  <InputGroup>
                    <label htmlFor="cardNumber">Numero do cartão</label>
                    <input type="text" id="cardNumber" />
                  </InputGroup>
                  <InputGroup maxWidth="123px">
                    <label htmlFor="expireNumber">Mês do vencimento</label>
                    <input type="text" id="expireNumber" />
                  </InputGroup>
                  <InputGroup maxWidth="123px">
                    <label htmlFor="expiresYear">Ano do vencimento</label>
                    <input type="text" id="expiresYear" />
                  </InputGroup>
                  <InputGroup maxWidth="48px">
                    <label htmlFor="cardCode">CVV</label>
                    <input type="text" id="cardCode" />
                  </InputGroup>
                </Row>
                <Row marginTop="24px">
                  <InputGroup maxWidth="150px">
                    <label htmlFor="installments">Parcelamento</label>
                    <select name="" id="">
                      <option value="">1x de R$ 200,00</option>
                      <option value="">2x de R$ 200,00</option>
                      <option value="">3x de R$ 200,00</option>
                    </select>
                  </InputGroup>
                </Row>
              </>
            ) : (
              <p>
                Ao optar por essa forma de pagamento, é importante lembrar que a
                confirmação pode levar até 3 dias úteis, devido aos prazos
                estabelecidos pelas instituições financeiras. Portanto, a
                liberação do código de ativação do jogo adquirido ocorrerá
                somente após a aprovação do pagamento do boleto.
              </p>
            )}
          </div>
        </>
      </Card>
      <Button type="button" title="Clique aqui para finalizar a compra">
        Finalizar compra
      </Button>
    </div>
  )
}

//exportações.
export default Checkout
