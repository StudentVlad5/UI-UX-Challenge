import Breadcrumbs from "@/app/components/WidgetsList/WidgetsList";
import { widgetList } from "@/CONSTANTS";

export default function Widgets() {
  return (
  <Breadcrumbs items={widgetList}/>
  );
}
