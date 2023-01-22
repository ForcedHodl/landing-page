import styled, { css, CSSProperties } from 'styled-components';

type ChildrenJustifyContent = 'start' | 'center' | 'spaced' | 'end';
const childrenJustifyContentMap: Map<ChildrenJustifyContent, CSSProperties['justifyContent']> = new Map([
  ['start', 'flex-start'],
  ['center', 'center'],
  ['spaced', 'space-between'],
  ['end', 'flex-end'],
]);

type ChildrenAlignItems = 'start' | 'center' | 'end';
const childrenAlignItemsMap: Map<ChildrenAlignItems, CSSProperties['alignItems']> = new Map([
  ['start', 'flex-start'],
  ['center', 'center'],
  ['end', 'flex-end'],
]);

type FlexContainerProps = {
  /** Padding to apply to the container (in spacing units) */
  padding?: [number] | [number, number] | [number, number, number] | [number, number, number, number];
  /** Margin to apply to the container (in spacing units) */
  margin?: [number] | [number, number] | [number, number, number] | [number, number, number, number];
  /** Is the direction of the container a column */
  isColumn?: boolean;
  /** Horizontal alignment of the items in the container */
  childrenHorizontalAlign?: ChildrenJustifyContent | ChildrenAlignItems;
  /** Vertical alignment of the items in the container */
  childrenVerticalAlign?: ChildrenAlignItems | ChildrenJustifyContent;
  /** Gap between the childrens of the container (in spacing units) */
  gap?: number;
  /** Is the container taking the whole width of its container */
  fullWidth?: boolean;
  /** Is the container taking the whole height of its container */
  fullHeight?: boolean;
} & (
  | {
      isColumn?: false;
      childrenHorizontalAlign?: ChildrenJustifyContent;
      childrenVerticalAlign?: ChildrenAlignItems;
    }
  | {
      isColumn: true;
      childrenHorizontalAlign?: ChildrenAlignItems;
      childrenVerticalAlign?: ChildrenJustifyContent;
    }
);

const FlexContainer = styled.div<FlexContainerProps>`
  display: flex;

  ${(props) =>
    props.childrenHorizontalAlign &&
    (props.isColumn
      ? css`
          align-items: ${childrenAlignItemsMap.get(props.childrenHorizontalAlign)};
        `
      : css`
          justify-content: ${childrenJustifyContentMap.get(props.childrenHorizontalAlign)};
        `)};

  ${(props) =>
    props.childrenVerticalAlign &&
    (props.isColumn
      ? css`
          justify-content: ${childrenJustifyContentMap.get(props.childrenVerticalAlign)};
        `
      : css`
          align-items: ${childrenAlignItemsMap.get(props.childrenVerticalAlign)};
        `)};

  ${(props) =>
    props.padding &&
    css`
      padding: ${props.theme.getSpacing(...props.padding)};
    `}

  ${(props) =>
    props.margin &&
    css`
      margin: ${props.theme.getSpacing(...props.margin)};
    `}

  ${(props) =>
    props.gap &&
    css`
      gap: ${props.theme.getSpacing(props.gap)};
    `}

  ${(props) =>
    props.fullWidth &&
    css`
      width: 100%;
    `}

  ${(props) =>
    props.fullHeight &&
    css`
      height: 100%;
    `}

  ${(props) =>
    props.isColumn &&
    css`
      flex-direction: column;
    `}
`;

export default FlexContainer;
