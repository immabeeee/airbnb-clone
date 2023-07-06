import { Meta } from '@storybook/angular';
import { LogoComponent } from './logo.component';

export default {
  title: 'LogoComponent',
  component: LogoComponent,
} as Meta<LogoComponent>;

export const Primary = {
  render: (args: LogoComponent) => ({
    props: args,
  }),
  args: {},
};
