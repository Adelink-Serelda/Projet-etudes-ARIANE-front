class AJAX {
  static baseURL = "http://localhost:3001/api/";

  static async get(endpoint) {
    const response = await fetch(this.baseURL + endpoint);
    const datas = await response.json();
    return datas;
  }
}
export default AJAX;
