import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { userDelete } from "./store/reducer/UserReducer";
function App() {

  const dispatch = useDispatch();
  const handleDelete =(index) => {
    console.log(index);
    dispatch(userDelete(index))
  }
  const {userss} = useSelector((state) => state.UserReducer);
  return (
    <div className="container m-auto mt-5 p-5 bg-cyan-300 ">
      <h1 className="font-black text-xl text-center">Users List</h1>
      {userss.map((user,index) => {
        return <div key={user.id}>
          <h1>Name : {user.name} <span onClick={() => handleDelete(index)} className="text-red-600 font-black">X</span></h1>
        </div>
      })}
    </div>
  );
}

export default App;
