import Link from "next/link";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const Hakkimizda = () => {
  const url = process.env.NEXT_PUBLIC_SITE_URL;
  const { t } = useTranslation("about");
  return (
    <div>
      <h1>{t("title")}</h1>
      <p>This is the about page</p>
      <p>
        <Link href="/">
          <a>Go home</a>
        </Link>
      </p>
    </div>
  );
};

export const getStaticProps = async ({ locale }) => ({
  props: { ...(await serverSideTranslations(locale, ["about"])) },
});

export default Hakkimizda;
