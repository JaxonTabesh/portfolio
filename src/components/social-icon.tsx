import { Tooltip, TooltipTrigger, TooltipContent } from '@/components/ui/tooltip';
import { FaGithub, FaLinkedin, FaEnvelope, FaFileAlt } from 'react-icons/fa';
import type { IconType } from 'react-icons';

export enum SocialIcon {
  GitHub = 'GitHub',
  LinkedIn = 'LinkedIn',
  Email = 'Email',
  Resume = 'Resume',
}

interface SocialIconProps {
  type: SocialIcon;
}

export default function SocialIconComponent({ type }: SocialIconProps) {
  let href: string;
  let Icon: IconType;
  let tooltip: string;

  switch (type) {
    case SocialIcon.GitHub:
      href = 'https://github.com/jaxontabesh';
      Icon = FaGithub;
      tooltip = 'GitHub';
      break;
    case SocialIcon.LinkedIn:
      href = 'https://www.linkedin.com/in/jaxon-tabesh-08b2642b5/';
      Icon = FaLinkedin;
      tooltip = 'LinkedIn';
      break;
    case SocialIcon.Email:
      href = 'mailto:jaxon@jaxontabesh.com';
      Icon = FaEnvelope;
      tooltip = 'jaxon@jaxontabesh.com';
      break;
    case SocialIcon.Resume:
      href = './Resume.pdf';
      Icon = FaFileAlt;
      tooltip = 'Résumé';
      break;
    default:
      throw new Error(`Unhandled icon type: ${type}`);
  }

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <a href={href} target="_blank" rel="noreferrer">
          <Icon className="transition-colors hover:text-[#e03131]" />
        </a>
      </TooltipTrigger>
      <TooltipContent>
        <p>{tooltip}</p>
      </TooltipContent>
    </Tooltip>
  );
}
