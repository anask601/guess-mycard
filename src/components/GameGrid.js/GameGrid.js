import React, { useState } from "react";
import Card from "../Card/Card";

import Grid from "../Grid/Grid";

const GameGrid = ({ gridItems }) => {
  const [cards, setCards] = useState(gridItems);
  const [prevClickedCard, setPrevClickedCard] = useState(null);
  const [currClickedCard, setCurrClickedCard] = useState(null);

  const handleChoice = (card) => {
    prevClickedCard && prevClickedCard !== card
      ? setCurrClickedCard(card)
      : setPrevClickedCard(card);
  };

  const getMatchingId = (cardArr) => {
    const matchingId = cardArr[0].matchingId;
    return cardArr.every((card) => card.matchingId === matchingId)
      ? matchingId
      : null;
  };

  const handleCardClick = (clickedCard) => {
    if (!prevClickedCard || !currClickedCard) {
      setPrevClickedCard(clickedCard);
      // const updatedCards = cards.map((card) =>
      //   card.id === clickedCard.id ? { ...card, showLogo: true } : card
      // );
      // setCards(updatedCards);
      return;
    }

    if (clickedCard.id === prevClickedCard.id) return;

    const matchingId = getMatchingId([prevClickedCard, clickedCard]);
    if (matchingId) {
      const updatedCards = cards.map((card) =>
        card.matchingId === matchingId ? { ...card, hasMatched: true } : card
      );
      setCards(updatedCards);
    }
    setTimeout(() => setPrevClickedCard(null), 1000);
    // setTimeout(() => setCurrClickedCard(null), 1000);
  };

  return (
    <Grid>
      {cards.map((card) => {
        const showLogo = prevClickedCard
          ? card.id === prevClickedCard?.id
          : card.hasMatched;
        // console.log(!!showLogo);
        return (
          <Card
            key={card.id}
            onCardClick={handleCardClick}
            showLogo={!!showLogo}
            onChoice={handleChoice}
            flipped={
              card === currClickedCard ||
              card === prevClickedCard ||
              card === card.hasMatched
            }
            {...card}
          />
        );
      })}
    </Grid>
  );
};

export default GameGrid;
