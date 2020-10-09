import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import PerfectScrollbar from "perfect-scrollbar";

// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Sidebar from "components/Sidebar/Sidebar.js";

import routes from "routes.js";

import logo from "assets/img/react-logo.png";

var ps;

export default class Index extends React.Component {
  state = {
    activeColor: "red",
    sidebarMini: true,
    opacity: 0,
    sidebarOpened: false
  };
  componentDidMount() {
    // Check if you are using Windows or Not
    if (navigator.platform.indexOf("Win") > -1) {
      // if windows OS then set MacOs scrollbar
      document.documentElement.classList.add("perfect-scrollbar-on");
      document.documentElement.classList.remove("perfect-scrollbar-off");
      ps = new PerfectScrollbar(this.refs.mainPanel);
      this.refs.mainPanel.addEventListener(
        "ps-scroll-y",
        this.showNavbarButton
      );
      let tables = document.querySelectorAll(".table-responsive");
      for (let i = 0; i < tables.length; i++) {
        ps = new PerfectScrollbar(tables[i]);
      }
    }
    window.addEventListener("scroll", this.showNavbarButton);
  }
  componentWillUnmount() {
    if (navigator.platform.indexOf("Win") > -1) {
      ps.destroy();
      document.documentElement.className.add("perfect-scrollbar-off");
      document.documentElement.classList.remove("perfect-scrollbar-on");
      this.refs.mainPanel.removeEventListener(
        "ps-scroll-y",
        this.showNavbarButton
      );
    }
    window.removeEventListener("scroll", this.showNavbarButton);
  }
  componentDidUpdate(e) {
    if (e.location.pathname !== e.history.location.pathname) {
      if (navigator.platform.indexOf("Win") > -1) {
        let tables = document.querySelectorAll(".table-responsive");
        for (let i = 0; i < tables.length; i++) {
          ps = new PerfectScrollbar(tables[i]);
        }
      }
      document.documentElement.scrollTop = 0;
      document.scrollingElement.scrollTop = 0;
      this.refs.mainPanel.scrollTop = 0;
    }
  }
  showNavbarButton = () => {
    if (
      document.documentElement.scrollTop > 50 ||
      document.scrollingElement.scrollTop > 50 ||
      this.refs.mainPanel.scrollTop > 50
    ) {
      this.setState({ opacity: 1 });
    } else if (
      document.documentElement.scrollTop <= 50 ||
      document.scrollingElement.scrollTop <= 50 ||
      this.refs.mainPanel.scrollTop <= 50
    ) {
      this.setState({ opacity: 0 });
    }
  };
  getRoutes = routes => {
    return routes.map((prop, key) => {
      if (prop.layout === "/index") {
        return (
          <Route
            path={prop.layout + prop.path}
            component={prop.component}
            key={key}
          />
        );
      } else {
        return null;
      }
    });
  };
  getActiveRoute = routes => {
    let activeRoute = "Default Brand Text";
    for (let i = 0; i < routes.length; i++) {
      if (
          window.location.pathname.indexOf(
            routes[i].layout + routes[i].path
          ) !== -1
        ) {
          return routes[i].name;
        }
    }
    return activeRoute;
  };
  handleActiveClick = color => {
    this.setState({ activeColor: color });
  };
  handleMiniClick = () => {
    document.body.classList.toggle("sidebar-mini");
  };
  toggleSidebar = () => {
    this.setState({
      sidebarOpened: !this.state.sidebarOpened
    });
    document.documentElement.classList.toggle("nav-open");
  };
  closeSidebar = () => {
    this.setState({
      sidebarOpened: false
    });
    document.documentElement.classList.remove("nav-open");
  };
  render() {
    return (
      <div className="wrapper">
        <div
          className="navbar-minimize-fixed"
          style={{ opacity: this.state.opacity }}
        >
          <button
            className="minimize-sidebar btn btn-link btn-just-icon"
            onClick={this.handleMiniClick}
          >
            <i className="tim-icons icon-align-center visible-on-sidebar-regular text-muted" />
            <i className="tim-icons icon-bullet-list-67 visible-on-sidebar-mini text-muted" />
          </button>
        </div>
        <Sidebar
          {...this.props}
          routes={routes}
          activeColor={this.state.activeColor}
          logo={{
            outterLink: "/index/dashboard",
            text: "IPL Dashboard",
            imgSrc: logo
          }}
          closeSidebar={this.closeSidebar}
        />
        <div
          className="main-panel"
          ref="mainPanel"
          data={this.state.activeColor}
        >
          <IndexNavbar
            {...this.props}
            handleMiniClick={this.handleMiniClick}
            brandText={this.getActiveRoute(routes)}
            sidebarOpened={this.state.sidebarOpened}
            toggleSidebar={this.toggleSidebar}
          />
          <Switch>
            {this.getRoutes(routes)}
            <Redirect from="*" to="/index/dashboard" />
          </Switch>
        </div>
      </div>
    );
  }
}
