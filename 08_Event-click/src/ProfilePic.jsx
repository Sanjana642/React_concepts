
function ProfilePic() {

    const imgURL = "./src/assets/paper.jpg";

    // const handleClick = () => console.log("Clicked!!");
    const handleClick = (e) => e.target.style.display = "none"; //image will disappear when clicked
    
    return (
        <img src= {imgURL} alt="Profile Pic" onClick={(e) => handleClick(e)}></img>
    );
}

export default ProfilePic;