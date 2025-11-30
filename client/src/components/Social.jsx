import * as React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import GitHubIcon from "@mui/icons-material/GitHub";
import WorkIcon from "@mui/icons-material/Work";
import { Tooltip, Link } from '@mui/material';

const Social = () => {
  return (
    <div>
      <Tooltip title="Preguntas frecuentes">
        <Link href="/FaqPage" target="_blank" sx={{ my: 2, mr: 3, color: 'white' }}>
          <QuestionMarkIcon />
        </Link>
      </Tooltip>

      <Tooltip title="Portafolio">
        <Link
          href="https://jul1alcaraz.netlify.app/"
          target="_blank"
          sx={{ my: 2, mr: 3 }}
        >
          <WorkIcon />
        </Link>
      </Tooltip>

      <Tooltip title="GitHub">
        <Link
          href="https://github.com/jul1alcaraz"
          target="_blank"
          sx={{ my: 2, mr: 3 }}
        >
          <GitHubIcon />
        </Link>
      </Tooltip>

      <Tooltip title="LinkedIn">
        <Link
          href="https://www.linkedin.com/in/jul1alcaraz/"
          target="_blank"
          sx={{ my: 2, mr: 3 }}
        >
          <LinkedInIcon />
        </Link>
      </Tooltip>

      <Tooltip title="Instagram">
        <Link
          href="https://www.instagram.com/"
          target="_blank"
          sx={{ my: 2, mr: 3, color: 'white' }}
        >
          <InstagramIcon />
        </Link>
      </Tooltip>

      <Tooltip title="Comunicate con nosotros">
        <Link href="/contact" target="_blank" sx={{ my: 2, mr: 3, color: 'white' }}>
          <ContactMailIcon />
        </Link>
      </Tooltip>
    </div>
  );
};

export default Social;
