import { legacy_createStore as createStore, applyMiddleware } from 'redux';
import thunk, { ThunkMiddleware } from "redux-thunk";
import { rootReducer } from './reducers/index';


type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch
const store = createStore(rootReducer, applyMiddleware(thunk as ThunkMiddleware<RootState>));

export default store;