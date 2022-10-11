import styled from '@emotion/styled';
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
`
const Imagen = styled.img`
  max-width: 400px;
  width: 80%;
  margin: 100px auto 0 auto;
  display: block;
`

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

`

export const App = () => {
  
  return (
    <Contenedor>
      <Imagen
        src={ImgCrypto}
        alt="Crypto Images"
      />
      <div>
        <Heading>Crypto Current App</Heading>

      </div>

    </Contenedor>
  )
}


