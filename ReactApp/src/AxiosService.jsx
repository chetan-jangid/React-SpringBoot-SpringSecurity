
function axiosConfig() {
  var axios = require("axios");
  const jwtToken = localStorage.getItem("authorization");
  axios.interceptors.request.use(
    function (config) {
      if (jwtToken) {
        config.headers["authorization"] = "Bearer " + jwtToken;
      }
      return config;
    },
    function (error) {
      return Promise.reject(error);
    }
  );
  return axios;
}

export default axiosConfig;
