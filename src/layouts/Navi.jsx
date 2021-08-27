import React, { useState } from 'react'
import { Dropdown, Input, Menu } from 'semantic-ui-react'
import CartSummary from './CartSummary'
import SignIn from './SignIn'
import SignOut from './SignOut'

export default function Navi() {

    const [isAuthanticated, setIsAuthanticated] = useState(true)

    //let history = useHistory()
    function handleSignOut() {
        setIsAuthanticated(false);
        //history.push("/");
    }

    function handleSignIn() {
        setIsAuthanticated(true);
    }

    return (
        <div>
            <Menu size='huge'>
                <Menu.Item name="Home"/>
                <Menu.Item>
                    <Input className='icon' icon='search' placeholder='Ürün Ara...' />
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
