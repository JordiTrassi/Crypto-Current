import { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { useSelectCoins } from '../hooks/useSelectCoins';
import { coins } from '../data/coins';


const InputSubmit = styled.input`
    background-color: #9497FF;
    border: none;
    border-radius: 5px;
    width: 100%;
    padding: 10px;
    color: #FFF;
    font-size: 20px;
    font-weight: 700;
    text-transform: uppercase;
    transition: background-color .3s ease;
    margin-top: 30px;

    &:hover {
        background-color: #7A7DFE;
        cursor: pointer;
    }
`

export const Form = () => {

    const [cryptos, setCryptos] = useState([]);

    const [coin, SelectCoins] = useSelectCoins('Elige tu Moneda', coins);
    const [cryptoCoin, SelectCrytptoCoin] = useSelectCoins('Elige tu Crypto Moneda', cryptos);
    
    useEffect(() => {
        const consultarAPI = async () => {
            const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=EUR';
            const resp = await fetch(url);
            const result = await resp.json();

            const cryptoArray = result.Data.map(crypto => {
                const object = {
                    id: crypto.CoinInfo.Name,
                    name: crypto.CoinInfo.FullName,
                }
                return object;
            });
            setCryptos(cryptoArray);

        }
        consultarAPI();
    }, []);

  return (
      <form>
          
          <SelectCoins />
          <SelectCrytptoCoin />

          <InputSubmit
              type="submit"
              value="Cotizar"
          />
    </form>
  )
}

