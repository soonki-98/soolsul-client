import styled from 'styled-components';
import Image from 'next/image';

import mapIcon from '@assets/images/curation/map.svg';
import clockIcon from '@assets/images/curation/clock.svg';
import r_menuIcon from '@assets/images/curation/r_menu.svg';
import phoneIcon from '@assets/images/curation/phone.svg';

function Info() {
  const storeInfo = [
    { infoTitle: '위치', icon: mapIcon, value: '' },
    { infoTitle: '영업 시간', icon: clockIcon, value: '' },
    { infoTitle: '대표 메뉴', icon: r_menuIcon, value: '' },
    { infoTitle: '전화 번호', icon: phoneIcon, value: '' },
  ];

  return (
    <Wrapper>
      {storeInfo.map((item) => {
        return (
          <li>
            <Map src={item.icon} /> <p>{item.infoTitle}</p>
            <p>{item.value}</p>
          </li>
        );
      })}
    </Wrapper>
  );
}

export default Info;

const Wrapper = styled.ul`
  padding: 10px 5px;
  li {
    display: flex;
    align-items: center;
    padding: 10px 16px;
  }
  p {
    padding: 0 10px;
    font-size: 16px;
  }
`;

const Map = styled(Image)`
  width: 24px;
  height: 24px;
`;
