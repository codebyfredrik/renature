import React from 'react';

import { Controller, frictionDefaultConfig } from '../animation';
import { useFrictionGroup, UseFrictionArgs } from './useFrictionGroup';

export const useFriction = <M extends HTMLElement | SVGElement = any>({
  from,
  to,
  config = frictionDefaultConfig,
  pause = false,
  delay,
  infinite,
  onFrame,
  onAnimationComplete,
  disableHardwareAcceleration = false,
}: UseFrictionArgs): [
  { ref: React.MutableRefObject<M | null> },
  Controller
] => {
  const [props, controller] = useFrictionGroup(1, () => ({
    from,
    to,
    config,
    pause,
    delay,
    infinite,
    onFrame,
    onAnimationComplete,
    disableHardwareAcceleration,
  }));

  return [props[0], controller];
};
