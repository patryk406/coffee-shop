import React from "react"
import Title from "../Title"
import { StaticQuery, graphQl } from "gatsby"
import Img from "gatsby-image"
const getProducts = graphql`
  {
    products: allContentfulCoffeeProduct {
      edges {
        node {
          id
          price
          title
          image {
            fluid(maxHeight: 230) {
              src
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`

export default function Product() {
  return (
    <StaticQuery
      query={getProducts}
      render={data => {
        return (
          <section className="py-5">
            <div className="container">
              <Title title="Our Products" />
              <div className="row">
                {data.products.edges.map(({ node: products }) => {
                  return (
                    <div className="col-10 col-sm-8 col-md-6 col-lg 4 mx-auto my-3">
                      <div className="card" style={{ minHeight: "100%" }}>
                        <Img
                          fluid={products.image.fluid}
                          className="card-image-top"
                        />
                        <div className="card-body text-center">
                          <h6>{products.title}</h6>
                          <h6>${products.price}</h6>
                          <button
                            type="button"
                            className="btn btn-yellow mt-3 text-capitalize"
                          >
                            Add to cart
                          </button>
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </section>
        )
      }}
    />
  )
}
