import MainWraper from "@/Components/Dashboard/MainWraper/MainWraper";
import NewItemForm from "@/Components/Dashboard/NewItemForm/NewItemForm";
import { getUser } from "@/Store/Slices/User";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const Edit = () => {
  const {push} = useRouter()
  const {authorisation} = useSelector(getUser)
  useEffect(() => {
     if (!(authorisation?.token.length > 0)) {
       push("/login");
     }
 });

  return (
    <MainWraper>
      <NewItemForm />
    </MainWraper>
  );
};

export default Edit;