import Cards from "./Cards.jsx";
import CardInfo from "./CardInfo";
console.log(CardInfo);
const CardView = () => {
  return (
    <>
      <div className="cardApp">
        <h1>Card View </h1>

            {CardInfo.map(function ncard(value) {
              return(
                <Cards
                  img={value.img}
                  cate={value.cate}
                  title={value.title}
                />
              )
            })}

        <div className="cards"></div>
      </div>
    </>
  );
};
export default CardView;
