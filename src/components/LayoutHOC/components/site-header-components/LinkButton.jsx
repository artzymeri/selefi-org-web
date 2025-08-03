import {Tooltip, TooltipContent, TooltipTrigger} from "@/components/ui/tooltip";
import {Button} from "@/components/ui/button";
import {IconBrandYoutubeFilled} from "@tabler/icons-react";

const LinkButton = ({link = '', icon = null, tooltipContent = ''}) => {
    return (
        <Tooltip>
            <TooltipTrigger asChild>
                <Button variant="secondary" asChild size="sm" className="hidden sm:flex">
                    <a
                        href={link}
                        rel="noopener noreferrer"
                        target="_blank"
                        className="dark:text-foreground">
                        {icon}
                    </a>
                </Button>
            </TooltipTrigger>
            <TooltipContent>
                <span>{tooltipContent}</span>
            </TooltipContent>
        </Tooltip>
    )
}

export default LinkButton;