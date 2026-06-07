import { useSideBar } from "../../hooks/useSideBar.tsx";

export default function SideBar() {
  const { sideBarNavs } = useSideBar();

  return (
    <aside className="li-section-sm li-h-full li-sidebar">
      <div className="li-flex-xl li-flex-col li-border-b">
        <div className="li-sidebar-header">
          <div className="li-sidebar-logo">RM</div>
          <p className="li-sidebar-title">Reddit-Mine</p>
        </div>
      </div>

      <section className="li-sidebar-menu li-sidebar-group">
        <p className="li-sidebar-group-title">MAIN MENU</p>
        <ul className="li-flex-lg li-flex-col li-container li-sidebar-item">
          {sideBarNavs.map((nav) => (
            <li key={nav.id}>
              <a href="">
                {nav.icon && <nav.icon />}
                {nav.navLabel}
              </a>
            </li>
          ))}
        </ul>
      </section>

      <footer className="li-sidebar-footer li-flex">
        <div className="li-sidebar-user">
          <div className=" li-avatar li-sidear-user-avatar">MR</div>
          <div className="li-flex-no-gap li-flex-col">
            <p className="li-sidebar-user-name">Michael Rockson</p>
            <span className="li-sidebar-user-role">example@gmail.com</span>
          </div>
        </div>
      </footer>
    </aside>
  );
}
