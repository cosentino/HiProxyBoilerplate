# HiProxyBoilerplate

Boilerplate project containing hiproxy and a basic node server. Allows to test local resources on production environments. Useful for Front-end development.

## Setup

> npm install

## Run the webserver and hiproxy

> npm run serve
> npm run hiproxy

## How to use

### Use the proxy

Setup your system so that it will use the proxy script "http://127.0.0.1:5525/proxy.pac" (ex: inside Windows preferences).

### Local assets

- add to the assets folder the static resources you want to use (ex: js, css etc)
- configure hiproxy inside "rewrite", by adding the urls you want to proxy and the local resources that will be used instead.

See http://hiproxy.org/ for more features to use inside "rewrite".

## Troubleshooting

In order to verify if the browser is using the proxy you can look at the hiproxy console: every time a resource is proxied a "[proxy]" record will be showed.

In case the browser is not using the proxy a browser restar may be needed (be sure the browser processes are terminated).

Another option is to open http://127.0.0.1:5525/ and click on "Open Browser". This will open a new proxied chrome instance.

The first time you use hiproxy for a particular domain, you may need to access the resource directly from the browser and accept the self signed SSL certificate.

In case chrome still refuse to load the resource for HSTS security reasons, you may want to try the following trick (https://twilblog.github.io/chrome/security/2016/06/27/badidea.html): Click anyware on the page and type "badidea". The page will load as normal, and it will continue to do so as long as your session continues.
