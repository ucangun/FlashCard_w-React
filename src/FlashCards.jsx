import { useState } from "react";

const FlashCards = ({ data }) => {
  const [selectedId, setSelectedId] = useState(null);

  function handleClick(id) {
    setSelectedId(id !== selectedId ? id : null);
  }
  return (
    <div className="flashcards">
      {data.map((item) => (
        <div onClick={() => handleClick(item.id)} key={item.id}>
          <p>{item.question}</p>
        </div>
      ))}
    </div>
  );
};

export default FlashCards;
