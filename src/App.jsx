import styled from '@emotion/styled';
import { useEffect, useState } from 'react';
import { Form, Result, Spinner } from './components';
import ImgCrypto from './img/img-cryptos.png';

const Contenedor = styled.div`
  max-width: 900px;
  margin: 0 auto;
  width: 90%;
  @media (min-width: 992px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
  }
`;
const Imagen = styled.img`
  max-width: 400px;
  width: 80%;
  margin: 100px auto 0 auto;
  display: block;
`;

const Heading = styled.h1`
  font-family: 'Lato', sans-serif;
  color: #FFF;
  text-align: center;
  font-weight: 900;
  font-size: 34px;
  margin-top: 80px;
  margin-bottom: 50px;

  &::after {
    content: '';
    width: 100px;
    height: 6px;
    background-color: #66A2FE;
    display: block;
    margin: 10px auto 0 auto;
  }

`;

export const App = () => {

  const [coins, setCoins] = useState({});
  const [resultado, setResultado] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (Object.keys(coins).length > 0) {

      const cotizarCrypto = async () => {
        setLoading(true);
        setResultado({});
        
        const { coin, cryptoCoin } = coins;
        const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${cryptoCoin}&tsyms=${coin}`

        const resp = await fetch(url);
        const result = await resp.json();

        setResultado(result.DISPLAY[cryptoCoin][coin]);
        setLoading(false);
      }

      cotizarCrypto()
    }
  }, [coins]);

  return (
    <Contenedor>
      <Imagen
        src={ImgCrypto}
        alt="Crypto Images"
      />
      <div>
        <Heading>Crypto Current App</Heading>
        <Form
          setCoins={setCoins}
        />
        {loading && <Spinner />}
        {resultado.PRICE && <Result resultado={resultado} />}
      </div>

    </Contenedor>
  );
}
