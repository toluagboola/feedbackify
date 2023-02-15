import { writable } from "svelte/store";

export const FeedbackStore = writable([
  {
    id: 1,
    rating: 10,
    text: "I had a very enjoyable user experience and the design is top notch. Well done!.",
  },
  {
    id: 2,
    rating: 9,
    text: "Cool design and animations.",
  },
  {
    id: 3,
    rating: 8,
    text: "I'll definitely recommend this app to my friends.",
  },
]);
