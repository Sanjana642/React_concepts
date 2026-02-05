// import propTypes from "prop-types";

function List(props) {

    const itemList = props.items;
    const category = props.category;

    const listItems = itemList.map((item) => 
        <li key={item.id}>
            {item.name} : &nbsp; 
            <b>{item.calories}</b>
        </li>
    );
    return(<>
    <h2 className="list-category">{props.category}</h2>
    <ol className="list-items">{listItems}</ol>
    </>
    );
}
// List.propTypes = {
//     category: PropTypes.string,
//     items: PropTypes.arrayOf(PropTypes.shape({
//         id: PropTypes.number,
//         name: PropTypes.string,
//         calories: PropTypes.number,
//     }))
// };

List.defaultProps = {
    items: [],
    category: "Category",
};

export default List