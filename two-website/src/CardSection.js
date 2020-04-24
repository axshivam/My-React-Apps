import React from "react"
import Card from "./Card"

const CardSection = () => (
  <section className="contact bg-success ">
    <div className="container ">
      <h2 className="text-white">
        We love new friends!
      </h2>
      <div className="row">
        <Card/>
        <Card title="Deepak" button="Shiv"/>
        <Card title="Ram ji"/>
      </div>
    </div>
  </section>
);

export default CardSection;
