import {nanoid} from "nanoid";
import {ADD_JOB, DELETE_JOB, SET_JOB} from "./constants";

export const initState = {
    job: '',
    jobs: []
}

const reducer = (state, action) => {

    switch (action.type) {
        case SET_JOB:
            return {
                ...state,
                job: action.payload
            }
        case ADD_JOB:
            return {
                ...state,
                jobs: [...state.jobs, {
                    name: action.payload,
                    id: nanoid()
                }]
            }
        case DELETE_JOB:
            const newList = state.jobs.filter(job => job.id !== action.payload)
            return {
                ...state,
                jobs: newList
            }
        default:
            throw new Error(`Unknown type ${action.type}`)
    }

    return state
}

export default reducer
