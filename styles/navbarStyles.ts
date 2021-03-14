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
        color: #f48fb1;
        font-size: 25px;
    }
`;

export const MobileMenuDiv = styled.div`
    display: none;
    
    @media only screen and (max-width: 1224px) {
        display: unset;
    }
`;

export const DesktopMenuDiv = styled.div`
    display: none;

    @media only screen and (min-width: 1225px) {
        display: unset;
    }
`;

export const OpenMenuButton = styled.button`
    border: none;
    padding: 15px 20px;
    color: white;
    background-color: #f48fb1;
    border-radius: 8px;
    box-shadow: #c6c6c6 0px 0px 10px 0.5px;
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
    background: #f48fb1;
    color: white;
    padding: 8px;
    font-size: 35px;
    padding: 20px;
    outline: none;
`;

export const Menu = styled.div<MenuProps>`
    position: fixed;
    background: #f48fb1;
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

export const MenuContent = styled.div`
    height: 100%;
    width: 100%;
    flex: 1;
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-top: 20px;
`;

export const MenuContentItem = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    user-select: none;
    margin-bottom: 10px;
    width: 200px;
    height: 50px;
    box-shadow: #bf5f82 0px 0px 3px 1px;
    border-radius: 4px;

    a {
        border-radius: 4px;
        width: 200px;
        height: 50px;
        padding: 12px;
        background: #bf5f82;
        color: white;
        width: 100%;
    }
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