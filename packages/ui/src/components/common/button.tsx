import {useState} from 'react';
import { StyledButton, StyledRoundButton } from 'styled';

const Button = (): JSX.Element => {
  const [variant, setVariant] = useState<'primary'|'secondary'>('primary');
  const [rVariant, setRVariant] = useState<'primary'|'secondary'>('primary');

  const btnClick = () => {
    variant === 'primary' ? setVariant('secondary') : setVariant('primary');
  }

  const btnRoundClick = () => {
    rVariant === 'primary' ? setRVariant('secondary') : setRVariant('primary');
  }

  return (
    <>
      <StyledButton variant={variant} onClick={btnClick}>Click me!</StyledButton>
      <StyledRoundButton variant={rVariant} onClick={btnRoundClick}>Click me!</StyledRoundButton>
    </>
  )
};

export { Button };