import { atom } from 'recoil';

interface filterType {
  isOpen: boolean;
  moodTag: string | null;
  drinkTag: string | null;
}

const filterAtom = atom<filterType>({
  key: 'filterAtom',
  default: {
    isOpen: false,
    moodTag: null,
    drinkTag: null,
  },
});

export default filterAtom;
