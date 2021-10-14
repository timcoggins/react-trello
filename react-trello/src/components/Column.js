import Card from "./Card";
import AddCard from "./AddCard";
const Column = (props) => {
    return (
        <>
            <div className="columns">
                <h4>{props.item.name}</h4>
                {props.item.cards.map(item => <Card data={props.data} setData={props.setData} item={item} column={props.column}  />)}
                <AddCard data={props.data} setData={props.setData} column={props.column}/>
            </div>
        </>
    )
}

export default Column