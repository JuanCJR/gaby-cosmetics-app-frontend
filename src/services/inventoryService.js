import axios from "axios";
import getRoute from "../routes/users";
export default class inventoryService {

  //inicio de sesion
  async Signin(username, passwd) {
    const user = await axios.post(getRoute("signin"), {
      username: username,
      passwd: passwd,
    });
    return user.data;
  } //
}
