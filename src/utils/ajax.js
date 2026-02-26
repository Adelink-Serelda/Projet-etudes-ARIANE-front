class AJAX {
  static apiURL = "http://localhost:3001/api/";
  static authURL = "http://localhost:3002/auth/";

  static async get(endpoint, useAuth = false) {
    const headers = {};

    if (useAuth) {
      const token = localStorage.getItem("token");
      if (token) headers["Authorization"] = "Bearer" + token;
    }

    const response = await fetch(this.apiURL + endpoint, { headers });
    const datas = await response.json();
    return datas;
  }

  static async postAuth(endpoint, body) {
    const response = await fetch(this.authURL + endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    const datas = await response.json();
    return datas;
  }
}
export default AJAX;
