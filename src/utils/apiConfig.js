import axios from "axios";

export default function callApi(endpoint, method = "GET", body) {
  return axios({
    method: "post",
    url: `'https://663a40df1ae792804beea59d.mockapi.io/kids-toys/'/${endpoint}`,
    data: body,
  });
}
