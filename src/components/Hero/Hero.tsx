import type { FC } from 'react';
import styles from './Hero.module.scss';
import { Button } from '../UI/Button/Button';
import { HeroFeatures } from '../HeroFeatures/HeroFeatures';
import { HeroGallery } from '../HeroGallery/HeroGallery';

export const Hero: FC = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.hero__container}>
        <div className={styles.hero__information}>
          <div className={styles.hero__informationTitles}>
            <h1 className={styles.hero__title}>Discover And Create NFTs

              <span className={styles.title__decoration} >OVER 1M CREATORS</span>

            </h1>
            <p className={styles.hero__subTitle}>
              Discover, Create and Sell NFTs On Our NFT Marketplace With Over
              Thousands Of NFTs And Get a{' '}
              <span className={styles.hero__subTitle_mark}>$20 bonus.</span>
            </p>
          </div>
          <div className={styles.hero__information__buttons}>
            <Button type='button' className={styles.explore__button}>
              Explore More
            </Button>
            <Button type='button' className={styles.create__button}>
              create NFT
            </Button>
          </div>
          <HeroFeatures />
        </div>
        <HeroGallery />
      </div>
    </section>
  );
};
