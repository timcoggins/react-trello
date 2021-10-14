
const CardToolbar = (props) => {


    const deleteCard = (column, cardId) => {
        const newData = props.data.map(list => {
            list.cards = list.cards.filter(card => {
                return !(card.id === cardId && list.id === column);
             })
            return list;
        })
        props.setData([...newData])
    }


    const handleChange = (event) => {
        event.preventDefault()

        const tempObject = props.item;

        const newData = props.data.map(list => {
            list.cards = list.cards.filter(card => {
                return props.item !== card;
            })
            return list;
        })

        const newData2 = newData.map(list => {
            if(list.name === event.target.value) list.cards.push({id: newData[props.column].cards.length + 1, title: tempObject.title, task: tempObject.task})
            return list;
        })

        props.setData([...newData2])
    }

    return (
        <>
            <select value={props.data[props.column].name} onChange={handleChange} >
                <option value="Start">Start</option>
                <option value="In Progress">In Progress</option>
                <option value="Review">Review</option>
                <option value="Done" >Done</option>
            </select>
            <button onClick={() => deleteCard(props.column, props.item.id)}>Delete</button>
        </>
    )



}
export default CardToolbar