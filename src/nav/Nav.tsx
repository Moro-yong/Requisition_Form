import * as S from './Nav_Style';

export default function Nav() {
  return (
    <S.Nav>
      <S.NavList>
        <S.NavItem>
          <S.Logo />
        </S.NavItem>
        <S.NavItem>
          <S.MenuList>
            <S.CompanyIcon />A 가공 업체
          </S.MenuList>
          <S.DividerIcon />
          <S.MenuList>로그아웃</S.MenuList>
        </S.NavItem>
      </S.NavList>
    </S.Nav>
  );
}
