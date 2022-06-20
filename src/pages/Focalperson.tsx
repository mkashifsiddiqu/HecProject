/* eslint-disable jsx-a11y/anchor-is-valid */

import Fpdegreedetail from '@/Components/Focal Person/Fpdegreedetail';
import FpDegreetemplate from '@/Components/Focal Person/FpDegreetemplate';
import Fpstudentid from '@/Components/Focal Person/Fpstudentid';
import Fptranscriptdetail from '@/Components/Focal Person/Fptranscriptdetail';
import Header from '@/Components/Focal Person/Layout/Header';
import Footer from '@/Components/Student/Layout/Footer';
import { Box } from '@mui/material';
import React from 'react';
import styles from '../styles/SideBar.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBookOpen,
  faHome,
  faListAlt,
  faAlignCenter,
  faBook,
  faUniversity,
  faFileAlt,
  faGraduationCap,
  faUserAlt,
  faFileInvoice,
} from '@fortawesome/free-solid-svg-icons';
import ACLMange from '@/Components/Focal Person/ACLMange';
const Focalperson = () => {
  const [dataLink, SetDataLink] = React.useState(`5`);
  return (
    <>
      <Header />
      <nav className={styles.main_menu}>
        <ul className={styles.ul}>
          <li className={styles.li}>
            <a
              className={styles.a}
              href="#/Fpdegreedetail"
              onClick={() => {
                SetDataLink(`1`);
              }}
            >
            <FontAwesomeIcon className="fa-lg" icon={faUniversity} />
            <span className={styles.nav_text}>Program Details</span>
            </a>
          </li>
          <li className={styles.li}>
            <a
              className={styles.a}
              href="#/FpDegreetemplate"
              onClick={() => {
                SetDataLink(`2`);
              }}
            >
              {/* <i className="fa bi bi-book-fill fa-lg"></i> */}
              <FontAwesomeIcon className="fa-lg" icon={faFileAlt} />
              <span className={styles.nav_text}>Degree Tempate</span>
            </a>
          </li>

          <li className={styles.li}>
            <a
              className={styles.a}
              href="#/Fptranscriptdetail"
              onClick={() => {
                SetDataLink(`3`);
              }}
            >
              <FontAwesomeIcon className="fa-lg" icon={faFileInvoice} />
              <span className={styles.nav_text}>Transcript Detail</span>
            </a>
          </li>

          <li className={styles.li}>
            <a
              className={styles.a}
              href="#/Fpstudentid"
              onClick={() => {
                SetDataLink(`4`);
              }}
            >
              <FontAwesomeIcon className="fa-lg" icon={faGraduationCap} />
              <span className={styles.nav_text}>Student Degree issue</span>
            </a>
          </li>
          <li className={styles.li}>
            <a
              className={styles.a}
              href="#/Fpstudentid"
              onClick={() => {
                SetDataLink(`5`);
              }}
            >
              <FontAwesomeIcon className="fa-lg" icon={faUserAlt} />
              <span className={styles.nav_text}>Sub FP Account</span>
            </a>
          </li>
        </ul>
      </nav>
      <Box sx={{ m: `6em 2em 0 6em` }}>
        {dataLink == `1` && <Fpdegreedetail />}
        {dataLink == `2` && <FpDegreetemplate />}
        {dataLink == `3` && <Fptranscriptdetail />}
        {dataLink == `4` && <Fpstudentid />}
        {dataLink == `5` && <ACLMange />}
      </Box>
      <Footer />
    </>
  );
};

export default Focalperson;
