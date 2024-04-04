import * as Types from "./types";
import request from "./request.js";

export default class TaxScouts {
  private token?: String;
  private email?: String;
  private password?: String;

  constructor(credentials: Types.CredentialsType) {
    if (credentials.token) {
      this.token = credentials.token;
      return;
    }

    if (!credentials.email) throw new Error("Missing credentials email");
    if (!credentials.password) throw new Error("Missing credentials password");

    this.email = credentials.email;
    this.password = credentials.password;

    return;
  }

  async getToken() {
    if (this.token) return this.token;

    const session = await request({
      url: "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDzH654_Q20VXFWHyC56BMMVSGQBttwhzI",
      method: "POST",
      data: {
        returnSecureToken: true,
        email: this.email,
        password: this.password,
        clientType: "CLIENT_TYPE_WEB",
        tenantId: "customer-prod-fbeno",
      },
    });

    const token = session?.idToken;
    if (!token) throw new Error("Invalid credentials");

    this.token = token;
    return this.token;
  }
}
