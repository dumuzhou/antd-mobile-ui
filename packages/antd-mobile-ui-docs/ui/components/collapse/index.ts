import "./index.less";
import { Tabs, TabsTab } from "./side-bar";
import { attachPropertiesToComponent } from "../utils/attach-properties-to-component";

export type { TabsProps, TabsTabProps } from "./side-bar";

export default attachPropertiesToComponent(Tabs, {
  Panel: TabsTab,
});
