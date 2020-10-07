import Contact from "views/Contact.js";
import Dashboard from "views/Dashboard.js";


const routes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "tim-icons icon-chart-pie-36",
    component: Dashboard,
    layout: "/index"
  },
  {
    path: "/contact",
    name: "Contact Us",
    icon: "tim-icons icon-chat-33",
    component: Contact,
    layout: "/index"
  }
];

export default routes;
