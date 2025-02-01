// atoms.js
import { atom, selector } from 'recoil';

export const notificationAtom = atom({
  key: 'notificationAtom',
  default: 120,
});

export const messagesAtom = atom({
  key: 'messagesAtom',
  default: 0,
});

export const jobsAtom = atom({
  key: 'jobsAtom',
  default: 0,
});

export const totalNotificationsSelector = selector({
  key: "totalNotificationsCount",
  get: ({ get }) => {
    const notificationAtomCount = get(notificationAtom);
    const messagesAtomCount = get(messagesAtom);
    return notificationAtomCount + messagesAtomCount;
  }
});


