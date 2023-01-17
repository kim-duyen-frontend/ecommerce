import { Action, combineReducers, ThunkAction,configureStore } from "@reduxjs/toolkit";
import { getDefaultMiddleware } from "@reduxjs/toolkit/dist/getDefaultMiddleware";
import { createWrapper, HYDRATE } from "next-redux-wrapper";

const combinedReducer = combineReducers({});
const reducer: typeof combinedReducer = (state, action) => {
  switch (action.type) {
    case HYDRATE: {
      const nextState = {
        ...state,
        ...action.payload,
      };
      return nextState;
    }

    default:
      return combinedReducer(state, action);
  }
};
export const makeStore = () =>
  configureStore({
    reducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false,
      }),
  });
type Store = ReturnType<typeof makeStore>;
export type AppDispatch = Store["dispatch"];
export type RootState = ReturnType<Store["getState"]>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
export const wrapper = createWrapper(makeStore,{debug:false})
