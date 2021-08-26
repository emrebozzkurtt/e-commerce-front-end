import React from 'react'
import { Button, ButtonGroup } from 'semantic-ui-react'

export default function SignOut(props) {
    return (
        <div>
            <ButtonGroup>
                <Button onClick={props.signIn} primary style={{ borderBottomLeftRadius: '2em', borderTopLeftRadius: '2em' }}>Giriş Yap</Button>
                <Button.Or text='or' />
                <Button style={{ borderBottomRightRadius: '2em', borderTopRightRadius: '2em' }}>Kayıt Ol</Button>
            </ButtonGroup>
        </div>
    )
}
