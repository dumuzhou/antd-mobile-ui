import "./index.less";
import { TabBar, TabBarItem } from "./side-bar";
import { attachPropertiesToComponent } from "../utils/attach-properties-to-component";

export type { TabBarProps, TabBarItemProps } from "./side-bar";

export default attachPropertiesToComponent(TabBar, {
  Item: TabBarItem,
});
