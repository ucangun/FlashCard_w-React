const FlashCards = ({ data }) => {
  return (
    <div className="flashcards">
      {data.map((item) => (
        <div key={item.id}>
          <p>{item.question}</p>
        </div>
      ))}
    </div>
  );
};

export default FlashCards;
