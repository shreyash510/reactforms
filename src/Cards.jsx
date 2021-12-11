const Cards = (props) => {
    return (
        <>
            <div className="card">
                <img src={props.img} alt="mypic" />
                <div className="card_info">
                    <span className="card_category">{props.cate}</span>
                    <h4 className="card_title">{props.title}</h4>
                    <a href="/" target="_blank"><button>Watch Now</button></a>
                </div>
            </div>
        </>
    )
}
export default Cards;