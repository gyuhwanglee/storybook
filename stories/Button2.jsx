import React from 'react';
import { ButtonData } from '../asset/data/ButtonData';
import styled from 'styled-components';
import PropTypes from 'prop-types';

export function Button2({
  name,
  buttonName,
  isCheck,
  handleButtonClick,
  IconDirection,
  iconUrl,
  ...props
}) {
  const ButtonItem = ButtonData.find(item => item.name === name);

  return (
    <ButtonComponent
      disabled={!isCheck}
      isCheck={isCheck}
      buttonItem={ButtonItem}
      onClick={handleButtonClick}
    >
      {IconDirection === 'Left' && (
        <img src={iconUrl} alt="icon" className="IconLeft" />
      )}
      {buttonName}
      {IconDirection === 'Right' && (
        <img src={iconUrl} alt="icon" className="IconRight" />
      )}
    </ButtonComponent>
  );
}

const ButtonComponent = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${({ buttonItem }) => buttonItem.width};
  height: ${({ buttonItem }) => buttonItem.height};
  padding: ${({ buttonItem }) =>
    buttonItem.paddingTopBottom + ' ' + buttonItem.paddingLeftRight};
  background: ${({ isCheck, theme, buttonItem }) =>
    isCheck
      ? theme.Color[buttonItem.background]
      : theme.Color[buttonItem.backgroundIsCheck]};
  outline: ${({ theme, buttonItem }) =>
    buttonItem.border !== 'none'
      ? `1.5px solid ${theme.Color[buttonItem.border]}`
      : 'none'};
  border-radius: 10px;
  border: none;
  outline-offset: -1.5px;
  box-sizing: border-box;
  color: ${({ theme, buttonItem }) => theme.Color[buttonItem.textColor]};
  font: ${props => props.theme.Font.h5Regular_2};
  text-align: center;
  letter-spacing: ${props => props.theme.letterSpacing.h5Regular_2};
  letter-spacing: -0.02em;
  .IconLeft {
    margin-right: 9px;
  }
  .IconRight {
    margin-left: 9px;
  }
  cursor: ${({ isCheck }) => (isCheck ? 'pointer' : '')};
  &:hover {
    background: ${({ isCheck, theme, buttonItem }) =>
      isCheck
        ? theme.Color[buttonItem.backgroundHover]
        : theme.Color[buttonItem.backgroundHoverIsCheck]};
  }
  &:active {
    background: ${({ isCheck, theme, buttonItem }) =>
      isCheck
        ? theme.Color[buttonItem.backgroundActive]
        : theme.Color[buttonItem.backgroundActiveIsCheck]};
    color: ${({ theme, buttonItem }) =>
      theme.Color[buttonItem.textColorActive]};
  }
  @media ${props => props.theme.deviceSize.mobile} {
    width: ${({ buttonItem }) => buttonItem.witdhMobile};
    height: ${({ buttonItem }) => buttonItem.heightMobile};
    padding: ${({ buttonItem }) =>
      buttonItem.paddingMobileTopBottom +
      ' ' +
      buttonItem.paddingMobileLeftRight};
  }
`;
Button2.propTypes = {
  name: PropTypes.oneOf([
    'buttonPrimaryLfixed',
    'buttonPrimarySmall',
    'buttonDangerSmall',
    'buttonPrimaryBig',
  ]),

  buttonName: PropTypes.string.isRequired,

  isCheck: PropTypes.bool,
  // /**
  //  * Is this the principal call to action on the page?
  //  */
  // primary: PropTypes.bool,
  // /**
  //  * What background color to use
  //  */
  // backgroundColor: PropTypes.string,
  // /**
  //  * How large should the button be?
  //  */
  // size: PropTypes.oneOf(['small', 'medium', 'large']),
  // /**
  //  * Button contents
  //  */
  // label: PropTypes.string.isRequired,
  // /**
  //  * Optional click handler
  //  */
  // onClick: PropTypes.func,
};

Button2.defaultProps = {
  buttonName: 'button',
  isCheck: true,
};
