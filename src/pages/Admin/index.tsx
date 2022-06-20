import {
  faFileAlt,
  faFileInvoice,
  faGraduationCap,
  faUniversity,
  faUserAlt,
  faComments
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Box } from '@mui/material';
import React from 'react';
import styles from '../../styles/SideBar.module.css';
import ACLMange from '@/Components/Admin/ACLMange';
import Header from '@/Components/Admin/Header';
import UniversitiesDetails from '@/Components/Admin/UniversitiesDetails';
import DegreeTemplates from '@/Components/Admin/DegreeTemplates';
import DegreeIssuance from '@/Components/Admin/DegreeIssuance';
import HecQueries from '@/Components/Admin/HecQueries';
import TranscriptTemplates from '@/Components/Admin/TranscriptTemplates';
const Admin = () => {
  const [dataLink, SetDataLink] = React.useState(`6`);
  return (
    <React.Fragment>
      <Header />
      <nav className={styles.main_menu}>
        <ul className={styles.ul}>
          <li className={styles.li}>
            <a
              className={styles.a}
              href="#/UniveristiesDetails"
              onClick={() => {
                SetDataLink(`1`);
              }}
            >
              <FontAwesomeIcon className="fa-lg" icon={faUniversity} />
              <span className={styles.nav_text}>Univeristies Details</span>
            </a>
          </li>
          <li className={styles.li}>
            <a
              className={styles.a}
              href="#/DegreeTemplates"
              onClick={() => {
                SetDataLink(`2`);
              }}
            >
              {/* <i className="fa bi bi-book-fill fa-lg"></i> */}
              <FontAwesomeIcon className="fa-lg" icon={faFileAlt} />
              <span className={styles.nav_text}>Degree Templates</span>
            </a>
          </li>

          <li className={styles.li}>
            <a
              className={styles.a}
              href="#/TranscriptTemplates"
              onClick={() => {
                SetDataLink(`3`);
              }}
            >
              <FontAwesomeIcon className="fa-lg" icon={faFileInvoice} />
              <span className={styles.nav_text}>Transcript Templates</span>
            </a>
          </li>

          <li className={styles.li}>
            <a
              className={styles.a}
              href="#/DegreeIssuence"
              onClick={() => {
                SetDataLink(`4`);
              }}
            >
              <FontAwesomeIcon className="fa-lg" icon={faGraduationCap} />
              <span className={styles.nav_text}>Degree Issuence</span>
            </a>
          </li>
          <li className={styles.li}>
            <a
              className={styles.a}
              href="#/HecQueries"
              onClick={() => {
                SetDataLink(`5`);
              }}
            >
              <FontAwesomeIcon className="fa-lg" icon={faComments} />
              <span className={styles.nav_text}>Hec Queries</span>
            </a>
          </li>
          <li className={styles.li}>
            <a
              className={styles.a}
              href="#/SubHecAdminAccount"
              onClick={() => {
                SetDataLink(`6`);
              }}
            >
              <FontAwesomeIcon className="fa-lg" icon={faUserAlt} />
              <span className={styles.nav_text}>Sub HecAdmin Account</span>
            </a>
          </li>
        </ul>
      </nav>
      <Box sx={{ m: `6em 2em 0 6em` }}>
        {dataLink == `1` && <UniversitiesDetails />}
        {dataLink == `2` && <DegreeTemplates />}
        {dataLink == `3` && <TranscriptTemplates />}
        {dataLink == `4` && <DegreeIssuance />}
        {dataLink == `5` && <HecQueries />}
        {dataLink == `6` && <ACLMange />}
      </Box>
    </React.Fragment>
  );
};

export default Admin;
