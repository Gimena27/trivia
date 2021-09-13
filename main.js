import { router } from "./moduloRouter/root.js";

window.addEventListener('hashchange',()=>{
    router(window.location.hash);
});
router(window.location.hash);