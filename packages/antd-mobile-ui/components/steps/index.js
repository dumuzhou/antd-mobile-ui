import "./index.less";
import { Steps, Step } from "./side-bar";
import { attachPropertiesToComponent } from "../utils/attach-properties-to-component";
export default attachPropertiesToComponent(Steps, {
    Step: Step,
});
