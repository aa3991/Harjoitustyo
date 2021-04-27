import App from './App.svelte';

const app = new App({
  target: document.body,
  props: {
    otsikko: 'Stat tester',
  },
});

export default app;
