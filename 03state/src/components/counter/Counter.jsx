import '../counter/style.css'

const Counter = ({ value, changeValue }) => {
    
    function setValue(value_) {
        document.getElementById('value').value = value_
        changeValue()
    }
    
    return (
        <div class="counterContainer">
            <div>
                <input id='value' value={value} hidden></input>
                <button class="counter">{value}</button>
            </div>
            <div>
                <div>
                    <button onClick={() => setValue(1)}>+1</button>
                    <button onClick={() => setValue(5)}>+5</button>
                    <button onClick={() => setValue(10)}>+10</button>
                    <button onClick={() => setValue(50)}>+50</button>
                    <button onClick={() => setValue(100)}>+100</button>
                </div>
                <div>
                    <button onClick={() => setValue(-1)}>-1</button>
                    <button onClick={() => setValue(-5)}>-5</button>
                    <button onClick={() => setValue(-10)}>-10</button>
                    <button onClick={() => setValue(-50)}>-50</button>
                    <button onClick={() => setValue(-100)}>-100</button>
                </div>
            </div>
        </div>
    )
}

export default Counter