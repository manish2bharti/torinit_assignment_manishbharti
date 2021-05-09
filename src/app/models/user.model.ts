export class User {
  constructor(
    private name: string,
    private username: string,
    private id: number,
    private email: string,
    private token: string,
    private expirationDate: Date,
    private company: {},
  ) {}

  get expireDate() {
    return this.expirationDate;
  }

  get userToken() {
    return this.token;
  }
}
