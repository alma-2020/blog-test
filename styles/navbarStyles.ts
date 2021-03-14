import styled, { css } from 'styled-components'

interface MenuProps {
    isOpen: boolean;
} 

interface OverlayProps {
    show: boolean;
}

export const NavbarDiv = styled.div`
    position: relative;
    width: 100%;
    min-height: 80px;
    margin-bottom: 10px;
    display: flex;
    align-items: center; 
    justify-content: space-between;
    flex-direction: row;
    background-color: #fafafa;
    box-shadow: #a7a7a7 0px 0px 5px 0.5px;
    padding-left: 30px;
    padding-right: 30px;

    a.title {
        color: #f06291;
        font-size: 25px;
    }
`;

export const OpenMenuButton = styled.button`
    border: none;
    padding: 15px 20px;
    color: white;
    background-color: #f06291;
    border-radius: 8px;
    box-shadow: gray 0px 0px 10px 0.5px;
    font-size: 18px;
    outline: none;

    &:active {
        background-color: #f48fb0;
    }
`;

export const CloseMenuButton = styled.button`
    display: flex;
    margin-left: auto;
    margin-right: 30px;
    margin-top: 0px;
    border: none;
    border-radius: 4px;
    background: #f06291;
    color: white;
    padding: 8px;
    font-size: 35px;
    padding: 20px;
    outline: none;
`;

export const Menu = styled.div<MenuProps>`
    position: fixed;
    background: #f06291;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    transform: translateX(100%);
    transition: transform 0.3s ease-in-out;
    z-index: 3;
    
    ${(props) => (props.isOpen && css`
        transform: translateX(0%);
    `)}
`;

export const Overlay = styled.div<OverlayProps>`
    position: fixed;
    background: black;
    height: 0;
    width: 0;
    top: 0;
    left: 0;
    opacity: 0;
    transition: opacity 0.3s linear;

    ${(props) => (props.show && css`
        opacity: 0.6;
        width: 100%;
        height: 100%;
    `)}
`;