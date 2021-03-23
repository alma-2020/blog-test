import React, { 
    FC,
    useEffect, 
    useState,
    useRef,
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
    Icon?: FC<{ size: number }>;
}

interface MenuProps {
    items: MenuItems[];
};

const menuItems: MenuItems[] = [
    { 
        label: 'Home', 
        link: '/', 
        Icon: ({ size }) => (<MdHome size={size} />), 
    },
    { 
        label: 'Something', 
        link: '/', 
        Icon: ({ size }) => (<MdList size={size} />),
    },
    { 
        label: 'About us', 
        link: '/', 
        Icon: ({ size }) => (<MdInfo size={size} />), 
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
    
    const menuRef = useRef();
    const overlayRef = useRef();

    const handleMenuScroll = (e: TouchEvent|WheelEvent) => {
        if (isSidebarOpen) {
            // prevent scroll
            e.preventDefault();
        }
    };
    
    const handleOverlayScroll = (e: TouchEvent|WheelEvent) => {
        if (isSidebarOpen) {
            // prevent scroll
            e.preventDefault();
        }
    };
    
    useEffect(() => {
        const menu: HTMLDivElement = menuRef.current;
        const overlay: HTMLDivElement = overlayRef.current;

        menu.addEventListener('touchmove', handleMenuScroll, { 
            passive: false 
        });

        menu.addEventListener('wheel', handleMenuScroll, { 
            passive: false 
        });

        overlay.addEventListener('touchmove', handleOverlayScroll, { 
            passive: false 
        });

        overlay.addEventListener('wheel', handleOverlayScroll, { 
            passive: false 
        });
    });

    return (
        <MobileMenuDiv>
            <OpenMenuButton
                onClick={() => setIsSidebarOpen(true)}
            >
                <MdMenu size={40} />
            </OpenMenuButton>
        
            <Menu 
                isOpen={isSidebarOpen}
                ref={menuRef}
            >
                <CloseMenuButton
                    onClick={() => setIsSidebarOpen(false)}
                >
                    <MdClose size={50} />
                </CloseMenuButton>

                <MenuContent>
                    {items.map((item, i) => (
                        <MenuContentItem 
                            key={i}
                            onClick={() => setIsSidebarOpen(false)}
                        >
                            <Link href={item.link} >
                                <a style={{ width: '100%' }}>
                                    {(typeof item.Icon !== 'undefined') && (
                                        <item.Icon size={25} />
                                    )}

                                    {item.label}
                                </a>
                            </Link>
                        </MenuContentItem>
                    ))}
                </MenuContent>
            </Menu>

            <Overlay 
                show={isSidebarOpen}
                onClick={() => setIsSidebarOpen(false)} 
                ref={overlayRef}
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
                        <a>
                            {/*
                            {(typeof item.Icon !== 'undefined') && (
                                <item.Icon size={25} />
                            )}
                            */}
                            
                            {item.label}
                        </a>
                    </Link>
                </DesktopMenuItem>
            ))}
        </DesktopMenuDiv>
    );
};

export default Navbar;