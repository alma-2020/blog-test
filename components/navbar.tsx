import React, { 
    FC,
    useEffect, 
    useState,
} from 'react'
import Link from 'next/link'
import { 
    MdMenu, 
    MdClose, 
    MdHome,
    MdList,
    MdInfo,
} from 'react-icons/md'
import { 
    NavbarDiv, 
    OpenMenuButton, 
    CloseMenuButton,
    Menu,
    MenuContent,
    MenuContentItem,
    MobileMenuDiv,
    DesktopMenuDiv,
    DesktopMenuItem,
    Overlay,
} from '../styles/navbarStyles'

interface MenuItems {
    label: string; 
    link: string;
    icon?: () => JSX.Element;
}

interface MenuProps {
    items: MenuItems[];
};

const menuItems: MenuItems[] = [
    { 
        label: 'Home', 
        link: '/', 
        icon: () => (<MdHome size={25} />), 
    },
    { 
        label: 'Something', 
        link: '/', 
        icon: () => (<MdList size={25} />),
    },
    { 
        label: 'About us', 
        link: '/', 
        icon: () => (<MdInfo size={25} />), 
    },
];

const Navbar: FC = () => {    
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
                <MdMenu size={40} />
            </OpenMenuButton>
        
            <Menu isOpen={isSidebarOpen}>
                <CloseMenuButton
                    onClick={() => setIsSidebarOpen(false)}
                >
                    <MdClose size={50} />
                </CloseMenuButton>

                <MenuContent>
                    {items.map((item, i) => (
                        <MenuContentItem 
                        key={i}
                        onClick={handleLinkClick}
                        >
                            <Link href={item.link} >
                                <div style={{ width: '100%' }}>
                                    {(typeof item.icon !== 'undefined') && (
                                        item.icon()
                                    )}
                                    {item.label}
                                </div>
                            </Link>
                        </MenuContentItem>
                    ))}
                </MenuContent>
            </Menu>

            <Overlay 
                show={isSidebarOpen}
                onClick={() => setIsSidebarOpen(false)} 
            />
        </MobileMenuDiv>
    );
};

const DesktopMenu: FC<MenuProps> = ({ items }) => {
    return (
        <DesktopMenuDiv>
            {items.map((item, i) => (
                <DesktopMenuItem key={i}>
                    <Link href={item.link}>
                        <div>
                            {item.label}
                        </div>
                    </Link>
                </DesktopMenuItem>
            ))}
        </DesktopMenuDiv>
    );
};

export default Navbar;