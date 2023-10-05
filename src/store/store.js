import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./rootReducer";
import createSagaMiddleware from 'redux-saga'
import saga from "./saga";

const sagaMiddleware = createSagaMiddleware();

let store = configureStore({
    reducer: {rootReducer},
    middleware: () => [sagaMiddleware]
})

sagaMiddleware.run(saga)

export default store