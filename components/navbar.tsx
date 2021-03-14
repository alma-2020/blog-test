import React, { 
    FC,
    useEffect, 
    useState,
} from 'react'
import Link from 'next/link'
import { 
    NavbarDiv, 
    OpenMenuButton, 
    CloseMenuButton,
    Menu,
    MenuContent,
    MenuContentItem,
    MobileMenuDiv,
    DesktopMenuDiv,
    Overlay,
} from '../styles/navbarStyles'

interface MenuItems {
    label: string; 
    link: string;
}

interface MenuProps {
    items: MenuItems[];
};

const Navbar: FC = () => {
    const menuItems: MenuItems[] = [
        { label: 'Home', link: '/' },
        { label: 'About us', link: '/' },
    ];
    
    return (
        <NavbarDiv>
            <Link href="/">
                <a className="title">
                    A COOL BLOG
                </a>
            </Link>

            <MobileMenu items={menuItems} />
            <DesktopMenu items={menuItems} />
        </NavbarDiv>
    );
};

const MobileMenu: FC<MenuProps> = ({ items }) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    
    const handleLinkClick = () => {
        setIsSidebarOpen(false);
    };

    return (
        <MobileMenuDiv>
            <OpenMenuButton
                onClick={() => setIsSidebarOpen(true)}
            >
                MENU
            </OpenMenuButton>
        
            <Menu isOpen={isSidebarOpen}>
                <CloseMenuButton
                    onClick={() => setIsSidebarOpen(false)}
                >
                    X
                </CloseMenuButton>

                <MenuContent>
                    {items.map((item, i) => (
                        <MenuContentItem 
                            key={i}
                            onClick={handleLinkClick}
                            >
                            <Link href={item.link} >
                                {item.label}
                            </Link>
                        </MenuContentItem>
                    ))}
                </MenuContent>
            </Menu>

            <Overlay show={isSidebarOpen} />
        </MobileMenuDiv>
    );
};

const DesktopMenu: FC<MenuProps> = ({ items }) => {
    return (
        <DesktopMenuDiv>
            <p>Imagine um menu legal aqui</p>
        </DesktopMenuDiv>
    );
};

export default Navbar;