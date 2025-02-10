import { useEffect, useState } from 'react';
import './App.css';
import Restaurant from './components/restaurant/Restaurant';
import Counter from './components/counter/Counter';

const App = () => {
  const [restaurant, setRestaurant] = useState({
    name: "Katana",
    address: "вулиця Олександра Борисенка, 1, Рівне, Україна",
    rating: "4.3",
    cuisine: "Японська, Суші",
    imgURL: "https://lh3.googleusercontent.com/p/AF1QipNGEnc2HJGnWtb52O2O31Bk9QpV2xtMCVasyEw=s680-w680-h510"
  })

  const changeRestaurantNameHandler = () => {
    const name = document.getElementById("restaurantName").value
    document.getElementById("restaurantName").value = ""
    if (name) {
      setRestaurant({...restaurant, name: name})
      localStorage.setItem("restaurant", JSON.stringify({...restaurant, name: name}))
    }
  }

  const changeRestaurantAddressHandler = () => {
    const address = document.getElementById("restaurantAddress").value
    document.getElementById("restaurantAddress").value = ""
    if (address) {
      setRestaurant({...restaurant, address: address})
      localStorage.setItem("restaurant", JSON.stringify({...restaurant, address: address}))
    }
  }

  const changeRestaurantRatingHandler = () => {
    const rating = document.getElementById("restaurantRating").value
    document.getElementById("restaurantRating").value = ""
    if (rating) {
      setRestaurant({...restaurant, rating: rating})
      localStorage.setItem("restaurant", JSON.stringify({...restaurant, rating: rating}))
    }
  }

  const changeRestaurantCuisineHandler = () => {
    const cuisine = document.getElementById("restaurantCuisine").value
    document.getElementById("restaurantCuisine").value = ""
    if (cuisine) {
      setRestaurant({...restaurant, cuisine: cuisine})
      localStorage.setItem("restaurant", JSON.stringify({...restaurant, cuisine: cuisine}))
    }
  }

  const changeRestaurantImageHandler = () => {
    const image = document.getElementById("restaurantImage").value
    document.getElementById("restaurantImage").value = ""
    if (image) {
      setRestaurant({...restaurant, imgURL: image})
      localStorage.setItem("restaurant", JSON.stringify({...restaurant, imgURL: image}))
    }
  }

  useEffect(() => {
    const restaurant = localStorage.getItem("restaurant")
    if (restaurant) {
      const data = JSON.parse(restaurant)
      setRestaurant(data)
    }
  }, [])



  const [counterValue, setCounterValue] = useState(0)

  const changeValueHandler = () => {
    const value = counterValue + Number(document.getElementById('value').value)
    setCounterValue(value)
    localStorage.setItem("counterValue", value)
  }

  useEffect(() => {
    const value = localStorage.getItem("counterValue")
    if (value) {
      setCounterValue(value)
    }
  }, [])



  return (
    <>
      <Restaurant restaurant={restaurant} changeName={changeRestaurantNameHandler} changeAddress={changeRestaurantAddressHandler} changeRating={changeRestaurantRatingHandler} changeCuisine={changeRestaurantCuisineHandler} changeImage={changeRestaurantImageHandler} />
      <Counter value={counterValue} changeValue={changeValueHandler}/>
    </>
  );
}

export default App;