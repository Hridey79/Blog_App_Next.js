import React from 'react'
import styles from './footer.module.css'
import Image from 'next/image'

const Footer = () => {
  return (
    <div className={styles.container}>
      <div>
        &#xA9; BlogsMania@2023 All Rights Reserved 
      </div>
      <div className={styles.social}>
        <Image src='/1.png' width={15} height={15} alt='BlogManiaImage' className={styles.icon}></Image>
        <Image src='/2.png' width={15} height={15} alt='BlogManiaImage' className={styles.icon}></Image>
        <Image src='/3.png' width={15} height={15} alt='BlogManiaImage' className={styles.icon}></Image>
        <Image src='/4.png' width={15} height={15} alt='BlogManiaImage' className={styles.icon}></Image>
      </div>
    </div>
  )
}

export default Footer