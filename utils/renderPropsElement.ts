import {isValidElement, createElement} from 'react';
import type {JSXElementConstructor} from 'react';

export type RenderComponent<P> = JSXElementConstructor<P> | undefined | null;

export default function renderPropsElement<P extends Object = {}>(
  component: RenderComponent<P>,
  props?: P,
) {
  switch (typeof component) {
    case 'undefined':
      break;
    case 'function':
      return (component as (props?: P) => JSX.Element)(props);
    case 'string':
      // `html`標籤組件
      return createElement(component, props);
    case 'object':
      if (component === null) {
        break;
      }
      if (isValidElement(component)) {
        return component;
      }
      return createElement(component, props);
    default:
      break;
  }
  return null;
}
