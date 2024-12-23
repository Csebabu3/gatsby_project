import React from "react"
import Slider from "react-slick"
import { categoriesData } from "./categoriesData"
import Category from "./Category"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import "./categories.css"

function Categories() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  }

  const categories = categoriesData.map((category, index) => (
    <Category
      key={index}
      photoUrl={`${category.photoUrlBase}?w=1500&auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkf${index}fHx8fHw%3D`}
      description={category.description}
      heading={category.name}
    />
  ))

  return <Slider {...settings}>{categories}</Slider>
}

export default Categories
