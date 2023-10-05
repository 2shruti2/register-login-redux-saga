import { takeEvery, put, call } from 'redux-saga/effects'
import { GET_USER, LOGIN_SUCCESSFUL, SET_USER, USER_LOGIN} from './constant'
import axios from 'axios';
import { toast } from 'react-toastify'

function* registerUser(action) {

  console.log("action is ", action)
  try {

    let data = yield axios.post('https://reqres.in/api/register', action.payload,
      { credentials: "include", }
    )
    console.log("yielded data: ", data)

    toast.success("Successful !", {
      position: "top-right"
    });

    yield put({ type: SET_USER, payload: data })

  }
  catch (error) {
    console.log(error)
  }
}

function* loginUser(action) {
  console.log("action is ", action)
    try {

      const data = yield axios.post('https://reqres.in/api/login', action.payload,
        { credentials: "include", }
      )

      console.log("data", data.status, data)
      
      if(data.status === 200){
        yield localStorage.setItem("token", data.data.token);
        yield localStorage.setItem("userAuth", "true");
      
        toast.success("Login Successful !", {
          position: "top-right"
        });

        const userData = {
          data: data.data,
          isLoggedin: true
        }

        yield put({ type: LOGIN_SUCCESSFUL, payload: userData })
      } 
      
    }
    catch (error) {
      console.log(error)
      toast.error("login failed !", {
        position: "top-right"
      });
    }
}

function* saga() {
  yield takeEvery(GET_USER, registerUser)
  yield takeEvery(USER_LOGIN, loginUser)
}

export default saga