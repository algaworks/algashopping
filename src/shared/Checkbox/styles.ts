import styled from 'styled-components'

export const Wrapper = styled.div`
  height: 32px;
  display: flex;
  cursor: pointer;
  align-items: center;
`

interface IndicatorProps {
  value?: boolean;
}

export const Indicator = styled.div<IndicatorProps>`
  width: 14px;
  height: 14px;
  cursor: pointer;
  margin-right: 8px;
  border-radius: 7px;
  border: 2px solid #004D61;
  background-color: ${({ value }) => value && '#004D61'};
`