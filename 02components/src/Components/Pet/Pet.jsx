import './style.css'

const Pet = ({ bgColor = "cyan" }) => {
    return (
        <div className={`container ${bgColor}`}>
            <p>1234</p>
        </div>
    )
}

export default Pet