import { Projects } from "../../apps/data/Projects";
import { Experience } from "../../apps/data/Experience";
import AppPageType from "./page";

function getAppPageObject(id: string) {
  try {
    return require(`@/assets/pages/${id}`).default;
  } catch (e) {
    return null;
  }
}

function getAppPage(id: string) {
  const apps = [...Projects, ...Experience];
  const appObject = apps.find((app) => app.path === `/${id}`);
  if (!appObject) return;
  const pageObject = getAppPageObject(id);
  if (!pageObject) return;
  const appstoreId = appObject.appstore?.replace(
    "https://apps.apple.com/app/id",
    ""
  );
  const playstoreId = appObject.playstore?.replace(
    "https://play.google.com/store/apps/details?id=",
    ""
  );
  const page: AppPageType = {
    ...pageObject,
    app: appObject,
    appstoreId,
    playstoreId,
  };
  return page;
}

export default getAppPage;
