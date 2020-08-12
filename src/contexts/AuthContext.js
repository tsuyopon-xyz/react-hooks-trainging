import React, { useState } from 'react';

// 認証データを管理するコンテクスト
// （Reduxのようにグローバルのどこからでもアクセスすると便利なデータを保持する）

export const AuthContext = React.createContext();

export const AuthContextProvider = (props) => {
  const [userId, setId] = useState('');
  const [userName, setName] = useState('');
  const [isAuthenticated, setAuthenticated] = useState(false);

  const value = {
    user: {
      id: userId,
      name: userName
    },
    isAuthenticated,

    /**
     * 今回はサンプルとして、
     * loginメソッドが実行されて、
     * 「id = 'i_am_bob'」「password = abcd」が
     * 渡されてきたら、stateに以下の固定値をセットする
     *
     * ・userId : 引数のidをそのままセットする
     * ・userName : Bob
     *
     *
     * それ以外の場合は、alertで「id、もしくはpasswordが違います」と表示する
     */
    login: ({id, password}) => {
      console.log(id, password, '@@@@@@@');
      if(id === 'i_am_bob' && password === 'abcd') {
        setId(id);
        setName('Bob');
        setAuthenticated(true);
      } else {
        window.alert('id、もしくはpasswordが違います');
      }
    },

    /**
     * 今回はサンプルとして、
     * logoutメソッドを実行したら
     * stateをそれぞれ空文字列にする
     */
    logout: () => {
      setId('');
      setName('');
      setAuthenticated(false);
    },


  };

  return (
    <AuthContext.Provider value={value}>
      {props.children}
    </AuthContext.Provider>
  );
}