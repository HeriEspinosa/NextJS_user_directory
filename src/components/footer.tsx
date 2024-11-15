'use client';

import styles from './_styles/footer.module.css';

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.contactInfo}>
        <p><b>Phone:</b> +1 809-432-5562</p>
        <p><b>Contact:</b> espinosa_reyes@hotmail.com</p>
        <p><b>LinkedIn:</b> https://www.linkedin.com/in/heri-espinosa-fullstack-js/</p>
        <p><b>Repository:</b> https://github.com/HeriEspinosa/NextJS_user_directory.git</p>
      </div>
    </footer>
  );
}
