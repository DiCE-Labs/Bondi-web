import { atom } from "recoil";
import {recoilPersist} from 'recoil-persist'

export const isAuthenticatedAtom = atom<boolean>({
  key: "isAuthenticatedState",
  default: false,
  dangerouslyAllowMutability:true,
  effects_UNSTABLE:[recoilPersist()]
});
