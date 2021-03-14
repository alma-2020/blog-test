import React, { 
    FC,
    useEffect, 
    useState,
} from 'react'
import Link from 'next/link'
import { useMediaQuery } from 'react-responsive'
import { 
    NavbarDiv, 
    OpenMenuButton, 
    CloseMenuButton,
    Menu,
    Overlay,
} from '../styles/navbarStyles'

const Navbar: FC = () => {
    

    const isTabletOrMobile = useMediaQuery({
        maxWidth: 1224,
    });

    

    return (
        <NavbarDiv>
            <Link href="/">
                <a className="title">
                    A COOL BLOG
                </a>
            </Link>

            {(isTabletOrMobile && (
                <MobileMenu />
            ))}
        </NavbarDiv>
    );
};

const MobileMenu: FC = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    
    useEffect(() => {
        if (typeof document === 'undefined')
            return;

        if (isSidebarOpen) {
            document.body.style.overflowY = 'hidden';
        }
        else {
            document.body.style.overflowY = 'unset';
        }
    }, [isSidebarOpen]);

    return (
        <div>
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
            </Menu>

            <Overlay show={isSidebarOpen} />
        </div>
    );
};

export default Navbar;