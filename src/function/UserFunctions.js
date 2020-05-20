import axios from 'axios'
export const login = user => {
  return axios
    .post('http://localhost:5000/login', {
      memberLogin: user.memberLogin,
      memberPass: user.memberPass
    })
    .then(response => {
      // console.log(response.data);
      if (response.data.error === 'User does not exist' || response.data === 'User not exists')
        alert('Tai khoan hoac mat khau khong chinh xac');
      else {
        localStorage.setItem('usertoken', response.data)
        return response.data
        localStorage.clear();
      }
    })
    .catch(err => {
      console.log(err)
    })
}
