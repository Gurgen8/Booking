import React, {memo} from 'react';
import {StyleProp, ViewStyle} from 'react-native';
import {SvgXml as DefSvg} from 'react-native-svg';
import * as Xmls from '../../assets/svgxml/svgxml';

export type SvgXmlType = keyof typeof Xmls;

interface localProps {
  xml: SvgXmlType;
  svgProps?: {[key: string]: any};
  style?: StyleProp<ViewStyle>;
  height?: number;
  width?: number;
}

export const SvgXml = memo((props: localProps) => {
  const xm: any = Xmls;
  const image: SvgXmlType | Function = xm[props.xml];
  return (
    <>
      {props.width && props.height ? (
        <DefSvg
          height={props.height}
          width={props.width}
          style={props.style}
          xml={typeof image === 'function' ? image(props.svgProps) : image}
        />
      ) : (
        <DefSvg
          style={props.style}
          xml={typeof image === 'function' ? image(props.svgProps) : image}
        />
      )}
    </>
  );
});
