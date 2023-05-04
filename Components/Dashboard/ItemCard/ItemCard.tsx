import { getUser } from "@/Store/Slices/User";
import { Item } from "@/interfaces/generalResponses";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

const ItemCard = ({item:{description:{position,vacancy_id},}, Delete}:{item:Item, Delete:any}) => {
  const {t} = useTranslation('common')
  const {authorisation} = useSelector(getUser)

  
  

  
  return <div className="col-xl-4 col-lg-6 col-md-6">
  <div className="card">
  <div className="card-body">
    <div className="d-flex align-items-center mb-3">
      <a href="javascript:;" className="d-flex align-items-center">
        <div className="avatar avatar-sm me-2">
          <img src="/static/img/icons/brands/react-label.png" alt="Avatar" className="rounded-circle"/>
        </div>
        <div className="me-2 text-body h5 mb-0">
          {position}
        </div>
      </a>
      <div className="ms-auto">
        <ul className="list-inline mb-0 d-flex align-items-center">
          <li className="list-inline-item">
            <div className="dropdown">
              <button type="button" className="btn dropdown-toggle hide-arrow p-0" data-bs-toggle="dropdown" aria-expanded="false"><i className="bx bx-dots-vertical-rounded"></i></button>
              <ul className="dropdown-menu dropdown-menu-end" style={{}}>
                <li><a className="dropdown-item" >{t('site-vacancy')}</a></li>
                <li><Link className="dropdown-item" href={`my-items/${vacancy_id}/edit`}>{t('edit')}</Link></li>
                <li>
                  <hr className="dropdown-divider"/>
                </li>
                <li onClick={(() => Delete({vacancy_id, token:authorisation?.token}))}><a className="dropdown-item text-danger" >{t('delete')}</a></li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <p>We don’t make assumptions about the rest of your technology stack, so you can develop new features in React.</p>

      <div className="ms-auto">
        <a href="javascript:;" className="me-2"><span className="badge bg-label-success">28 gun qaldi</span></a>
      </div>
    </div>
  </div>
</div>
};

export default ItemCard;
