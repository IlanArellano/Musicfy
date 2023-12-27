import React from "react";
import Link from "next/link";
import { t } from "@app/i18n/server";
import { SVG, type SVGIcon } from "@app/components/svg";

interface CollapsibleItemMenu {
  icon: SVGIcon;
  title?: string;
  href: string;
}

const CollapsibleItemMenu = ({ icon, title, href }: CollapsibleItemMenu) => {
  const Icon = SVG[icon];
  return (
    <Link href={href} className="flex items-center gap-3">
      {Icon && <Icon className="w-[30px]" />}
      <p>{title}</p>
    </Link>
  );
};

export default function Slider() {
  return (
    <nav>
      <section>
        <SVG.Spotify />
        <CollapsibleItemMenu
          href="/"
          icon="HomeActive"
          title={t("home.slider.home")}
        />
        <CollapsibleItemMenu
          href="/"
          icon="SearchActive"
          title={t("home.slider.search")}
        />
      </section>
      <section>
        <CollapsibleItemMenu
          href="/"
          icon="SearchActive"
          title={t("home.slider.library")}
        />
      </section>
    </nav>
  );
}
