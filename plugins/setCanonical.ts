import { defineNuxtPlugin, useRequestEvent, useRoute, useHead } from '#imports';

export default defineNuxtPlugin({
  name: 'setCanonical',
  setup (_nuxtApp) {
    const event = useRequestEvent();
    const host = process.server ? event?.node.req.headers.host || '' : window.location.host;
    const [path] = useRoute().fullPath.split('?');
    const removedSlashes = path.replace(/\/f\/?$/, '');

    useHead({
      link: [
        {
          rel: 'canonical',
          href: `https://${host}${removedSlashes}`
        }
      ]
    });
  }
});
