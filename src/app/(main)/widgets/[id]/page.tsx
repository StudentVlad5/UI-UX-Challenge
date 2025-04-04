import BreadcrumbInfo from "@/app/components/WidgetItemInfo/WidgetItemInfo";
import { widgetList } from "@/CONSTANTS";

export default function WidgetItem() {
  return (
  <BreadcrumbInfo item = {widgetList[0]}/>
  );
}
