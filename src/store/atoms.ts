import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";
const { persistAtom } = recoilPersist();

export interface IForm {
  nickname?: string;
  armlength?: number;
  extraError?: any;
  degree?: number;
}

export interface IFootprint {
  nickname?: string;
  armlength?: number;
  degree?: number;
  design?: number;
}

export interface IStatus {
  code: number;
}

export const SaveDataAtom = atom<IFootprint[]>({
  key: "SaveData",
  default: [] as any,
  effects_UNSTABLE: [persistAtom],
});

export const StatusAtom = atom<IStatus>({
  key: "Status",
  default: { code: 1 },
});
