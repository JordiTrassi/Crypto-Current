import styled from '@emotion/styled';

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
  return (
      <form>
          
          <InputSubmit
              type="submit"
              value="Cotizar"
          />
    </form>
  )
}

