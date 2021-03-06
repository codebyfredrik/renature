import React from 'react';
import { withKnobs, number, boolean } from '@storybook/addon-knobs';

import { useFluidResistanceGroup } from '../src';
import Button from './components/Button';
import { getRandomHex } from './utils';

import './index.css';

export default {
  title: 'FluidResistanceMultiple',
  decorators: [withKnobs],
};

export const FluidResistanceMultipleBasic: React.FC = () => {
  const [nodes] = useFluidResistanceGroup(5, i => ({
    from: {
      transform: 'translateY(0px)',
      background: getRandomHex(),
      borderRadius: `${Math.floor(Math.random() * 100)}%`,
    },
    to: {
      transform: 'translateY(100px)',
      background: getRandomHex(),
      borderRadius: `${Math.floor(Math.random() * 100)}%`,
    },
    config: {
      mass: number('mass', 25),
      rho: number('rho', 10),
      area: number('area', 20),
      cDrag: number('cDrag', 0.25),
      settle: boolean('settle', true),
    },
    delay: i * 500,
    infinite: true,
  }));

  return (
    <div className="stack-horizontal">
      {nodes.map(({ ref }, i) => (
        <div className="mover mover--opacity" ref={ref} key={i} />
      ))}
    </div>
  );
};

export const FluidResistanceMultipleEventBased: React.FC = () => {
  const [nodes, controller] = useFluidResistanceGroup(5, i => ({
    from: {
      transform: 'translateY(0px)',
      background: getRandomHex(),
      borderRadius: `${Math.floor(Math.random() * 100)}%`,
    },
    to: {
      transform: 'translateY(100px)',
      background: getRandomHex(),
      borderRadius: `${Math.floor(Math.random() * 100)}%`,
    },
    config: {
      mass: number('mass', 25),
      rho: number('rho', 10),
      area: number('area', 20),
      cDrag: number('cDrag', 0.25),
      settle: boolean('settle', true),
    },
    pause: true,
    delay: i * 1000,
    infinite: true,
  }));

  return (
    <div className="stack-horizontal">
      <div className="button-container">
        <Button onClick={controller.start}>Start</Button>
        <Button onClick={controller.pause}>Pause</Button>
        <Button onClick={controller.stop}>Stop</Button>
      </div>
      {nodes.map(({ ref }, i) => (
        <div className="mover mover--opacity" ref={ref} key={i} />
      ))}
    </div>
  );
};
