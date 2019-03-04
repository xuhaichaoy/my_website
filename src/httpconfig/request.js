import axios from '../httpconfig/http'
let apiUrl = {
  login: function (params, callback) {
    axios
      .get("/login", params)
      .then(res => {
        callback(res)
      })
      .catch(err => {
        return err
      });
  }
}

export default apiUrl