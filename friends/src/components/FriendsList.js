import React, { useEffect, useState } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";

const FriendsList = () => {
  const initialState = {
    id: () => {},
    name: "",
    age: "",
    email: "",
  };

  const [friendsList, setFriendsList] = useState([]);
  const [newFriend, setNewFriend] = useState(initialState);

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    axiosWithAuth()
      .get("api/friends")
      .then((res) => {
        console.log(res);
        setFriendsList(res.data);
      })
      .catch((err) => console.log(err));
  };

  const onChange = (e) => {
    setNewFriend({
      ...newFriend,
      [e.target.name]: e.target.value,
    });
  };

  const addNewFriend = (e) => {
    e.preventDefault();
    axiosWithAuth()
      .post("http://localhost:5000/api/friends", newFriend)
      .then((res) => {
        console.log(res);
        setNewFriend([...setFriendsList], res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    getData();
  };

  const deleteFriend = (id) => {
    axiosWithAuth().delete(`/api/friends/${id}`);
    getData();
  };

  return (
    <div>
      {friendsList.map((friend) => (
        <div className="displayFriends" key={friend.id}>
          <h2> {friend.name}</h2>
          <p>Age: {friend.age}</p>
          <p>Email: {friend.email}</p>
          <button onClick={() => deleteFriend(friend.id)}>Delete</button>
        </div>
      ))}
      <form className="friendInput" onSubmit={addNewFriend}>
        <input
          name="name"
          type="text"
          onChange={onChange}
          value={newFriend.name}
          placeholder="Name"
        />
        <input
          name="age"
          type="number"
          onChange={onChange}
          value={newFriend.age}
          placeholder="Age"
        />
        <input
          name="email"
          type="email"
          onChange={onChange}
          value={newFriend.email}
          placeholder="Email"
        />
        <button>Add Friend</button>
      </form>
    </div>
  );
};

export default FriendsList;
