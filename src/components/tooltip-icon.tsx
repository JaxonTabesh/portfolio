import { Tooltip, TooltipTrigger, TooltipContent } from '@/components/ui/tooltip';

type TooltipIconProps = {
  path: string;
  tooltip: string;
};

export default function TooltipIcon({ path, tooltip }: TooltipIconProps) {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <img src={`.${path}`} alt={tooltip}></img>
      </TooltipTrigger>
      <TooltipContent>
        <p>{tooltip}</p>
      </TooltipContent>
    </Tooltip>
  );
}
