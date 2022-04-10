import {} from "firebase/app";
import { getDatabase, ref, child, get, push } from "firebase/database";
import { ApiEndpoints } from "@/services/model/Api";
import { BaseApi } from "./base.api";

class UtilityApi extends BaseApi {
  static fetchSubscribers = async () => {
    const snapshot = await get(child(this.getDbRef, ApiEndpoints.subscribers));
    return snapshot.exists() ? snapshot.val() : null;
  };

  static subscribe = async (email: string) =>
    push(child(this.getDbRef, ApiEndpoints.subscribers), email);

  static fetchQuestions = async () => {
    const snapshot = await get(child(this.getDbRef, ApiEndpoints.questions));
    return snapshot.exists() ? snapshot.val() : null;
  };

  static askQuestion = (question: string) =>
    push(child(this.getDbRef, ApiEndpoints.questions), question);
}

export default UtilityApi;
