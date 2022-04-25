import { UserToken } from "../contexts/UserToken";
import { useContext } from "react";

export default function useToken() {
  return useContext(UserToken);
}
