import { atomWithStorage, createJSONStorage } from 'jotai/utils';

const storage = createJSONStorage(() => sessionStorage);

export const genderAtom = atomWithStorage('gender', null, storage);
