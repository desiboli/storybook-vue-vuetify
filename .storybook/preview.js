import vuetifyConfig from '../src/plugins/vuetify';
import { addDecorator } from '@storybook/vue';
import { VApp, VMain, VContainer } from "vuetify/lib";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}

addDecorator(() => ({
  vuetify: vuetifyConfig,
  components: { VApp, VMain, VContainer },
  template: `
    <v-app>
      <v-main>
        <v-container fluid>
          <story/>
        </v-container>
      </v-main>
    </v-app>
    `
}));
