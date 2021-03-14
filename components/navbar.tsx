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
    Overlay,
} from '../styles/navbarStyles'

const Navbar: FC = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    return (
        <NavbarDiv>
            <Link href="/">
                <a className="title">
                    A COOL BLOG
                </a>
            </Link>

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
        </NavbarDiv>
    );
};

export default Navbar;