import { useTranslations } from "next-intl";
import "./style.css";

function HowToReserve() {
  const t = useTranslations("How_Reserve");
  return (
    <section className="py-10 how_to_reserve">
      <div className="">
        <div className="flex gap-4">
          <div className="flex items-start">
            <span className="text-2xl font-ExtraBold text-dark_blue_black bg-gray-100 px-8 py-2 rounded-md inner_shadow">
              1.
            </span>
          </div>
          <div className="mb-8">
            <h3 className="font-titleBold text-xl mb-4">{t("steps.title")}</h3>
            <p>{t("steps.des")} </p>
          </div>
        </div>
        <div className="flex gap-4">
          <div className="flex items-start">
            <span className="text-2xl font-ExtraBold text-dark_blue_black bg-gray-100 px-8 py-2 rounded-md inner_shadow">
              2.
            </span>
          </div>
          <div className="mb-8 ">
            <h3 className="font-titleBold text-xl mb-4">{t("steps.title2")}</h3>
            <p>{t("steps.des2")}</p>
          </div>
        </div>
        <div className="flex gap-4">
          <div className="flex items-start">
            <span className="text-2xl font-ExtraBold text-dark_blue_black bg-gray-100 px-8 py-2 rounded-md inner_shadow">
              3.
            </span>
          </div>
          <div>
            <h3 className="font-titleBold text-xl mb-4">{t("steps.title3")}</h3>
            <p>{t("steps.des3")}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HowToReserve;
