import { HOME_PATH, MENU_PATH, ROUTINE_PATH } from "@/constants/routes";
import NavigationBar from "@/components/common/navigation/NavigationBar";
import ServerIcon from "@/components/common/icon/ServerIcon";

function GlobalNavigationBar() {
  return (
    <footer className="fixed bottom-0 left-0 h-14 w-full overflow-hidden border border-gray-100">
      <NavigationBar>
        <NavigationBar.Item
          route={ROUTINE_PATH}
          icon={
            <ServerIcon name="timer" className="h-6 w-6 fill-primary-700" />
          }
        />
        <NavigationBar.Item
          route={HOME_PATH}
          icon={<ServerIcon name="home" className="h-6 w-6 fill-primary-700" />}
        />
        <NavigationBar.Item
          route={MENU_PATH}
          icon={<ServerIcon name="menu" className="h-6 w-6 fill-primary-700" />}
        />
      </NavigationBar>
    </footer>
  );
}

export default GlobalNavigationBar;
