import { PropTypes, StandardProps } from '../core.d.ts';
import { PaperProps } from './Paper.d.ts';

export interface AppBarProps extends StandardProps<PaperProps, AppBarClassKey> {
  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   */
  color?: PropTypes.Color | 'transparent';
  /**
   * The positioning type. The behavior of the different options is described
   * [in the MDN web docs](https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Positioning).
   * Note: `sticky` is not universally supported and will fall back to `static` when unavailable.
   */
  position?: 'fixed' | 'absolute' | 'sticky' | 'static' | 'relative';
}

export type AppBarClassKey =
  | 'root'
  | 'positionFixed'
  | 'positionAbsolute'
  | 'positionSticky'
  | 'positionStatic'
  | 'positionRelative'
  | 'colorDefault'
  | 'colorPrimary'
  | 'colorSecondary';

/**
 *
 * Demos:
 *
 * - [App Bar](https://material-ui.com/components/app-bar/)
 *
 * API:
 *
 * - [AppBar API](https://material-ui.com/api/app-bar/)
 * - inherits [Paper API](https://material-ui.com/api/paper/)
 */
export default function AppBar(props: AppBarProps): JSX.Element;
