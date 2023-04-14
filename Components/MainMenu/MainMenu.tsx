

const MainMenu = () => {
  return <>
  <aside id="layout-menu" className="layout-menu-horizontal menu-horizontal  menu bg-menu-theme flex-grow-0">
  <div className="container-fluid d-flex h-100">
    
    
    <ul style={{zIndex:'1000'}} className="menu-inner">

      {/* <!-- Dashboards --> */}
      <li className="menu-item
">
        <a href="javascript:void(0)" className="menu-link menu-toggle">
          <i className="menu-icon tf-icons bx bx-home-circle"></i>
          <div data-i18n="Dashboards">Profilim</div>
        </a>
      </li>

      {/* <!-- Layouts --> */}
      <li className="menu-item
 active">
        <a href="javascript:void(0)" className="menu-link menu-toggle">
          <i className="menu-icon tf-icons bx bx-layout"></i>
          <div data-i18n="Layouts">Elanı yerləşdir</div>
        </a>

        <ul className="menu-sub">
          <li className="menu-item">
            <a href="layouts-without-menu.html" className="menu-link">
              <i className="menu-icon tf-icons bx bx-menu"></i>
              <div data-i18n="Without menu">Without menu</div>
            </a>
          </li>
          <li className="menu-item">
            <a href="https://demos.themeselection.com/sneat-bootstrap-html-admin-template/html/vertical-menu-template/" className="menu-link" target="_blank">
              <i className="menu-icon tf-icons bx bx-vertical-center"></i>
              <div data-i18n="Vertical">Vertical</div>
            </a>
          </li>
          <li className="menu-item active">
            <a href="layouts-fluid.html" className="menu-link">
              <i className="menu-icon tf-icons bx bx-fullscreen"></i>
              <div data-i18n="Fluid">Fluid</div>
            </a>
          </li>
          <li className="menu-item">
            <a href="layouts-container.html" className="menu-link">
              <i className="menu-icon tf-icons bx bx-exit-fullscreen"></i>
              <div data-i18n="Container">Container</div>
            </a>
          </li>
          <li className="menu-item">
            <a href="layouts-blank.html" className="menu-link">
              <i className="menu-icon tf-icons bx bx-square-rounded"></i>
              <div data-i18n="Blank">Blank</div>
            </a>
          </li>
        </ul>
      </li>

      {/* <!-- Apps --> */}
      <li className="menu-item
">
        <a href="javascript:void(0)" className="menu-link menu-toggle">
          <i className='menu-icon tf-icons bx bx-customize'></i>
          <div data-i18n="Apps">Elanlarım</div>
        </a>
        <ul className="menu-sub">
          <li className="menu-item">
            <a href="app-email.html" className="menu-link">
              <i className="menu-icon tf-icons bx bx-envelope"></i>
              <div data-i18n="Email">Email</div>
            </a>
          </li>
          <li className="menu-item">
            <a href="app-chat.html" className="menu-link">
              <i className="menu-icon tf-icons bx bx-chat"></i>
              <div data-i18n="Chat">Chat</div>
            </a>
          </li>
          <li className="menu-item">
            <a href="app-calendar.html" className="menu-link">
              <i className="menu-icon tf-icons bx bx-calendar"></i>

              <div data-i18n="Calendar">Calendar</div>
            </a>
          </li>
          <li className="menu-item">
            <a href="app-kanban.html" className="menu-link">
              <i className="menu-icon tf-icons bx bx-grid"></i>
              <div data-i18n="Kanban">Kanban</div>
            </a>
          </li>
          <li className="menu-item
">
            <a href="javascript:void(0);" className="menu-link menu-toggle">
              <i className='menu-icon tf-icons bx bx-food-menu'></i>
              <div data-i18n="Invoice">Invoice</div>
            </a>
            <ul className="menu-sub">
              <li className="menu-item">
                <a href="app-invoice-list.html" className="menu-link">
                  <div data-i18n="List">List</div>
                </a>
              </li>
              <li className="menu-item">
                <a href="app-invoice-preview.html" className="menu-link">
                  <div data-i18n="Preview">Preview</div>
                </a>
              </li>
              <li className="menu-item">
                <a href="app-invoice-edit.html" className="menu-link">
                  <div data-i18n="Edit">Edit</div>
                </a>
              </li>
              <li className="menu-item">
                <a href="app-invoice-add.html" className="menu-link">
                  <div data-i18n="Add">Add</div>
                </a>
              </li>
            </ul>
          </li>
          <li className="menu-item
">
            <a href="javascript:void(0);" className="menu-link menu-toggle">
              <i className="menu-icon tf-icons bx bx-user"></i>
              <div data-i18n="Users">Users</div>
            </a>
            <ul className="menu-sub">
              <li className="menu-item">
                <a href="app-user-list.html" className="menu-link">
                  <div data-i18n="List">List</div>
                </a>
              </li>
              <li className="menu-item
">
                <a href="javascript:void(0);" className="menu-link menu-toggle">
                  <div data-i18n="View">View</div>
                </a>
                <ul className="menu-sub">
                  <li className="menu-item">
                    <a href="app-user-view-account.html" className="menu-link">
                      <div data-i18n="Account">Account</div>
                    </a>
                  </li>
                  <li className="menu-item">
                    <a href="app-user-view-security.html" className="menu-link">
                      <div data-i18n="Security">Security</div>
                    </a>
                  </li>
                  <li className="menu-item">
                    <a href="app-user-view-billing.html" className="menu-link">
                      <div data-i18n="Billing & Plans">Billing & Plans</div>
                    </a>
                  </li>
                  <li className="menu-item">
                    <a href="app-user-view-notifications.html" className="menu-link">
                      <div data-i18n="Notifications">Notifications</div>
                    </a>
                  </li>
                  <li className="menu-item">
                    <a href="app-user-view-connections.html" className="menu-link">
                      <div data-i18n="Connections">Connections</div>
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li className="menu-item
">
            <a href="javascript:void(0);" className="menu-link menu-toggle">
              <i className='menu-icon tf-icons bx bx-check-shield'></i>
              <div data-i18n="Roles & Permissions">Roles & Permission</div>
            </a>
            <ul className="menu-sub">
              <li className="menu-item">
                <a href="app-access-roles.html" className="menu-link">
                  <div data-i18n="Roles">Roles</div>
                </a>
              </li>
              <li className="menu-item">
                <a href="app-access-permission.html" className="menu-link">
                  <div data-i18n="Permission">Permission</div>
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </li>

      {/* <!-- Pages --> */}
      <li className="menu-item
">
        <a href="javascript:void(0)" className="menu-link menu-toggle">
          <i className="menu-icon tf-icons bx bx-collection"></i>
          <div data-i18n="Pages">Paketlərim</div>
        </a>
        <ul className="menu-sub">
          <li className="menu-item
">
            <a href="javascript:void(0);" className="menu-link menu-toggle">
              <i className="menu-icon tf-icons bx bx-user-circle"></i>
              <div data-i18n="User Profile">User Profile</div>
            </a>
            <ul className="menu-sub">
              <li className="menu-item">
                <a href="pages-profile-user.html" className="menu-link">
                  <div data-i18n="Profile">Profile</div>
                </a>
              </li>
              <li className="menu-item">
                <a href="pages-profile-teams.html" className="menu-link">
                  <div data-i18n="Teams">Teams</div>
                </a>
              </li>
              <li className="menu-item">
                <a href="pages-profile-projects.html" className="menu-link">
                  <div data-i18n="Projects">Projects</div>
                </a>
              </li>
              <li className="menu-item">
                <a href="pages-profile-connections.html" className="menu-link">
                  <div data-i18n="Connections">Connections</div>
                </a>
              </li>
            </ul>
          </li>
          <li className="menu-item
">
            <a href="javascript:void(0);" className="menu-link menu-toggle">
              <i className="menu-icon tf-icons bx bx-cog"></i>
              <div data-i18n="Account Settings">Account Settings</div>
            </a>
            <ul className="menu-sub">
              <li className="menu-item">
                <a href="pages-account-settings-account.html" className="menu-link">
                  <div data-i18n="Account">Account</div>
                </a>
              </li>
              <li className="menu-item">
                <a href="pages-account-settings-security.html" className="menu-link">
                  <div data-i18n="Security">Security</div>
                </a>
              </li>
              <li className="menu-item">
                <a href="pages-account-settings-billing.html" className="menu-link">
                  <div data-i18n="Billing & Plans">Billing & Plans</div>
                </a>
              </li>
              <li className="menu-item">
                <a href="pages-account-settings-notifications.html" className="menu-link">
                  <div data-i18n="Notifications">Notifications</div>
                </a>
              </li>
              <li className="menu-item">
                <a href="pages-account-settings-connections.html" className="menu-link">
                  <div data-i18n="Connections">Connections</div>
                </a>
              </li>
            </ul>
          </li>
          <li className="menu-item">
            <a href="pages-faq.html" className="menu-link">
              <i className="menu-icon tf-icons bx bx-help-circle"></i>
              <div data-i18n="FAQ">FAQ</div>
            </a>
          </li>
          <li className="menu-item
">
            <a href="javascript:void(0);" className="menu-link menu-toggle">
              <i className="menu-icon tf-icons bx bxs-buoy"></i>
              <div data-i18n="Help Center">Help Center</div>
            </a>
            <ul className="menu-sub">
              <li className="menu-item">
                <a href="pages-help-center-landing.html" className="menu-link">
                  <div data-i18n="Landing">Landing</div>
                </a>
              </li>
              <li className="menu-item">
                <a href="pages-help-center-categories.html" className="menu-link">
                  <div data-i18n="Categories">Categories</div>
                </a>
              </li>
              <li className="menu-item">
                <a href="pages-help-center-article.html" className="menu-link">
                  <div data-i18n="Article">Article</div>
                </a>
              </li>
            </ul>
          </li>
          <li className="menu-item">
            <a href="pages-pricing.html" className="menu-link">
              <i className="menu-icon tf-icons bx bx-diamond"></i>
              <div data-i18n="Pricing">Pricing</div>
            </a>
          </li>
          <li className="menu-item
">
            <a href="javascript:void(0);" className="menu-link menu-toggle">
              <i className="menu-icon tf-icons bx bx-shape-circle"></i>
              <div data-i18n="Misc">Misc</div>
            </a>
            <ul className="menu-sub">
              <li className="menu-item">
                <a href="pages-misc-error.html" className="menu-link" target="_blank">
                  <div data-i18n="Error">Error</div>
                </a>
              </li>
              <li className="menu-item">
                <a href="pages-misc-under-maintenance.html" className="menu-link" target="_blank">
                  <div data-i18n="Under Maintenance">Under Maintenance</div>
                </a>
              </li>
              <li className="menu-item">
                <a href="pages-misc-comingsoon.html" className="menu-link" target="_blank">
                  <div data-i18n="Coming Soon">Coming Soon</div>
                </a>
              </li>
              <li className="menu-item">
                <a href="pages-misc-not-authorized.html" className="menu-link" target="_blank">
                  <div data-i18n="Not Authorized">Not Authorized</div>
                </a>
              </li>
            </ul>
          </li>

          <li className="menu-item
">
            <a href="javascript:void(0);" className="menu-link menu-toggle">
              <i className="menu-icon tf-icons bx bx-lock-open-alt"></i>
              <div data-i18n="Authentications">Authentications</div>
            </a>
            <ul className="menu-sub">
              <li className="menu-item
">
                <a href="javascript:void(0);" className="menu-link menu-toggle">
                  <div data-i18n="Login">Login</div>
                </a>
                <ul className="menu-sub">
                  <li className="menu-item">
                    <a href="auth-login-basic.html" className="menu-link" target="_blank">
                      <div data-i18n="Basic">Basic</div>
                    </a>
                  </li>
                  <li className="menu-item">
                    <a href="auth-login-cover.html" className="menu-link" target="_blank">
                      <div data-i18n="Cover">Cover</div>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="menu-item
">
                <a href="javascript:void(0);" className="menu-link menu-toggle">
                  <div data-i18n="Register">Register</div>
                </a>
                <ul className="menu-sub">
                  <li className="menu-item">
                    <a href="auth-register-basic.html" className="menu-link" target="_blank">
                      <div data-i18n="Basic">Basic</div>
                    </a>
                  </li>
                  <li className="menu-item">
                    <a href="auth-register-cover.html" className="menu-link" target="_blank">
                      <div data-i18n="Cover">Cover</div>
                    </a>
                  </li>
                  <li className="menu-item">
                    <a href="auth-register-multisteps.html" className="menu-link" target="_blank">
                      <div data-i18n="Multi-steps">Multi-steps</div>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="menu-item">
                <a href="javascript:void(0);" className="menu-link menu-toggle">
                  <div data-i18n="Verify Email">Verify Email</div>
                </a>
                <ul className="menu-sub">
                  <li className="menu-item">
                    <a href="auth-verify-email-basic.html" className="menu-link" target="_blank">
                      <div data-i18n="Basic">Basic</div>
                    </a>
                  </li>
                  <li className="menu-item">
                    <a href="auth-verify-email-cover.html" className="menu-link" target="_blank">
                      <div data-i18n="Cover">Cover</div>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="menu-item">
                <a href="javascript:void(0);" className="menu-link menu-toggle">
                  <div data-i18n="Reset Password">Reset Password</div>
                </a>
                <ul className="menu-sub">
                  <li className="menu-item">
                    <a href="auth-reset-password-basic.html" className="menu-link" target="_blank">
                      <div data-i18n="Basic">Basic</div>
                    </a>
                  </li>
                  <li className="menu-item">
                    <a href="auth-reset-password-cover.html" className="menu-link" target="_blank">
                      <div data-i18n="Cover">Cover</div>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="menu-item">
                <a href="javascript:void(0);" className="menu-link menu-toggle">
                  <div data-i18n="Forgot Password">Forgot Password</div>
                </a>
                <ul className="menu-sub">
                  <li className="menu-item">
                    <a href="auth-forgot-password-basic.html" className="menu-link" target="_blank">
                      <div data-i18n="Basic">Basic</div>
                    </a>
                  </li>
                  <li className="menu-item">
                    <a href="auth-forgot-password-cover.html" className="menu-link" target="_blank">
                      <div data-i18n="Cover">Cover</div>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="menu-item">
                <a href="javascript:void(0);" className="menu-link menu-toggle">
                  <div data-i18n="Two Steps">Two Steps</div>
                </a>
                <ul className="menu-sub">
                  <li className="menu-item">
                    <a href="auth-two-steps-basic.html" className="menu-link" target="_blank">
                      <div data-i18n="Basic">Basic</div>
                    </a>
                  </li>
                  <li className="menu-item">
                    <a href="auth-two-steps-cover.html" className="menu-link" target="_blank">
                      <div data-i18n="Cover">Cover</div>
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li className="menu-item
">
            <a href="javascript:void(0);" className="menu-link menu-toggle">
              <i className="menu-icon tf-icons bx bx-spreadsheet"></i>
              <div data-i18n="Wizard Examples">Wizard Examples</div>
            </a>
            <ul className="menu-sub">
              <li className="menu-item">
                <a href="wizard-ex-checkout.html" className="menu-link">
                  <div data-i18n="Checkout">Checkout</div>
                </a>
              </li>
              <li className="menu-item">
                <a href="wizard-ex-property-listing.html" className="menu-link">
                  <div data-i18n="Property Listing">Property Listing</div>
                </a>
              </li>
              <li className="menu-item">
                <a href="wizard-ex-create-deal.html" className="menu-link">
                  <div data-i18n="Create Deal">Create Deal</div>
                </a>
              </li>
            </ul>
          </li>
          <li className="menu-item">
            <a href="modal-examples.html" className="menu-link">
              <i className="menu-icon tf-icons bx bx-window-open"></i>
              <div data-i18n="Modal Examples">Modal Examples</div>
            </a>
          </li>
        </ul>
      </li>

      {/* <!-- Components --> */}
      <li className="menu-item
">
        <a href="javascript:void(0)" className="menu-link menu-toggle">
          <i className="menu-icon tf-icons bx bx-code-block"></i>
          <div data-i18n="Components">Şirkətim</div>
        </a>
        <ul className="menu-sub">
          {/* <!-- Cards --> */}
          <li className="menu-item
">
            <a href="javascript:void(0);" className="menu-link menu-toggle">
              <i className="menu-icon tf-icons bx bx-collection"></i>
              <div data-i18n="Cards">Təhlükəsizlik</div>
            </a>
            <ul className="menu-sub">
              <li className="menu-item">
                <a href="cards-basic.html" className="menu-link">
                  <div data-i18n="Basic">Basic</div>
                </a>
              </li>
              <li className="menu-item">
                <a href="cards-advance.html" className="menu-link">
                  <div data-i18n="Advance">Advance</div>
                </a>
              </li>
              <li className="menu-item">
                <a href="cards-statistics.html" className="menu-link">
                  <div data-i18n="Statistics">Statistics</div>
                </a>
              </li>
              <li className="menu-item">
                <a href="cards-analytics.html" className="menu-link">
                  <div data-i18n="Analytics">Analytics</div>
                </a>
              </li>
              <li className="menu-item">
                <a href="cards-gamifications.html" className="menu-link">
                  <div data-i18n="Gamifications">Gamifications</div>
                </a>
              </li>
              <li className="menu-item">
                <a href="cards-actions.html" className="menu-link">
                  <div data-i18n="Actions">Actions</div>
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </li>

      {/* <!-- Forms --> */}
      <li className="menu-item
">
        <a href="javascript:void(0)" className="menu-link menu-toggle">
          <i className="menu-icon tf-icons bx bx-book-content"></i>
          <div data-i18n="Forms">Təhlükəsizlik</div>
        </a>
        <ul className="menu-sub">
          <li className="menu-item
">
            <a href="javascript:void(0);" className="menu-link menu-toggle">
              <i className="menu-icon tf-icons bx bx-detail"></i>
              <div data-i18n="Form Elements">Form Elements</div>
            </a>
            <ul className="menu-sub">
              <li className="menu-item">
                <a href="forms-basic-inputs.html" className="menu-link">
                  <div data-i18n="Basic Inputs">Basic Inputs</div>
                </a>
              </li>
              <li className="menu-item">
                <a href="forms-input-groups.html" className="menu-link">
                  <div data-i18n="Input groups">Input groups</div>
                </a>
              </li>
              <li className="menu-item">
                <a href="forms-custom-options.html" className="menu-link">
                  <div data-i18n="Custom Options">Custom Options</div>
                </a>
              </li>
              <li className="menu-item">
                <a href="forms-editors.html" className="menu-link">
                  <div data-i18n="Editors">Editors</div>
                </a>
              </li>
              <li className="menu-item">
                <a href="forms-file-upload.html" className="menu-link">
                  <div data-i18n="File Upload">File Upload</div>
                </a>
              </li>
              <li className="menu-item">
                <a href="forms-pickers.html" className="menu-link">
                  <div data-i18n="Pickers">Pickers</div>
                </a>
              </li>
              <li className="menu-item">
                <a href="forms-selects.html" className="menu-link">
                  <div data-i18n="Select & Tags">Select &amp; Tags</div>
                </a>
              </li>
              <li className="menu-item">
                <a href="forms-sliders.html" className="menu-link">
                  <div data-i18n="Sliders">Sliders</div>
                </a>
              </li>
              <li className="menu-item">
                <a href="forms-switches.html" className="menu-link">
                  <div data-i18n="Switches">Switches</div>
                </a>
              </li>
              <li className="menu-item">
                <a href="forms-extras.html" className="menu-link">
                  <div data-i18n="Extras">Extras</div>
                </a>
              </li>
            </ul>
          </li>
          <li className="menu-item
">
            <a href="javascript:void(0);" className="menu-link menu-toggle">
              <i className="menu-icon tf-icons bx bx-detail"></i>
              <div data-i18n="Form Layouts">Form Layouts</div>
            </a>
            <ul className="menu-sub">
              <li className="menu-item">
                <a href="form-layouts-vertical.html" className="menu-link">
                  <div data-i18n="Vertical Form">Vertical Form</div>
                </a>
              </li>
              <li className="menu-item">
                <a href="form-layouts-horizontal.html" className="menu-link">
                  <div data-i18n="Horizontal Form">Horizontal Form</div>
                </a>
              </li>
              <li className="menu-item">
                <a href="form-layouts-sticky.html" className="menu-link">
                  <div data-i18n="Sticky Actions">Sticky Actions</div>
                </a>
              </li>
            </ul>
          </li>
          <li className="menu-item
">
            <a href="javascript:void(0);" className="menu-link menu-toggle">
              <i className="menu-icon tf-icons bx bx-carousel"></i>
              <div data-i18n="Form Wizard">Form Wizard</div>
            </a>
            <ul className="menu-sub">
              <li className="menu-item">
                <a href="form-wizard-numbered.html" className="menu-link">
                  <div data-i18n="Numbered">Numbered</div>
                </a>
              </li>
              <li className="menu-item">
                <a href="form-wizard-icons.html" className="menu-link">
                  <div data-i18n="Icons">Icons</div>
                </a>
              </li>
            </ul>
          </li>
          <li className="menu-item">
            <a href="form-validation.html" className="menu-link">
              <i className="menu-icon tf-icons bx bx-list-check"></i>
              <div data-i18n="Form Validation">Form Validation</div>
            </a>
          </li>
        </ul>
      </li>

 

      

    

    </ul>
    
    
  </div>
</aside>
  </>
}

export default MainMenu