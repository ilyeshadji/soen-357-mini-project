import React, {useMemo} from 'react'
import styled from 'styled-components'
import {useScrollInfo} from "../hooks/useScrollInfo";
import logo from '../assets/logo.png'
import {Link, useNavigate} from "react-router-dom";

export default function Header() {
    const navigate = useNavigate();

    const [direction, y] = useScrollInfo();

    const hideNavBar = useMemo(() => {
        return y < 20;
    }, [direction, y]);

    function redirect(url, section) {
        navigate(url, {
            state: {
                section: section,
            },
        });
    }

    return (
        <Container out={hideNavBar}>
            <LogoContainer>
                <Image
                    src={logo}
                    alt="logo"
                    onClick={() => navigate('/')}
                />
            </LogoContainer>

            <LinksContainer>
                <ListItems
                    onClick={() =>
                        redirect('/', 'UNDERSTANDING_THE_PROBLEM')
                    }
                >
                    <StyledLink out={hideNavBar}>Understanding the problem</StyledLink>
                </ListItems>

                <ListItems
                    onClick={() =>
                        redirect('/', 'RESEARCH')
                    }
                >
                    <StyledLink out={hideNavBar}>Research</StyledLink>
                </ListItems>

                <ListItems
                    onClick={() =>
                        redirect('/', 'USER_RESEARCH')
                    }
                >
                    <StyledLink out={hideNavBar}>User Research</StyledLink>
                </ListItems>

                <ListItems
                    onClick={() =>
                        redirect('/', '')
                    }
                >
                    <StyledLink out={hideNavBar}>Visual Design</StyledLink>
                </ListItems>

                <ListItems
                    onClick={() =>
                        redirect('/', '')
                    }
                >
                    <StyledLink out={hideNavBar}>Research</StyledLink>
                </ListItems>
            </LinksContainer>
        </Container>
    )
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${props => props.out ? 'white' : 'dodgerblue'};
  position: sticky;
  top: 0;
  transition: background-color .4s ease-in-out;

  padding: 20px;
`

const LogoContainer = styled.div``

const LinksContainer = styled.div`
  display: flex;
  align-items: center;
`

const Image = styled.img`
  object-fit: contain;
  height: 70px;
  margin: 0 50px 0 20px;

  &:hover {
    cursor: pointer;
  }
`;

const ListItems = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 50px;

  height: 100%;

  &:hover {
    border-bottom: 4px solid white;
    cursor: pointer;
  }
`;

const StyledLink = styled(Link)`
  text-transform: uppercase;
  color: ${props => props.out ? 'grey' : 'white'};
  text-decoration: none;
  justify-content: center;
  align-items: center;
`;
