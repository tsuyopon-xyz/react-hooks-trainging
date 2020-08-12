import React, { useContext } from 'react'
import { AuthContext } from '../../../contexts/AuthContext';

function Profile() {
  const {user, isAuthenticated, login, logout} = useContext( AuthContext );
  const {id, name} = user;

  const renderUnAuthInfo = () => {
    return (
      <>
        <p>非ログイン状態</p>
        <button onClick={() => {
          login({
            id: 'i_am_bob',
            password: 'abcd'
          })
        }}>
          ログインする
        </button>
      </>
    );
  };

  const renderAuthInfo = () => {
    return (
      <>
        <p>id: {id}</p>
        <p>name: {name}</p>
        <button onClick={logout}>ログインアウトする</button>
      </>
    );
  };

  return (
    <div className="Profile">
      <h2>ログイン情報</h2>
      { isAuthenticated ? renderAuthInfo() : renderUnAuthInfo() }
    </div>
  )
}


export default Profile;