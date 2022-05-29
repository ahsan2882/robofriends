import React from "react";
import Card from "./Card";

function CardList({ robots }) {
  return (
    <div className="card-list">
      {robots.map((robot, i) => {
        return (
          <Card
            key={i}
            id={robot.id}
            name={robot.name}
            username={robot.username}
            email={robot.email}
          />
        );
      })}
    </div>
  );
}

export default CardList;
