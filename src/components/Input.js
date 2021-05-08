import React from 'react';

import styled from 'styled-components/native';

const Input = ({borderColor}) => {
    return (
        <StyledInput placeholder="Enter a text..." placeholderTextColir="#3498db" borderColor={borderColor} />
    );
};

const StyledInput = styled.TextInput.attrs(props => ({ // attrs 는 props로 전달된 값에 따라 컴포넌티 디자인 변경
    placeholder: 'Enter a text...',
    placeholderTextColor:props.borderColor,
}))`
  width:200px;
  height: 60px;
  margin:5px;
  padding:10px;
  border-radius: 10px;
  border:2px;
  border-color:${props => props.borderColor};
  font-size:24px;
`;
export default Input;
