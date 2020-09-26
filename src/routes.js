import VectorMap from "views/maps/VectorMap.js";
import GoogleMaps from "views/maps/GoogleMaps.js";
import FullScreenMap from "views/maps/FullScreenMap.js";
import ReactTables from "views/tables/ReactTables.js";
import RegularTables from "views/tables/RegularTables.js";
import ExtendedTables from "views/tables/ExtendedTables.js";
import Widgets from "views/Widgets.js";
import Charts from "views/Charts.js";
import Dashboard from "views/Dashboard.js";
import Buttons from "views/components/Buttons.js";
import SweetAlert from "views/components/SweetAlert.js";
import Notifications from "views/components/Notifications.js";
import Grid from "views/components/Grid.js";
import Typography from "views/components/Typography.js";
import Panels from "views/components/Panels.js";
import Icons from "views/components/Icons.js";


const routes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "tim-icons icon-chart-pie-36",
    component: Dashboard,
    layout: "/index"
  },
  {
    collapse: true,
    name: "Components",
    icon: "tim-icons icon-molecule-40",
    state: "componentsCollapse",
    views: [
      {
        collapse: true,
        name: "Multi Level Collapse",
        state: "multiCollapse",
        views: [
          {
            path: "/buttons",
            name: "Buttons",
            component: Buttons,
            layout: "/index"
          }
        ]
      },
      {
        path: "/buttons",
        name: "Buttons",
        component: Buttons,
        layout: "/index"
      },
      {
        path: "/grid-system",
        name: "Grid System",
        component: Grid,
        layout: "/index"
      },
      {
        path: "/panels",
        name: "Panels",
        component: Panels,
        layout: "/index"
      },
      {
        path: "/sweet-alert",
        name: "Sweet Alert",
        component: SweetAlert,
        layout: "/index"
      },
      {
        path: "/notifications",
        name: "Notifications",
        component: Notifications,
        layout: "/index"
      },
      {
        path: "/icons",
        name: "Icons",
        component: Icons,
        layout: "/index"
      },
      {
        path: "/typography",
        name: "Typography",
        component: Typography,
        layout: "/index"
      }
    ]
  },
  {
    collapse: true,
    name: "Tables",
    icon: "tim-icons icon-puzzle-10",
    state: "tablesCollapse",
    views: [
      {
        path: "/regular-tables",
        name: "Regular Tables",
        component: RegularTables,
        layout: "/index"
      },
      {
        path: "/extended-tables",
        name: "Extended Tables",
        component: ExtendedTables,
        layout: "/index"
      },
      {
        path: "/react-tables",
        name: "React Tables",
        component: ReactTables,
        layout: "/index"
      }
    ]
  },
  {
    collapse: true,
    name: "Maps",
    icon: "tim-icons icon-pin",
    state: "mapsCollapse",
    views: [
      {
        path: "/google-maps",
        name: "Google Maps",
        component: GoogleMaps,
        layout: "/index"
      },
      {
        path: "/full-screen-map",
        name: "Full Screen Map",
        component: FullScreenMap,
        layout: "/index"
      },
      {
        path: "/vector-map",
        name: "Vector Map",
        component: VectorMap,
        layout: "/index"
      }
    ]
  },
  {
    path: "/widgets",
    name: "Widgets",
    icon: "tim-icons icon-settings",
    component: Widgets,
    layout: "/index"
  },
  {
    path: "/charts",
    name: "Charts",
    icon: "tim-icons icon-chart-bar-32",
    component: Charts,
    layout: "/index"
  }
];

export default routes;
