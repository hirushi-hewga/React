import './style.css'

const Movie = ({ bgColor = "cyan" }) => {
    return (
        <div className={`container ${bgColor}`}>
            <p>1234</p>
        </div>
    )
}

export default Movie