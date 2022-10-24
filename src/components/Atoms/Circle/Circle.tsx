import styled from 'styled-components';

interface CircleProps {
  type: 'Solved' | 'High' | 'Low' | 'Medium'
}

export const Circle = (props : CircleProps) => {

  let color;

  switch (props.type) {
    case 'Solved': 
      color = '#25B860'
      break
    case 'High' : 
      color = '#B82525'
      break;
    case 'Medium':
      color = '#FF7F08'
      break
    case 'Low':
      color = '#E3C738'
    break
  }

  return (
    <Wrapper type={color}/>
  )
}

const Wrapper = styled.div<{ type: string }>`
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  background: ${props => props.type};
`