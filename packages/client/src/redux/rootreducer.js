import { combineReducers } from 'redux'
import bannerreducer from './slices/bannerslice'

const rootreducer = combineReducers({
    banner: bannerreducer 
})

export default rootreducer