import React from 'react';
import styles from './Navbar.module.css';

function Navbar() {
  const header1 = ["배민셀프서비스", "배민상회", "배민아카데미"];
  const header2 = ["공지사항", "고객센터", "로그인", "회원가입"];
  const menuItems = ["배민 입점-운영", "외식업 정보", "가게 운영 지원", "혜택-이벤트"];

  const renderWithBar = (items) =>
    items.map((item, index) => (
      <React.Fragment key={index}>
        <p className={styles.headt}>{item}</p>
        {index < items.length - 1 && <p className={styles.bar}>|</p>}
      </React.Fragment>
    ));

  return (
    <div>
      <div className={styles.top}>
        <div className={styles.header1}>{renderWithBar(header1)}</div>
        <div className={styles.header2}>{renderWithBar(header2)}</div>
      </div>

      <div className={styles.middletop}>
        <p className={styles.logo}>배민외식업광장🍚</p>
        {menuItems.map((menu) => (
          <p key={menu} className={styles.menu}>
            {menu}
          </p>
        ))}
        <div className={styles.searchbar}>
          <input
            type="text"
            className={styles.search}
            placeholder="실제 데이터로 가게 운영 힌트 받으세요"
          />
          <span className={styles.searchicon}>🔍</span>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
