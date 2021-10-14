import {useState} from "react";
import Column from "./Column";

const tempData = [
    {
        id: 0,
        name: 'Start',
        cards: [
            { id: 0, title: 'something', task: 'content'},
            { id: 1, title: 'something2', task: 'content2'},
            { id: 2, title: 'something3', task: 'content3'},
            { id: 3, title: 'something4', task: 'content4'}
        ]
    },
    {
        id: 1,
        name: 'In Progress',
        cards: [
            { id: 0, title: 'somethi', task: 'connt'},
            { id: 1, title: 'someng2', task: 'coent2'},
            { id: 2, title: 'sothing3', task: 'conent3'},
            { id: 3, title: 'somhing4', task: 'contnt4'}
        ]
    },
    {
        id: 2,
        name: 'Review',
        cards: [
            { id: 0, title: 'somethi', task: 'connt'},
            { id: 1, title: 'someng2', task: 'coent2'},
            { id: 2, title: 'sothing3', task: 'conent3'},
            { id: 3, title: 'somhing4', task: 'contnt4'}
        ]
    },
    {
        id: 3,
        name: 'Done',
        cards: [
            { id: 0, title: 'someth', task: 'conntrhuwqhrqwrkjewqnrjnqwnroqwnornqwjinriqwniri'},
            { id: 1, title: 'someng2', task: 'coent2'},
            { id: 2, title: 'sothing3', task: 'conent3'},
            { id: 3, title: 'somhing4', task: 'contnt4'}
        ]
    }
]

const Board = () => {

    const [data, setData] = useState([...tempData])

    return(
        <>
            <h1>Kanban Board</h1>
            <div className="column-container">
                {data.map(item => <Column data={data} setData={setData} item={item} column={item.id}/>)}
            </div>
        </>
    )
}

export default Board