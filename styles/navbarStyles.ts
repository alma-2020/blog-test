import styled, { css } from 'styled-components'

interface MenuProps {
    isOpen: boolean;
} 

interface OverlayProps {
    show: boolean;
}

const MOBILE_MENU_WIDTH = '70%'; 

//const MENU_BACKGROUND_COLOR = '#f48fb1';
const MENU_BACKGROUND_COLOR = 'whitesmoke';
//const CLOSE_MENU_COLOR = 'white';
const CLOSE_MENU_COLOR = '#f48fb1';

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
        display: flex;
        flex-direction: row;
    }
`;


export const DesktopMenuItem = styled.div`
    user-select: none;
    margin-left: 10px;

    a {
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 20px;
        color: #f48fb1;
        background-color: unset;
        padding: 12px;
        border-radius: 3px;
        text-decoration: none;
        transition: text-decoration .2s linear, 
                    color .2s linear, 
                    background-color .2s linear;
    }

    a:hover {
        text-decoration: underline;
        background-color: #f48fb1;
        color: white;
    }

    svg {
        margin-right: 5px;
    }
`;

export const OpenMenuButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    //padding: 5px 25px;
    padding: 5px 10px;
    color: #f48fb1;
    background-color: #fafafa;
    //color: white;
    //background-color: #f48fb1;
    //border-radius: 8px;
    //box-shadow: #c6c6c6 0px 0px 10px 0.5px;
    font-size: 18px;
    outline: none;

    /*
    &:active {
        background-color: #f48fb0;
    }
    */
`;

export const CloseMenuButton = styled.button`
    display: flex;
    margin-left: auto;
    //margin-right: 30px;
    margin-top: 0px;
    border: none;
    border-radius: 4px;
    background: ${MENU_BACKGROUND_COLOR};
    color: ${CLOSE_MENU_COLOR};
    padding-top: 15px;
    padding-bottom: 20px;
    padding-left: 20px;
    padding-right: 30px;
    font-size: 35px;
    outline: none;
`;

export const Menu = styled.div<MenuProps>`
    position: fixed;
    background: ${MENU_BACKGROUND_COLOR};
    height: 200%;
    width: ${MOBILE_MENU_WIDTH};
    margin: 0;
    top: 0;
    //left: 0;
    right: 0;
    transform: translateX(100%);
    transition: box-shadow 0.3s linear, transform 0.3s ease-in-out;
    z-index: 3;
    
    ${(props) => (props.isOpen && css`
        transform: translateX(0%);
        box-shadow: gray 0px 0px 10px 1px;
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
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    user-select: none;
    margin-bottom: 10px;
    width: 200px;
    height: 50px;
    box-shadow: #bf5f82 0px 0px 3px 0.5px;
    border-radius: 4px;
    max-width: 90%;

    a {
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 4px;
        width: 200px;
        height: 50px;
        padding: 12px;
        background: #bf5f82;
        color: white;
        width: 100%;
    }

    svg {
        margin-right: 5px;
    }
`;

export const Overlay = styled.div<OverlayProps>`
    pointer-events: none; // make use click through this element
    position: fixed;
    background: black;
    height: 200%;
    width: 100%;
    top: 0;
    left: 0;
    opacity: 0;
    transition: opacity 0.3s linear;

    ${(props) => (props.show && css`
        opacity: 0.6;
        pointer-events: unset;
    `)}
`;