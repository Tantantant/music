import request from "../utils/request"

export const getSongerList = () => {
  return request({
    url: "/api/singer_list",
    method: "GET"
  })
}