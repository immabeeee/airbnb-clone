import { Meta } from '@storybook/angular';
import { UserMenuComponent } from './user-menu.component';

export default {
  title: 'UserMenuComponent',
  component: UserMenuComponent,
} as Meta<UserMenuComponent>;

export const Primary = {
  render: (args: UserMenuComponent) => ({
    props: args,
  }),
  args: {},
};
