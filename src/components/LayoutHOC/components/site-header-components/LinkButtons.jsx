import LinkButton from "@/components/LayoutHOC/components/site-header-components/LinkButton";
import {IconBrandFacebookFilled, IconBrandTelegram, IconBrandYoutubeFilled} from "@tabler/icons-react";

const LinkButtons = () => {
    return (
        <div className="ml-auto flex items-center gap-2">
            <LinkButton link="https://telegram.me/selefiorg" icon={<IconBrandTelegram />} tooltipContent="Linku i Kanalit Telegram" />
            <LinkButton link="https://youtube.com/@AudioSelefi" icon={<IconBrandYoutubeFilled />} tooltipContent="Linku i Kanalit Youtube" />
            <LinkButton link="https://www.facebook.com/Selefi.org.official/" icon={<IconBrandFacebookFilled />} tooltipContent="Linku i Faqes Facebook" />
        </div>
    )
}

export default LinkButtons;