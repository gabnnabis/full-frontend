import React, { useContext } from "react";
import Switch from "react-switch";
import { ThemeContext } from "styled-components";
import { Container } from "./styles";

interface Props {
    toggleTheme(): void;
}

const NavBar: React.FC<Props> = ({toggleTheme}) => {

    const {colors, title}: any = useContext(ThemeContext);

    return(
        <Container>
           <Switch
                onChange={toggleTheme}
                checked={title === 'dark'}
                checkedIcon={false}
                uncheckedIcon={false}
                height={15}
                width={30}
                handleDiameter={20}
                offColor={colors.background}
                onColor={colors.secundary}
           /> 
        </Container>
    )
}

export default NavBar;