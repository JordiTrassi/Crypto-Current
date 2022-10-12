import { useEffect } from 'react';
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

    const [coin, SelectCoins] = useSelectCoins('Elige tu Moneda', coins);
    // const [SelectCrytptoCoins] = useSelectCoins('Elige tu Crypto Moneda');
    
    useEffect(() => {
        const consultarAPI = async () => {
            const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=EUR';
            const resp = await fetch(url);
            const result = await resp.json();

            console.log(result);
        }
        consultarAPI();
    }, []);

  return (
      <form>
          
          <SelectCoins />

          {/* <SelectCrytptoCoins /> */}

          <InputSubmit
              type="submit"
              value="Cotizar"
          />
    </form>
  )
}

