
function Student(props){
    return (
        <div className="student">
            <p>Name : {props.name}</p>
            <p>Age : {props.age}</p>
            <p>Student : {props.isStudent ? "Yes" : "No"}</p>
        </div>
    );
}
//propTypes = a mechanism that ensures that the passed value is of correct datatype. (eg - age: propTypes.number)
// Student.propTypes = {
//     name: PropTypes.string,
//     age: PropTypes.number,
//     isStudent: PropTypes.bool,
// }

//defaultProps = a mechanism that allows us to set default values for props in case they are not provided by the parent component. (eg - name: "guest")
Student.defaultProps = {
    name: "Guest",
    age : 18,
    isStudent : false
}

export default Student;