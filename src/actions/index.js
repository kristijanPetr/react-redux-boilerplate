import { LOGGED_USER, MUZLI_STORIES } from "../constants";
import axios from "axios";

export function logUser(email) {
  console.log("Action Log User", email);
  const action = {
    type: LOGGED_USER,
    user: email
  };
  return action;
}

// export function fetchStories(skip) {
//   console.log("Action-> fetchStories");
//   const url =
//      `https://api.muz.li/v1/feed/?awwwards=2&behance=2&bored_panda=1&cnn=1&codrops=1&designer_news=2&dribbble=2&forbes=1&fubiz=2&hacker_news=1&invisionapp=1&limit=60&mashable=1&muzli=2&muzli_blog=1&producthunt=2&sidebar=2&skip=${skip}&sort=date&techcrunch=1&ted=1&the_next_web=1&the_verge=1&vlogs=1&vox=1&wired_design=1`;

//   const request = axios.get(url);
//   const action = {
//     type: MUZLI_STORIES,
//     payload: request
//   };
//   return action;
// }
