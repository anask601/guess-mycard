import CardImage from "../CardImage/CardImage";
import InitialImage from "../InitialImage/InitialImage";

const Card = ({ onCardClick, showLogo, flipped, ...cardData }) => {
  const handleClick = (cardData) => {
    onCardClick(cardData);
  };
  const { id, logo, hasMatched } = cardData;
  // console.log({ hasMatched });
  // const falseValueClicked = setTimeout(() => {
  //   hasMatched ? <CardImage id={id} imageSrc={logo} /> : <InitialImage />;
  // });

  return (
    <div onClick={() => handleClick(cardData)}>
      <p>{cardData.matchingId}</p>

      {showLogo || hasMatched ? (
        <CardImage id={id} imageSrc={logo} />
      ) : (
        <InitialImage />
      )}
    </div>
  );
};

export default Card;
