import axios from '../httpconfig/http'

let apiUrl = {
  login: function (params, callback) {
    axios
      .post("/login", params)
      .then(res => {
        callback(res)
      })
      .catch(err => {
        return err
      });
  },
  reg: function (params, callback) {
    axios
      .post("/reg", params)
      .then(res => {
        callback(res)
      })
      .catch(err => {
        return err
      });
  },
  logout: function (params, callback) {
    axios
      .get("/logout", {
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
  },
  addComment: function (params, callback) {
    axios
      .post("/api/comment", params)
      .then(res => {
        callback(res)
      })
      .catch(err => {
        return err
      });
  },
  getComment: function (params, callback) {
    axios
      .get("/api/getComment", {
        params
      })
      .then(res => {
        callback(res)
      })
      .catch(err => {
        return err
      });
  },
  getCategory: function (params, callback) {
    axios
      .get("/api/getCategory", {
        params
      })
      .then(res => {
        callback(res)
      })
      .catch(err => {
        return err
      });
  },
  getCvalue: function (params, callback) {
    axios
      .get("/api/getCvalue", {
        params
      })
      .then(res => {
        callback(res)
      })
      .catch(err => {
        return err
      });
  },
  getDate: function (params, callback) {
    axios
      .get("/api/dateData", {
        params
      })
      .then(res => {
        callback(res)
      })
      .catch(err => {
        return err
      });
  },
  getData: function (params, callback) {
    axios
      .get("/api/dateDoc", {
        params
      })
      .then(res => {
        callback(res)
      })
      .catch(err => {
        return err
      });
  },
}

export default apiUrl