import React, {Fragment} from "react";

const Card = ({ name, email, id }) => {
  return (
    < div className="bg-light-pink dib br3 pa3 ma2 grow bw2 shadow-5">
      <img src={`https://robohash.org/${id}?200x200`} alt="robot" />
      <>
        <h2>{name}</h2>
        <p>{email}</p>
      </>
    </div>
  );
};
export default Card;
