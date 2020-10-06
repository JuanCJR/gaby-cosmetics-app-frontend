import axios from "axios";
import getRoute from "../routes/users";
export default class userService {
  //Reconecta usuario
  async reconectUser(cod_user) {
    const user = await axios.post(getRoute("reconect"), {
      cod_user,
    });
    return user.data;
  } //
  //inicio de sesion
  async Signin(username, passwd) {
    const user = await axios.post(getRoute("signin"), {
      username: username,
      passwd: passwd,
    });
    return user.data;
  } //
}
