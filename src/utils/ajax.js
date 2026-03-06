class AJAX {
  static apiURL = "http://localhost:3001/api/";
  static authURL = "http://localhost:3002/auth/";

  // Méthode GET
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

  // Méthode POST
  static async post(endpoint, body, useAuth = false) {
    const headers = { "content-Type": "application/json" };

    if (useAuth) {
      const token = localStorage.getItem("token");
      if (token) headers["x-access-token"] = token;
    }

    const response = await fetch(this.apiURL + endpoint, {
      method: "POST",
      headers,
      body: JSON.stringify(body),
    });
    const datas = await response.json();
    return datas;
  }

  // Authentification méthode POST
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
