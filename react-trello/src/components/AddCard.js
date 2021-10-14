const AddCard = (props) => {

    const newCard = (event) => {
        event.preventDefault()
        let newData = props.data;
        newData[props.column].cards.push({id: newData[props.column].cards.length + 1, title: event.target[0].value, task: event.target[1].value})
        props.setData([...newData])

        event.target[0].value = '';
        event.target[1].value = '';
    }

    return (
        <div className="card addcard">
            <h5>Add Card</h5>
            <form onSubmit={newCard}>
                <input type="text" placeholder="title" />
                <input type="text" placeholder="task" />
                <input type="submit" />
            </form>
        </div>
    )
}

export default AddCard