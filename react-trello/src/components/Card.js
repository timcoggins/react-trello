import CardToolbar from './CardToolbar'

const Card = (props) => {

    return (
        <>
            <div className="card">
                <h5>{props.item.title}</h5>
                <p>{props.item.task}</p>
                <CardToolbar data = {props.data} setData = {props.setData} item={props.item} column={props.column}/>
            </div>
        </>
    )
}

export default Card