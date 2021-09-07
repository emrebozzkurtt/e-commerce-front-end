import React, { useState } from 'react'
import { useHistory } from 'react-router'
import { Dropdown, Menu, Search } from 'semantic-ui-react'
import CartSummary from './CartSummary'
import SignIn from './SignIn'
import SignOut from './SignOut'

export default function Navi() {

    const [isAuthanticated, setIsAuthanticated] = useState(true)

    let history = useHistory()
    function handleSignOut() {
        setIsAuthanticated(false);
        history.push("/");
    }

    function handleSignIn() {
        setIsAuthanticated(true);
    }

    let goHome = useHistory()
    function homeButton(){
        goHome.push("/");
    }

    let value;
    return (
        <div>
            <Menu size='huge'>
                <Menu.Item onClick={homeButton} name="Home"/>
                <Menu.Item>
                    <Search className='icon' icon='search' placeholder='Ürün Ara...' value={value}></Search>
                </Menu.Item>
                <Menu.Item className="companyName">LastLife Company</Menu.Item>
                <Menu.Menu position='right'>
                    <Menu.Item>
                        <CartSummary></CartSummary>
                    </Menu.Item>
                    <Menu.Item>
                        {
                             isAuthanticated?<SignIn signOut={handleSignOut}/>
                             :<SignOut signIn={handleSignIn}/>
                        }
                    </Menu.Item>
                    <Dropdown item text='Language'>
                        <Dropdown.Menu>
                            <Dropdown.Item>Turkish</Dropdown.Item>
                            <Dropdown.Item>English</Dropdown.Item>
                            <Dropdown.Item>Spanish</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </Menu.Menu>
            </Menu>

        </div>
    )
}
