import React,{useState} from 'react'
import Todo from '../components/Todo'
import image from '../img/shopping-bag-2-line.svg'

const Form = () => {
    //Crear elemento
    const [todo, setTodo] = useState({})
    //Guarda el arreglo de elementos
    const [todos, setTodos] = useState([
        {todo: 'Leche'},
        {todo: 'Cereal'}
    ])

    const handleChange = e => setTodo({[e.target.name]: e.target.value})
    const handleClick = e => {
        if(Object.keys(todo).length === 0 || todo.todo.trim() === ''){
            alert('El campo no puede estar vacio');
            return
        }
        setTodos([...todos, todo])
        let nombre = document.getElementById('name');
        nombre.value = '';
    }

    const deleteTodo = indice => {
        const newTodos = [...todos]
        newTodos.splice(indice,1)
        setTodos(newTodos)
    }

    return (
        <>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossOrigin="anonymous"></link>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
        <form onSubmit={e=>{e.preventDefault()}}>
        <h1>Lista de compra</h1>
        <img id='caja' src={image} alt='' />
        <div className='container'>
        <div className='row'>
        <div className='col-12'>
        <input className="form-control" id='name' type="text" name="todo" onChange={handleChange}/>
        </div>
        <div className='col-12' id='bu'>
        <button className="btn btn-primary" onClick={handleClick}>Agregar</button>
        </div>
        </div>
        </div>
        </form>
        <br/>
        <table className="table table-striped table-hover">
        <thead>
        <tr>
        <th scope="col">Item</th>
        <th scope="col">Acciones</th>
        </tr>
        </thead>
        <tbody>
        {
            todos.map((value,index)=>(
                <React.Fragment key={index}>
                <tr>
                <Todo todo={value.todo} key={index} index={index} deleteTodo={deleteTodo} />
                </tr>
                </React.Fragment>
            ))
        }
        </tbody>
        </table>
        </>
    )
}

export default Form