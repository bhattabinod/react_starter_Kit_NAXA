import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUsersFetch, getPostsFetch } from '@Actions/weather';

function Users() {
  const dispatch = useDispatch();
  const users = useSelector(state => state.myFirstReducer.users);
  const posts = useSelector(state => state.mySecondReducer.posts);

  return (
    <>
    <div className='App'>
      <button onClick={() => dispatch(getUsersFetch())}>Get Users</button>
      <button onClick={() => dispatch(getPostsFetch())}>Get Posts</button>
      <div>
        <h2>Users:</h2>
        {users.map(user => (
          <div key={user.id}>
            <h3>{user.name}</h3>
          </div>
        ))}
      </div>
      <div>
        <h2>Posts:</h2>
        {posts.map(post => (
          <div key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </div>
        ))}
      </div>
    </div>
    </>
  );
}

export default Users;

