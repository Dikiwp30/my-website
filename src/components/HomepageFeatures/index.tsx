import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'HTML',
    Svg: require('@site/static/img/html.svg').default,
    description: (
      <>
        HTML is at the core of every web page, regardless the complexity of 
        a site or number of technologies involved. It's an essential skill for any web professional.
      </>
    ),
  },
  {
    title: 'CSS',
    Svg: require('@site/static/img/css.svg').default,
    description: (
      <>
        CSS is what gives your entire website its style. Those slick colors,
         interesting fonts, and background images? All thanks to CSS. 
      </>
    ),
  },
  {
    title: 'JAVASCRIPT',
    Svg: require('@site/static/img/js.svg').default,
    description: (
      <>
        JavaScript is a logic-based programming language that can be used 
        to modify website content and make it behave in different ways in response
         to a user's actions.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
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
