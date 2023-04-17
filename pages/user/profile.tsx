

import Adress from "@/Components/Dashboard/Adress";
import MainMenu from "@/Components/Dashboard/MainMenu/MainMenu";
import Navbar from "@/Components/Dashboard/Navbar/Navbar";
import Row from "@/Components/Dashboard/Row/Row";
import BasicCard from "@/Components/Dashboard/Statistics/BasicCard";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";

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

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [
        'common',
      ])),
      // Will be passed to the page component as props
    },
  }
}

export default profile;
