import '../restaurant/style.css'

const Restaurant = ({ restaurant, changeName, changeAddress, changeRating, changeCuisine, changeImage }) => {
    const { name, address, rating, cuisine, imgURL = "" } = restaurant

    return (
        <div class="restaurantContainer">
            <div class="image">
                <img src={imgURL}></img>
                <div class="restaurantItem">
                    <input id="restaurantImage" placeholder='change image URL'></input>
                    <button onClick={changeImage}>Change</button>
                </div>
            </div>
            <div>
                <div class="restaurantItem">
                    <h3>Назва: {name}</h3>
                    <div>
                        <input id="restaurantName" placeholder='change name'></input>
                        <button onClick={changeName}>Change</button>
                    </div>
                </div>
                <div class="restaurantItem">
                    <p>Адреса: {address}</p>
                    <div>
                        <input id="restaurantAddress" placeholder='change address'></input>
                        <button onClick={changeAddress}>Change</button>
                    </div>
                </div>
                <div class="restaurantItem">
                    <p>Рейтинг: {rating}</p>
                    <div>
                        <input id="restaurantRating" placeholder='change rating'></input>
                        <button onClick={changeRating}>Change</button>
                    </div>
                </div>
                <div class="restaurantItem">
                    <p>Тип кухні: {cuisine}</p>
                    <div>
                        <input id="restaurantCuisine" placeholder='change cuisine'></input>
                        <button onClick={changeCuisine}>Change</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Restaurant