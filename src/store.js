import {createStore} from 'redux';
import reducer from './ducks/users';

export default createStore(reducer);