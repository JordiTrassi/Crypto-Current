import styled from '@emotion/styled';

const Texto = styled.div`
    background-color: #B7322C;
    color: #FFF;
    font-size: 22px;
    padding: 15px;
    text-transform: uppercase;
    font-family: 'Lato', sans-serif;
    font-weight: 700;
    text-align: center;
`

export const Error = ({children}) => {
  return (
    <Texto>
      {children}
    </Texto>
  )
}
