/* eslint-disable prettier/prettier */
/* eslint-disable jsx-a11y/anchor-is-valid */
import styles from '../../../styles/SideBar.module.css';
import Link from 'next/link';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBookOpen,
  faHome,
  faListAlt,
  faAlignCenter,
  faBook,
} from '@fortawesome/free-solid-svg-icons'
import QuickPanel from './QuickPanel';
import { MenuItem, MenuList,Hidden, Box } from '@mui/material';
const SideBar = () => {
  return (
    <>
      <Hidden lgDown>
      <Box>
      <nav className={styles.main_menu}>
        <ul className={styles.ul}>
          <Box sx={{backgroundColor:`black`}}>
         <li className={styles.li}>
            <Link href="/Dashboard">
              <a className={styles.a} href="#">
                <FontAwesomeIcon className="fa-lg" icon={faHome} />
                <span className={styles.nav_text}>Home</span>
              </a>
            </Link>
          </li>
          </Box>
          <li className={styles.li}>
            <Link href="/DegreeAttestation">
              <a className={styles.a} href="#">
                {/* <i className="fa bi bi-book-fill fa-lg"></i> */}
                <FontAwesomeIcon className="fa-lg" icon={faBookOpen} />
                <span className={styles.nav_text}>Degree Attestation</span>
              </a>
            </Link>
          </li>

          <li className={styles.li}>
            <Link href="/TrackApplicationTables">
              <a className={styles.a} href="#">
                <FontAwesomeIcon className="fa-lg" icon={faListAlt} />
                <span className={styles.nav_text}>Track Application</span>
              </a>
            </Link>
          </li>

          <li className={styles.li}>
            <Link href="/DegreeAttestation">
              <a className={styles.a} href="#">
                <FontAwesomeIcon className="fa-lg" icon={faAlignCenter} />
                <span className={styles.nav_text}>Equilance Serivce</span>
              </a>
            </Link>
          </li>
          <li className={styles.li}>
            <Link href="/Ecourses">
              <a className={styles.a} href="#">
                <FontAwesomeIcon className="fa-lg" icon={faBook} />
                <span className={styles.nav_text}>E-course</span>
              </a>
            </Link>
          </li>
        </ul>
      </nav>
      </Box>
      </Hidden>
      <QuickPanel/>
    </>
  );
};
export default SideBar;
