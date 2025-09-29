import React from 'react'
import styles from './HeaderListItem.module.css'

const HeaderListItem = ({children}: React.HTMLAttributes<HTMLUListElement>) => {
  return (
    <li className={styles.menuitem}>{children}</li>
  )
}

export default HeaderListItem