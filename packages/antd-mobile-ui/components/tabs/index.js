import "./index.less";
import { Tabs, TabsTab } from "./side-bar";
import { attachPropertiesToComponent } from "../utils/attach-properties-to-component";
export default attachPropertiesToComponent(Tabs, {
    Tab: TabsTab,
});
