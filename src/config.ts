import { Configuration } from './CoreTypes';

let configuration: Configuration = {
  breakpoints: [576, 768, 992, 1200, 1600, 1920],
  containerWidths: [540, 750, 960, 1140, 1540, 1810],
  gutterWidth: 30,
  gridColumns: 12,
  defaultScreenClass: 'xxl',
  maxScreenClass: 'xxl',
};

export function getConfiguration(): Configuration {
  return configuration;
}

export function setConfiguration(newConfiguration: Partial<Configuration>) {
  configuration = { ...configuration, ...newConfiguration };
}
