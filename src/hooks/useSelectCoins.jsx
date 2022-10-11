import styled from '@emotion/styled';

const Label = styled.label`
    color: #FFF
`

export const useSelectCoins = (label, opciones) => {
  
    const SelectCoins = () => (
        <>
            <Label>{label}</Label>
            <select>
                <option value="">Seleccione</option>

                {opciones.map(opcion => (
                    <option
                        key={opcion.id}
                        value={opcion.id}
                    >{opcion.name}</option>
                ))}
            </select>
        </>
    )
    return [SelectCoins]
}

