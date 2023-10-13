import Avatar from "../img/eu.jpg"
import "../styles/components/sidebar.sass"

import InformationContainer from "./InformationContainer"
import SocialNetworks from "./SocialNetworks"

const Sidebar = () => {

  return (
    <aside id="sidebar">
      <img src={Avatar} alt="Guilherme Antunes" />
      <p className="title">Desenvolvedor Front-End</p>
      <SocialNetworks />
      <InformationContainer />
      <a href="https://drive.google.com/file/d/16eFxf6Z-M-Fz3joKUBeNPdXtzELKAY51/view?usp=drive_link" className="btn">
        Download Currículo
      </a>
    </aside>
  )
}

export default Sidebar