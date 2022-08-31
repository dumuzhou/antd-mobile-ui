import "./index.less";
import { Steps, Step } from "./side-bar";
import { attachPropertiesToComponent } from "../utils/attach-properties-to-component";

export type { StepsProps, StepProps } from "./side-bar";

export default attachPropertiesToComponent(Steps, {
  Step: Step,
});
