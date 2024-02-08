import "../styles/rocketCard.css";

export default function RocketCard({ item, onClickButton }) {
  const onClickReserved = () => {
    onClickButton(item);
  };

  return (
    <div key={item.rocket_id} className="rocket-item">
      <div className="rocket-card-name">

        <h2 className="rocket-name">{item.rocket_name}</h2>
      </div>

      <p className="reserved-paragraph">
        {item.reserved ? "🚀 R E S E R V E D 🚀" : ""}
      </p>

      <div className="image-container">
        <img
          src={item.flickr_images}
          alt={item.rocket_name}
          className="rocket-image"
        />
        <p className="rocket-description">{item.description}</p>
      </div>


      <button className="reservation-button" onClick={onClickReserved}>
        {item.reserved ? "Cancel Rocket" : "Reserve Rocket"}
      </button>



    </div >
  );
}
