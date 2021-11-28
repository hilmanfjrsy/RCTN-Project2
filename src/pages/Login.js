import React, {useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { toast } from "react-toastify";
import { postRequest,Loading } from "../config/GlobalFunc";
import { getToken } from "../redux/slice/userSlice";

export default function Login() {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [isLoading, setIsLoading] = useState(false)
  const [passwordShow, setPasswordShow] = useState(false)
  const [isDisabled, setIsDisabled] = useState(false)
  const history = useHistory();
  const dispatch = useDispatch()
  
  useEffect(() => {
    if(localStorage.getItem('token')){
      history.push('/')
    }
  }, [])

  function togglePassword(){
    setPasswordShow(!passwordShow)
  }

  async function handleLogin() {
    var usernameRegex = /\S+@\S+\.\S+/;
    if (username === "admin@bukapedia.com" && password === "admin123") {
      setIsLoading(true)
      setIsDisabled(true)
      dispatch(getToken("admin"))
      history.push("/home-admin");
    } else {
      if (username.match(usernameRegex)) {
        toast.error('enter the correct username',  {
          theme: "colored"
        })
      } else {
        setIsLoading(true)
        setIsDisabled(true)
        await postRequest("auth/login", {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          username: username,
          password: password,
        }).then((res) => {
          if (res.data.token) {
            history.push("/");
            dispatch(getToken(res.data.token))
          } else {
            setIsLoading(false)
            setIsDisabled(false)
            const msgError = res.data.msg;
            toast.error(msgError,  {
              theme: "colored"
            })
          }
        });
      }
    }
    
  }
  return (
    <div className="align-items-center justify-content-center vh-100 d-flex">
      <div className="card-container p-4">
        <h4>Selamat Datang</h4>
        <div className="mb-3 mt-3">
          <label for="username" className="form-label">
            Username
          </label>
          <input
            type="email"
            className="form-control"
            placeholder="Jhon123"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label for="password" className="form-label">
            Password
          </label>
          <div className="d-flex flex-row">
            <input
              type={passwordShow ? "text" : 'password'}
              className="form-control"
              placeholder="******"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button className="col-md-2 btn-eye" onClick={togglePassword} >
              {passwordShow ? <i className="fas fa-eye"/> : <i className="fas fa-eye-slash"/>}
            </button>
          </div>
        </div>
        <button
          type="submit"
          class="btn btn-dark w-100 mt-3"
          onClick={handleLogin}
          disabled={isDisabled}
        >
          {isLoading ? <Loading /> : null}
          Login
        </button>
      </div>
    </div>
  );
}
