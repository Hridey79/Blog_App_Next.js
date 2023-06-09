import Image from 'next/image'
import styles from './page.module.css'
import Hero from 'public/hero.png'
import Button from '@/components/Button/Button'

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>Better design for your orignal works</h1>
        <p className={styles.desc}>
          Turning your Idea into Reality. We bring together the teams from the global tech industry.
        </p>
        <Button text="See our Works" url="/portfolio"></Button>
        <button className={styles.button}></button>
      </div>
      <div className={styles.item}>
        <Image src={Hero} className={styles.img} alt=""></Image>
      </div>

    </div>
  )
}
