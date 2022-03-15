import React from 'react';

export interface counselingPorpsType {
  changeCounseling(): void;
  toggleState: boolean;
}
export interface filterPropsType {
  firestFilterValue: string;
  secondFilterValue: string[];
}
export interface filterListPropsType extends filterPropsType {
  changeCounseling(): void;
  toggleState: boolean;
}
export interface indexComponentPropsType extends filterListPropsType {
  setFirestFilterValue: React.Dispatch<React.SetStateAction<string>>;
  setSecondFilterValue: React.Dispatch<React.SetStateAction<string[]>>;
}
export interface filterComponentPropsType extends filterListPropsType {
  changeSelectState(e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void;
  changeFirestFilterState(e: React.ChangeEvent<HTMLInputElement>): void;
  changeSecondFilterState(
    e: React.MouseEvent<HTMLInputElement, MouseEvent>
  ): void;
  resetFilter(): void;
  selectState: boolean[];
  firestFilterState: boolean[];
  secondFilterState: boolean[];
}

export interface filterDataType {
  id: string;
  name: string;
}
