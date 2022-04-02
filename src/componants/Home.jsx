import React from 'react'
import Cards from './Cards'
import Slider from './Slider'
export default function Home() {
  let food = [
    {
      id: 1,
      title: 'makdonals',
      img: 'https://img.freepik.com/free-photo/big-hamburger-with-double-beef-french-fries_252907-8.jpg?size=626&ext=jpg'
      , price: "100$"
    },
    {
      id: 2,
      title: 'pasta',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmDyPu_V3kH7PmYjIi0Hb8y0kOj4eOGY_ITF6Hboq21oQC9VQcrKfSzu8vMu5yUwFTgsk&usqp=CAU'
      , price: "120$"
    },
    {
      id: 3,
      title: 'hot dog',
      img: 'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/processed-food700-350-e6d0f0f.jpg?quality=90&resize=556,505'
      , price: "90$"
    },
    {
      id: 4,
      title: 'donats',
      img: 'https://www.arobasecafe.com/wp-content/uploads/2021/10/Desserts.jpg'
      , price: "20$"
    },
    {
      id: 5,
      title: 'ice cream',
      img: 'https://www.seriouseats.com/thmb/BfGrh3TAetc9bxwp5wave8LsJpo=/450x0/filters:no_upscale():max_bytes(150000):strip_icc()/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__recipes__images__2016__08__20160714-vanilla-pudding-pops-vicky-wasik-18-f2433aa1471046119153c8ec7b7bc4c4.jpg'
      , price: "10$"
    },
    {
      id: 6,
      title: 'coocies',
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrq_2BHRHYzbKsOv_zXiX1AhG12rnBBCnLltIr8YhDIt3F3w9-laqnOoifLIar4EzmSzg&usqp=CAU'
      , price: "50$"
    },
  ]
  return (
    <>
      <Slider></Slider>
      <div className='mt-5 p-5  d-flex flex-wrap'>
        {
          food.map((item, index) => {
            return (
              <Cards key={item.id} title={item.title} img={item.img} price={item.price} />
            )
          })
        }
      </div>
    </>
  )
}
