import { useRouter } from "next/navigation";
import { useLocale } from "next-intl";
import { ChangeEvent, useTransition } from "react";
import english from "@/public/assets/icons/flags/united-states.png";
import german from "@/public/assets/icons/flags/germany.png";
import croatian from "@/public/assets/icons/flags/croatian.png";
import italy from "@/public/assets/icons/flags/italy.png";
import Image, { StaticImageData } from "next/image";
function LanguageSwitch() {
  const [isPanding, startTransition] = useTransition();
  const router = useRouter();
  const localeActive = useLocale();

  const handleLanguage = (e: ChangeEvent<HTMLSelectElement>) => {
    const nextLocale = e.target.value;
    startTransition(() => {
      router.replace(`/${nextLocale}`);
    });
  };
  return (
    <label>
      <p className="sr-only">Change lg</p>
      <select
        defaultValue={localeActive}
        onChange={handleLanguage}
        disabled={isPanding}
      >
        <option value="en">
          <Image src={english as StaticImageData} alt="english flag" />
        </option>
        <option value="de">
          <Image src={german as StaticImageData} alt="german flag" />
        </option>
        <option value="hr">
          <Image src={croatian as StaticImageData} alt="croatian flag" />
        </option>
        <option value="it">
          <Image src={italy as StaticImageData} alt="italy flag" />
        </option>
      </select>
    </label>
  );
}

export default LanguageSwitch;
