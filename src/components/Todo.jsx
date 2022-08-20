import React from 'react'
import imagen from '../img/delete-bin-2-line.svg'

const Todo = ({todo, index, deleteTodo}) => {
    return (
    <>
    <td>{todo}</td>
    <td><button className="btn btn-danger" onClick={() => deleteTodo(index)}><img src={imagen} alt=''/></button></td>
    </>
    )
}
export default Todo