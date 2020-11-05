import React from "react"
import { Link } from "gatsby"
import Title from "../Title"
export default function Info() {
  return (
    <section className="py-5">
      <div className="container">
        <Title title="our story" />
        <div className="row">
          <div className="col-10 col-sm-8 mx-auto text-center">
            <p className="lead text-muted mb-5">
              <span className="font-weight-bold">Coffee</span> is a popular
              brewed drink prepared from roasted coffee beans. Coffee plants are
              cultivated in over 70 countries, primarily in the equatorial
              regions of the Americas, Southeast Asia, India and Africa. Once
              ripe, coffee beans are picked, processed, and dried.
              <br />
              <span className="font-weight-bold">Green</span> (unroasted) coffee
              beans are one of the most traded agricultural commodities in the
              world. Once traded, the beans are roasted to varying degrees,
              depending on the desired flavor, before being ground and brewed to
              create coffee. The two most commonly grown coffee beans are the
              highly regarded arabica, and the less sophisticated but stronger
              and more hardy robusta.
            </p>
            <Link to="/about/">
              <button className="btn text-uppercase btn-yellow">
                about page
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
