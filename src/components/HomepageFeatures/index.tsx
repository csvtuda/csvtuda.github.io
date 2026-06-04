import Link from "@docusaurus/Link";
import useBaseUrl from "@docusaurus/useBaseUrl";
import Heading from "@theme/Heading";
import ThemedImage from "@theme/ThemedImage";
import clsx from "clsx";
import type { ReactNode } from "react";
import styles from "./styles.module.css";

type FeatureItem = {
  title: string;
  description: ReactNode;
  image?: {
    alt: string;
    sources: {
      light: string;
      dark: string;
    };
  };
  link: string;
};

const FeatureList: FeatureItem[] = [
  {
    title: "cypress-xray-plugin",
    image: {
      alt: "The logo of the cypress-xray-plugin, depicting the Cypress logo combining with the Xray logo.",
      sources: {
        light: "/img/cypress-xray-plugin-logo-dark.svg",
        dark: "/img/cypress-xray-plugin-logo-light.svg",
      },
    },
    description: (
      <>
        <p>
          A plugin for uploading Cypress test results to Xray, including
          evidence such as screenshots, videos or custom data.
        </p>
        <p>Fully compatible with Cucumber.</p>
      </>
    ),
    link: "/docs/cypress-xray-plugin",
  },
];

function Feature({ title, image, description, link }: FeatureItem) {
  return (
    <div className={clsx("col col--4")}>
      <Link to={link} className={styles.featureCard}>
        {image && (
          <>
            <ThemedImage
              alt={image.alt}
              sources={{
                light: useBaseUrl(image.sources.light),
                dark: useBaseUrl(image.sources.dark),
              }}
            />
            <hr />
          </>
        )}
        <div className="text--center padding-horiz--md">
          <Heading as="h2">{title} </Heading>
          <p>{description}</p>
        </div>
      </Link>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
