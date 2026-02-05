import ProfilePic from "./assets/mobile-logo.png";

function Card() {
    return (
        <div className="card">
            <img className="class-img" src={ProfilePic} alt="logo" />
            <h2 className="card-title">Apple IOS</h2>
            <p className="card-text">This is a card component.</p>
        </div>
    );
}
export default Card;