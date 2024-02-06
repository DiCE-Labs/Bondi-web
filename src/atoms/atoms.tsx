import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const { persistAtom } = recoilPersist();

export const isAuthenticatedAtom = atom<boolean>({
  key: "isAuthenticatedState",
  default: false,
  dangerouslyAllowMutability: true,
  effects_UNSTABLE: [persistAtom],
});
