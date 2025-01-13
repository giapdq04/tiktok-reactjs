import {useReducer, useRef} from "react";
import reducer, {initState} from "./reducer";
import {addJob, deleteJob, setJob} from "./action";


function Todo() {

    const [state, dispatch] = useReducer(reducer, initState)
    const inputRef = useRef();
    const {job, jobs} = state;

    const handleSubmit = () => {
        dispatch(addJob(job))
        dispatch(setJob(''))
        inputRef.current.focus()
    }
    return (
        <div style={{padding: '0 20px'}}>
            <h3>Todo</h3>
            <input
                ref={inputRef}
                value={job}
                placeholder={'Enter todo...'}
                onChange={e => {
                    dispatch(setJob(e.target.value))
                }}
            />
            <button onClick={handleSubmit}>Add</button>
            <ul>
                {jobs.map(job => (
                    <>
                        <li key={job.id}>{job.name}</li>
                        <span onClick={() => dispatch(deleteJob(job.id))}>X</span>
                    </>
                ))}
            </ul>
        </div>
    );
}

export default Todo;
