import * as React from '../../../../react/v16.13.1/react.d.ts';
import { StandardProps } from '../core.d.ts';
import { ListProps, ListClassKey } from './List.d.ts';

export interface MenuListProps extends StandardProps<ListProps, MenuListClassKey> {
  /**
   * If `true`, will focus the `[role="menu"]` container and move into tab order.
   */
  autoFocus?: boolean;
  /**
   * If `true`, will focus the first menuitem if `variant="menu"` or selected item
   * if `variant="selectedMenu"`.
   */
  autoFocusItem?: boolean;
  /**
   * MenuList contents, normally `MenuItem`s.
   */
  children?: React.ReactNode;
  /**
   * If `true`, will allow focus on disabled items.
   */
  disabledItemsFocusable?: boolean;
  /**
   * If `true`, the menu items will not wrap focus.
   */
  disableListWrap?: boolean;
  /**
   * The variant to use. Use `menu` to prevent selected items from impacting the initial focus
   * and the vertical alignment relative to the anchor element.
   */
  variant?: 'menu' | 'selectedMenu';
}

export type MenuListClassKey = ListClassKey;

/**
 * A permanently displayed menu following <https://www.w3.org/TR/wai-aria-practices/#menubutton>.
 * It's exposed to help customization of the [`Menu`](https://material-ui.com/api/menu/) component. If you
 * use it separately you need to move focus into the component manually. Once
 * the focus is placed inside the component it is fully keyboard accessible.
 * Demos:
 *
 * - [Menus](https://material-ui.com/components/menus/)
 *
 * API:
 *
 * - [MenuList API](https://material-ui.com/api/menu-list/)
 * - inherits [List API](https://material-ui.com/api/list/)
 */
export default function MenuList(props: MenuListProps): JSX.Element;
