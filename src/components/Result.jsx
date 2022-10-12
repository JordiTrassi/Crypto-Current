import styled from '@emotion/styled';

export const Result = ({ resultado }) => {
    
    const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE } = resultado;
    
  return (
      <div>
          <p>El Precio es de: <span>{PRICE}</span></p>
          <p>El Precio más alto del día: <span>{HIGHDAY}</span></p>
          <p>El Precio más bajo del día: <span>{LOWDAY}</span></p>
          <p>Variación últimas 24 horas: <span>{CHANGEPCT24HOUR}</span></p>
          <p>Última Actualización: <span>{LASTUPDATE}</span></p>
    </div>
  )
}
