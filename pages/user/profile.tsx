import Adress from "@/Components/Adress";
import BasicCard from "@/Components/Cards/Statistics/BasicCard";
import MainMenu from "@/Components/MainMenu/MainMenu";
import Navbar from "@/Components/Navbar/Navbar";
import Row from "@/Components/Row/Row";

const profile = () => {
  return (
    <div className="layout-wrapper layout-navbar-full layout-horizontal layout-without-menu">
      <div className="layout-container">
        <Navbar>
          <MainMenu />
          <div className="container-xxl flex-grow-1 container-p-y">
            <Adress start="Test" target="Profil" />
            <Row>
              <BasicCard
                title="Session"
                badge="bg-label-primary rounded p-2"
                icon="bx-trending-up bx-sm"
                notification="Last Week Analytics"
                progress={29}
                value={'58,352'}
              />
              <BasicCard
                title="Time On Site"
                badge="bg-label-info rounded p-2"
                icon="bx-time-five bx-sm"
                notification="Last Week Analytics"
                progress={18}
                value={'28m 14s'}
              />
              <BasicCard
                title="Bounce Rate"
                badge="bg-label-danger rounded p-2"
                icon="bx-pie-chart-alt bx-sm"
                notification="Last Week Analytics"
                progress={-14}
                value={'62%'}
              />
              <BasicCard
                title="Users"
                badge="badge bg-label-success rounded p-2"
                icon="bx bx-user bx-sm"
                notification="Last Week Analytics"
                progress={42}
                value={'18,472'}
              />
            </Row>
          </div>
        </Navbar>
      </div>
    </div>
  );
};

export default profile;
