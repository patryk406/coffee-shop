import React from "react"
import Title from "../Title"

export default function Contact() {
  return (
    <section className="contact py-5">
      <Title title="Contact Us" />
      <div className="row">
        <div className="col-10 col-sm-8 col-md-6 mx-auto">
          <form
            action="https://formspree.io/patrykklobus@gmail.com"
            method="post"
          >
            {/* name */}
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                className="form-control"
                name="name"
                id="name"
                placeholder="Merph"
              />
            </div>
            {/* email */}
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                className="form-control"
                name="email"
                id="email"
                placeholder="Merph@gmail.com"
              />
            </div>
            {/* Description */}
            <div className="form-group">
              <label htmlFor="description">Description</label>
              <textarea
                name="description"
                id="description"
                className="form-control"
                rows="5"
                placeholder="your description here"
              ></textarea>
            </div>
            {/* submit */}
            <button
              type="submit"
              className="btn btn-yellow btn-block text-capitalize mt-5"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
