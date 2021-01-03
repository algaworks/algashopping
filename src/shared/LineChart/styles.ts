import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  margin-bottom: 12px;
  flex-direction: column;

  span {
    font-size: 12px;
    color: #004D61;
    margin-bottom: 4px;
  }
`

interface ProgressBarProps {
  color?: string;
  percentage?: number;
}

export const ProgressBar = styled.div<ProgressBarProps>`
  height: 14px;
  border-radius: 3px;
  transition: .5s ease; 
  width: ${({ percentage }) => percentage || 0}%;
  background-color: ${({ color }) => color || '#004D61'};
`