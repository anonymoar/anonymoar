import React from 'react';

import EColor from '../../constants/colors';

import B from 'bem-cn-lite';

import './Text.scss';

const b = B('Text');

export interface ITextProps {
  color?: EColor.TEXT_BRAND | EColor.TEXT_LIGHT | EColor.TEXT_PRIMARY | EColor.TEXT_SECONDARY;
}

function Text({ color }: ITextProps): React.ReactElement {
  return <span className={b({ color })}>test</span>;
}

export default Text;
