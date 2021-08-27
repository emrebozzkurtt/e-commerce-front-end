import React from 'react'
import { Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import { Grid } from 'semantic-ui-react'
import CategoryList from '../pages/CategoryList'
import ProductList from '../pages/ProductList'
import ProductDetails from '../pages/ProductDetails'
import Categories from './Categories'

export default function Dashboard() {
    return (
        <div>
            <ToastContainer position="bottom-right"/>
            <Grid>
                <Grid.Row>
                    <Grid.Column width={3}>
                        <CategoryList/>
                    </Grid.Column>
                    <Grid.Column width={13}>
                        <Route exact path="/" component={ProductList}/>
                        <Route exact path="/products" component={ProductList}/>
                        <Route path="/products/1" component={ProductDetails}/>
                    </Grid.Column>
                </Grid.Row>
            </Grid>

        </div>
    )
}
