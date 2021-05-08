import React, {useState} from 'react';
import styled from 'styled-components/native';
// import {viewStyles,textStyles } from './styles'
// import {Contents, Footer, Header} from "./components/layout";
// import ShadowBox from "./components/ShadowBox";

import StyledTextButton from './components/StyledTextButton';
import Input from "./components/Input";
import {ThemeProvider} from "styled-components/native";
import {lightTheme, darkTheme} from './components/theme';
import {Switch} from "react-native";

const App = () => {
    const [isDark, setIsDark] = useState(false);
    const _toggleSwitch = () => setIsDark(!isDark);
    return (
        <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
            {/*
                ThemeProvider 는 styled-component 에서 제공해주는 컴포넌트이다.
                Context API를 활용해 애플리케이션 전체에서 styled-component 를 이용할 때 미리 정의한 값들을 사용 할 수 있도록 props 로 전달한다.

                styled-component 를 활용할 때 ThemeProvider 를 활용하여 theme 를 지정하면, 하나의 파일에서 미리 정의해둔 색을 하위 컴포넌트에서 사용할 수 있다.
                하나의 파일에서 모든 색을 관리하면 색의 사용이나 변경 등 유지보수에서 많은 이점을 얻을 수 있다.

                ThemeProvider 를 이용하여 두 개의 색을 정의해두고 사용자의 선택에 따라 theme에 알 맞은 값을 설정하는 것만으로 애플리케이션의 색테마를 쉽게 변경할 수 있다.
            */}
            <Container>
                <Switch value={isDark} onValueChange={_toggleSwitch} />
                {/*<Header />*/}
                {/*<Contents />*/}
                {/*<Footer />*/}
                {/*<ShadowBox />*/}
                <StyledTextButton title="Hanbit" />
                <StyledTextButton title="React native" />
                <Input borderColor={"#3498db"} />
                <Input borderColor={"#9b59b6"} />
            </Container>
        </ThemeProvider>
    );
};

const Container = styled.View`
  flex:1;
  background-color:${props => props.theme.background};
  align-items: center;
  justify-content: center;
`



export default App;
