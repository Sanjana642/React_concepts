// import PropTypes from 'prop-types';
// if propTypes files is there in node-modules then only this will work

function UserGreeting(props) {

    const welcomemsg = <h1>Welcome {props.username}!</h1>;
    const signUpmsg = <h1>Please sign up.</h1>;
    
    return (
        <div>
            {props.isLoggedIn ? welcomemsg : signUpmsg}
        </div>
    );
}

// UserGreeting.propTypes = {
//     isLoggedIn: PropTypes.bool,
//     username: PropTypes.string,
// };

UserGreeting.defaultProps = {
    isLoggedIn: false,
    username: 'Guest',
};
export default UserGreeting;