import Adress from "@/Components/Dashboard/Adress/Adress";
import MainWraper from "@/Components/Dashboard/MainWraper/MainWraper";
import Row from "@/Components/Dashboard/Row/Row";
import BasicCard from "@/Components/Dashboard/Statistics/BasicCard";
import { getUser } from "@/Store/Slices/User";

import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const Profile = () => {

  const {push} = useRouter()
  
  const {authorisation} = useSelector(getUser)
  useEffect(() => {
     if (!(authorisation?.token.length > 0)) {
       push("user/login");
     }
  })
  return (
    <MainWraper>
      <div className="container-xxl flex-grow-1 container-p-y">
        <Adress start="Test" target="Profil" />
        <Row>
          <BasicCard
            title="Session"
            badge="bg-label-primary rounded p-2"
            icon="bx-trending-up bx-sm"
            notification="Last Week Analytics"
            progress={29}
            value={"58,352"}
          />
          <BasicCard
            title="Time On Site"
            badge="bg-label-info rounded p-2"
            icon="bx-time-five bx-sm"
            notification="Last Week Analytics"
            progress={18}
            value={"28m 14s"}
          />
          <BasicCard
            title="Bounce Rate"
            badge="bg-label-danger rounded p-2"
            icon="bx-pie-chart-alt bx-sm"
            notification="Last Week Analytics"
            progress={-14}
            value={"62%"}
          />
          <BasicCard
            title="Users"
            badge="badge bg-label-success rounded p-2"
            icon="bx bx-user bx-sm"
            notification="Last Week Analytics"
            progress={42}
            value={"18,472"}
          />
        </Row>
      </div>
    </MainWraper>
  );
};

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
      // Will be passed to the page component as props
    },
  };
}

export default Profile;
