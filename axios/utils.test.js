const axios = require("axios");

const { BASE_URL, fetchUsers } = require('./utils');

// 1) Axios Mock 함수를 만든다.
jest.mock("axios")

describe("fetchUsers", () => {
  describe("when API call is successful", () => {
    it("should return users list", async () => {
      // given
      const users = [
        { id: 1, name: "John" },
        { id: 2, name: "Andrew" },
      ];
      // 2) response할 샘플을 만들고, axios mock 함수가 리턴을 하게 만든다.
      //    post 메소드를 쓴다면, axios.post가 되어야 한다.
      //    (axios는 Promise를 return하기 때문에 resolve!)
      axios.get.mockResolvedValueOnce(users);

      // when
      // 3) 테스트 할 fetchUsers() 함수를 호출한다.
      const result = await fetchUsers();

      // then
      // 4) endpoint 명시를 해주고, 정확한 결과값을 리턴하게 해준다.
      expect(axios.get).toHaveBeenCalledWith(`${BASE_URL}/users`);
      expect(result).toEqual(users);
    })
  })
  describe("when API call fails", () => {
    it("should return empty users list", async () => {
      // given
      const message = "Network Error";
      axios.get.mockRejectedValueOnce(new Error(message));

      // when
      const result = await fetchUsers();

      // then
      expect(axios.get).toHaveBeenCalledWith(`${BASE_URL}/users`);
      expect(result).toEqual([]);
    })
  })
})
