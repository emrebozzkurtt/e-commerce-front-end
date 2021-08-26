import React from 'react'
import { Dropdown } from 'semantic-ui-react'

export default function SignIn(props) {
    return (
        <div>
            <Dropdown icon="user" pointing="top left" text="Emre BOZKURT">
                <Dropdown.Menu>
                    <Dropdown.Item text="Bilgilerim" icon="info" />
                    <Dropdown.Item onClick={props.signOut} text="Çıkış Yap" icon="sign-out" />
                </Dropdown.Menu>
            </Dropdown>
        </div>
    )
}
