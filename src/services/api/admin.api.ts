import { child, get, getDatabase, ref, update } from "firebase/database";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { ApiEndpoints } from "@/services/model/Api";
import { UserInfo } from "@/services/model/User";
import { BaseApi } from "./base.api";

class AdminApi extends BaseApi {
  static updateUserInfo = async (userInfo: UserInfo) => {
    const userId = this.getUserId();

    if (!userId) {
      throw Error();
    }

    update(this.getDbRef, {
      [`${ApiEndpoints.users}/${userId}/info`]: userInfo,
    });
  };

  static getUserInfo = async (): Promise<UserInfo | null> => {
    const userId = this.getUserId();

    if (!userId) {
      throw Error();
    }

    const snapshot = await get(
      child(this.getDbRef, `${ApiEndpoints.users}/${userId}/info`)
    );

    return snapshot.exists() ? snapshot.val() : null;
  };

  static register = async (email: string, password: string) =>
    (await createUserWithEmailAndPassword(this.getAuth, email, password))
      .providerId;

  static signIn = async (email: string, password: string) =>
    (await signInWithEmailAndPassword(this.getAuth, email, password))
      .providerId;

  static signOut = () => this.getAuth.signOut();

  private static getUserId = () => this.getAuth.currentUser?.uid;
}

export default AdminApi;
