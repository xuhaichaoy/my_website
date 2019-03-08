import axios from '../httpconfig/http'
import qs from 'qs';

let apiUrl = {
  login: function (params, callback) {
    axios
      .get("/login", {
        params
      })
      .then(res => {
        callback(res)
      })
      .catch(err => {
        return err
      });
  },
  reg: function (params, callback) {
    axios
      .get("/reg", {
        params
      })
      .then(res => {
        callback(res)
      })
      .catch(err => {
        return err
      });
  },
  getInfo: function (params, callback) {
    axios
      .get("/api/userInfo", {
        params
      })
      .then(res => {
        callback(res)
      })
      .catch(err => {
        return err
      });
  },
  getArtical: function (params, callback) {
    axios
      .get("/api/getArtical", {
        params
      })
      .then(res => {
        callback(res)
      })
      .catch(err => {
        return err
      });
  },
  getDetail: function (params, callback) {
    axios
      .get("/api/getDetail", {
        params
      })
      .then(res => {
        callback(res)
      })
      .catch(err => {
        return err
      });
  },
  searchValue: function (params, callback) {
    axios
      .get("/api/searchValue", {
        params
      })
      .then(res => {
        callback(res)
      })
      .catch(err => {
        return err
      });
  },
  getlist: function (params, callback) {
    axios
      .get("/api/getlist", {
        params
      })
      .then(res => {
        callback(res)
      })
      .catch(err => {
        return err
      });
  },
  publish: function (params, callback) {
    axios
      .post("/api/publish", params)
      .then(res => {
        callback(res)
      })
      .catch(err => {
        return err
      });
  }
}

export default apiUrl