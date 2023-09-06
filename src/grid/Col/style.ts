import { ScreenClass } from "../../CoreTypes";
import { screenClasses } from "../../utils";
import { ColProps } from "./Col";
import type * as CSSUtil from "@stitches/react/types/css-util";

export type ColumnWidth = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 'content';
export type ColumnClasses<T> = Partial<Record<ScreenClass, T>>;

function hasWidth(widths: ColumnClasses<number | string>): boolean {
  return (Object.keys(widths) as ScreenClass[]).some((key) =>
    Boolean(widths[key])
  );
}

function getWidth(width?: number, gridColumns?: number): string | undefined {
  if (width === undefined || gridColumns === undefined) {
    return undefined;
  }
  const normalizedWidth = Math.max(0, Math.min(gridColumns, width));
  return `${(100 / gridColumns) * normalizedWidth}%`;
}

interface ColumnStyleConfig extends ColProps {
  forceWidth?: number;
  width?: ColumnClasses<number | string>;
  screenClass: ScreenClass;
  gutterWidth?: number;
  gridColumns: number;
}

export function createColStyle({
  forceWidth = undefined,
  width = {},
  offset = {},
  pull = {},
  push = {},
  order = {},
  debug,
  screenClass,
  gutterWidth,
  style,
  gridColumns,
}: ColumnStyleConfig): CSSUtil.CSS {
  const styles: CSSUtil.CSS = {
    boxSizing: "border-box",
    minHeight: 1,
    position: "relative",
    width: "100%",
  };

  if (gutterWidth !== undefined) {
    styles.paddingLeft = gutterWidth / 2;
    styles.paddingRight = gutterWidth / 2;
  }

  if (debug) {
    styles.outline = "1px solid silver";
    styles.background = "rgba(0,0,0,.05)";
    styles.lineHeight = "32px";
  }

  styles.flexBasis = "100%";
  styles.flexGrow = 0;
  styles.flexShrink = 0;
  styles.maxWidth = "100%";
  styles.marginLeft = "0%";
  styles.right = "auto";
  styles.left = "auto";

  screenClasses.forEach((size, index) => {
    if (screenClasses.indexOf(screenClass) >= index) {
      const theWidth = width[size];
      if (typeof theWidth === "number") {
        const currentWidth = getWidth(theWidth, gridColumns);
        styles.flexBasis = currentWidth || styles.flexBasis;
        styles.maxWidth = currentWidth;
      } else if (theWidth === "content") {
        styles.flexBasis = "auto";
      }
      styles.width = styles.flexBasis;
      styles.marginLeft =
        getWidth(offset[size], gridColumns) || styles.marginLeft;
      styles.right = getWidth(pull[size], gridColumns) || styles.right;
      styles.left = getWidth(push[size], gridColumns) || styles.left;
      if (order[size]) {
        styles.order = order[size];
      }
    }
  });

  if (!hasWidth(width)) {
    styles.flexBasis = 0;
    styles.flexGrow = 1;
  }

  if (forceWidth) {
    styles.flexBasis = "unset";
    styles.flexGrow = "unset";
    styles.flexShrink = "unset";
    styles.width = forceWidth;
  }

  return { ...styles, ...style };
}
