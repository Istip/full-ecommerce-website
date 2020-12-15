import React from "react"
import { Grid } from "@material-ui/core"
import Product from "./Product/Product"

import useStyles from "./styles"

const products = [
  {
    id: 1,
    name: "Shoes",
    description: "Running shoes",
    price: "$5",
    image:
      "https://image.freepik.com/free-photo/fashion-running-sneaker-shoes-isolated-white-background_47469-429.jpg",
  },
  {
    id: 2,
    name: "MacBook",
    description: "Apple MacBook",
    price: "$10",
    image:
      "https://i.pinimg.com/originals/54/e0/d5/54e0d544d785d079ec4d9ecef235b160.jpg",
  },
]

const Products = () => {
  const classes = useStyles()

  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />
      <Grid container justify='center' spacing={4}>
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
            <Product product={product} />
          </Grid>
        ))}
      </Grid>
    </main>
  )
}

export default Products
