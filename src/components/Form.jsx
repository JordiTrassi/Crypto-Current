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

    &:hover {
        background-color: #7A7DFE;
        cursor: pointer;
    }
`

export const Form = () => {

    const [SelectCoins] = useSelectCoins('Elige tu Moneda', coins);
    // const [SelectCrytptoCoins] = useSelectCoins('Elige tu Crypto Moneda');
    

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

