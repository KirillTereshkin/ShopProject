import { getAuth } from "firebase/auth";
import { getDatabase, ref } from "firebase/database";

export class BaseApi {
  protected static get getDbRef() {
    return ref(getDatabase());
  }

  protected static get getAuth() {
    return getAuth();
  }
}
