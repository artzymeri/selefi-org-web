import LinkButton from '@/components/LayoutHOC/components/site-header-components/LinkButton';
import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandTelegram,
  IconBrandTiktok,
  IconBrandTiktokFilled,
  IconBrandYoutube,
} from '@tabler/icons-react';

const LinkButtons = () => {
  return (
    <div className="ml-auto flex items-center gap-2">
      <LinkButton
        link="https://telegram.me/selefiorg"
        icon={<IconBrandTelegram />}
        tooltipContent="Linku i Kanalit Telegram"
      />
      <LinkButton
        link="https://youtube.com/@AudioSelefi"
        icon={<IconBrandYoutube />}
        tooltipContent="Linku i Kanalit Youtube"
      />
      <LinkButton
        link="https://www.facebook.com/Selefi.org.official/"
        icon={<IconBrandFacebook />}
        tooltipContent="Linku i Faqes Facebook"
      />
      <LinkButton
        link="https://instagram.com/selefi_org?igshid=YmMyMTA2M2Y="
        icon={<IconBrandInstagram />}
        tooltipContent="Linku i Faqes Instagram"
      />
      <LinkButton
        link="https://www.tiktok.com/@selefi.org?_t=8npSoodsRyH&_r=1"
        icon={<IconBrandTiktok />}
        tooltipContent="Linku i Faqes Tiktok"
      />
    </div>
  );
};

export default LinkButtons;
