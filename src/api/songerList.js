import request from "../utils/request"
// import mock from "../utils/mock"

export const getSongerList = () => {
  return request({
    url: "/api/singer_list",
    method: "GET"
  })
}
/* export const getSongerList = () => {
  return mock({
    url: "/banners",
    method: "GET"
  })
} */