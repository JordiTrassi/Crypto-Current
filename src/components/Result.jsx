import styled from '@emotion/styled';

const Container = styled.div`
    color: #FFF;
    font-family: 'Lato', sans-serif;
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-top: 30px;
`

const Texto = styled.p`
    font-size: 18px;
    span {
        font-weight: 700;
    }   
`

const Precio = styled.p`
    font-size: 25px;
    span {
        font-weight: 700;
    }
`

const Image = styled.img`
    display: block;
    width: 120px;
`

export const Result = ({ resultado }) => {
    
    const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE } = resultado;
    
  return (
      <Container>
          <Image
              src={`http://cryptocompare.com/${IMAGEURL}`}
              alt="crypto image"
          />
          <div>
            <Precio>El Precio es de: <span>{PRICE}</span></Precio>
            <Texto>El Precio más alto del día: <span>{HIGHDAY}</span></Texto>
            <Texto>El Precio más bajo del día: <span>{LOWDAY}</span></Texto>
            <Texto>Variación últimas 24 horas: <span>{CHANGEPCT24HOUR} %</span></Texto>
            <Texto>Última Actualización: <span>{LASTUPDATE}</span></Texto>
          </div>
    </Container>
  )
}
