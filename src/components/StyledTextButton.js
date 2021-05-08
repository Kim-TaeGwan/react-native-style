import React from 'react';

import styled from 'styled-components/native';

const StyledTextButton = ({title}) => {
    return (
        <ButtonContainer title={title}>
            <Title>{title}</Title>
        </ButtonContainer>
    );
};

// TouchableOpacity 는 터치시 버튼 깜빡임(opacity)
const ButtonContainer = styled.TouchableOpacity`
    background-color: ${(props) => props.title === "Hanbit" ? props.theme.blue : props.theme.purple};
    border-radius: 15px;
    padding: 15px 40px;
    margin: 10px 0px;
    justify-content: center;
`

const Title = styled.Text`
  font-size: 20px;
  font-weight: 600;
  color:${props => props.theme.text};
`

export default StyledTextButton;
