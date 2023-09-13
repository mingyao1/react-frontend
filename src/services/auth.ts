import axios from "axios";

// const USER_API_URL = "http://localhost:9000/user/";
// const USER_API_URL = "https://9429d5b9-a4ce-43d8-bf6b-637cc223febe.mock.pstmn.io/";
const url = "https://sde-backend-40b2c0bbfd8e.herokuapp.com/api/";

const register = (username: string, email: string, password: string) => {
  return axios.post(url + "signup", {
    username,
    email,
    password,
  });
};

const login = (username: string, password: string) => {
  return axios
    .post(url + "login", {
      username,
      password,
    })
    .then((response) => {
      // alert(JSON.stringify(response.data)); // for debugging purposes
      if (response.data.user) {
        localStorage.setItem("user", JSON.stringify(response.data.user));
      }

      return response.data;
    });
};

const logout = () => {
  localStorage.removeItem("user");
  return axios.post(url + "logout").then((response) => {
    return response.data;
  });
};


const getCurrentUser = (): any | null => {
  const user = localStorage.getItem("user");
  return user ? JSON.parse(user) : null;
};

const reset = (email: string) => {
  return axios.post(url + "password-reset-link", { email }).then((response) => {
    return response.data;
  });
}


/**
 * This represents some generic auth provider API, like Firebase.
 */
const fakeAuthProvider = {
    isAuthenticated: false,
    signin(callback: VoidFunction) {
      fakeAuthProvider.isAuthenticated = true;
      setTimeout(callback, 100); // fake async
    },
    signout(callback: VoidFunction) {
      fakeAuthProvider.isAuthenticated = false;
      setTimeout(callback, 100);
    },
  };


  const AuthService = {
    register,
    login,
    logout,
    getCurrentUser,
    reset,
    fakeAuthProvider,
  }
  
  export default AuthService;