import {FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

import "../styles/components/socialnetworks.sass";

const instagram = [
  {name:'instagram', icon: <FaInstagram />},
];
const linkedin = [
  {name:'linkedin', icon: <FaLinkedin />, },
];
const github = [
  {name:'github', icon: <FaGithub />},
]

const SocialNetworks = () => {
  return (
  <section id='social-networks'>
    
    {linkedin.map((network)=> (
        <a href="https://www.linkedin.com/in/guilherme-antunes-72610331a/" className='social-btn' id={network.name} key={network.name}>
        {network.icon}
        </a>
      ))},
     {github.map((network)=> (
        <a href="https://github.com/guilherme-antunes/" className='social-btn' id={network.name} key={network.name}>
        {network.icon}
        </a>
      ))},
    {instagram.map((network)=> (
        <a href="https://www.instagram.com/gui.tarrist_/" className='social-btn' id={network.name} key={network.name}>
        {network.icon}
        </a>
     ))}
     </section>

  );
};

export default SocialNetworks