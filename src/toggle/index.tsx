import { counselingPorpsType } from '../filter/Types';
import * as S from './Toggle_style';

export default function Toggle(props: counselingPorpsType) {
  const { changeCounseling, toggleState } = props;

  return (
    <S.CheckBoxWrapper>
      <S.CheckBox
        id="filterToggle"
        type="checkbox"
        onChange={changeCounseling}
        checked={toggleState}
      />
      <S.CheckBoxLabel htmlFor="filterToggle" />
    </S.CheckBoxWrapper>
  );
}
