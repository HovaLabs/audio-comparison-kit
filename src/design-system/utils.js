import { styles, util } from 'styled-system';

export const renderStyledSystemProps = styledSystemPropObject => props => {
  return Object.entries(styledSystemPropObject)
    .reduce((styleObject, [propKey, propValue]) => {
      if (styles[propKey]) {
        return util.merge(styleObject, styles[propKey]({ [propKey]: propValue, ...props }));
      } else if (['color', 'bg'].includes(propKey)) {
        return util.merge(styleObject, styles.color({ [propKey]: propValue, ...props }));
      } else if (['m', 'mt', 'mr', 'mb', 'ml', 'mx', 'my', 'p', 'pt', 'pr', 'pb', 'pl', 'px', 'py'].includes(propKey)) {
        return util.merge(styleObject, styles.space({ [propKey]: propValue, ...props }));
      }
      return styleObject;
    }, {});
  };
  