import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "next-i18next";

const FourOhFour = () => {
  const { t: translate } = useTranslation();
  return (
    <div className="container-xxl container-p-y">
      <div style={{ textAlign: "center" }} className="misc-wrapper">
        <div className="mt-5">
          <Image
            src="/static/img/404.png"
            alt="icon"
            width="450"
            height={'450'}
            className="img-fluid"
            data-app-light-img="illustrations/girl-with-laptop-light.png"
            data-app-dark-img="illustrations/girl-with-laptop-dark.html"
          />
        </div>
        <p className="mb-4 mx-2">
          {translate('404-error')}
          <br />
          {translate("404-contact")}
        </p>
        <Link href="/" className="btn btn-primary">
          {translate('404-back')}
        </Link>
      </div>
    </div>
  );
};

export default FourOhFour;

