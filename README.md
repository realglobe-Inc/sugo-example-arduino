sugo-example-arduino
==========

<!---
This file is generated by ape-tmpl. Do not update manually.
--->

<!-- Badge Start -->
<a name="badges"></a>

[![Build Status][bd_travis_com_shield_url]][bd_travis_com_url]
[![npm Version][bd_npm_shield_url]][bd_npm_url]
[![JS Standard][bd_standard_shield_url]][bd_standard_url]

[bd_repo_url]: https://github.com/realglobe-Inc/sugo-example-arduino
[bd_travis_url]: http://travis-ci.org/realglobe-Inc/sugo-example-arduino
[bd_travis_shield_url]: http://img.shields.io/travis/realglobe-Inc/sugo-example-arduino.svg?style=flat
[bd_travis_com_url]: http://travis-ci.com/realglobe-Inc/sugo-example-arduino
[bd_travis_com_shield_url]: https://api.travis-ci.com/realglobe-Inc/sugo-example-arduino.svg?token=aeFzCpBZebyaRijpCFmm
[bd_license_url]: https://github.com/realglobe-Inc/sugo-example-arduino/blob/master/LICENSE
[bd_codeclimate_url]: http://codeclimate.com/github/realglobe-Inc/sugo-example-arduino
[bd_codeclimate_shield_url]: http://img.shields.io/codeclimate/github/realglobe-Inc/sugo-example-arduino.svg?style=flat
[bd_codeclimate_coverage_shield_url]: http://img.shields.io/codeclimate/coverage/github/realglobe-Inc/sugo-example-arduino.svg?style=flat
[bd_gemnasium_url]: https://gemnasium.com/realglobe-Inc/sugo-example-arduino
[bd_gemnasium_shield_url]: https://gemnasium.com/realglobe-Inc/sugo-example-arduino.svg
[bd_npm_url]: http://www.npmjs.org/package/sugo-example-arduino
[bd_npm_shield_url]: http://img.shields.io/npm/v/sugo-example-arduino.svg?style=flat
[bd_standard_url]: http://standardjs.com/
[bd_standard_shield_url]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg

<!-- Badge End -->


<!-- Description Start -->
<a name="description"></a>

SUGOS example of Arduino

<!-- Description End -->


<!-- Overview Start -->
<a name="overview"></a>


[![favicon_url]][app_url]

This is an example application to use [SUGOS][sugos_url]. 
You can edit script and try it out on browser. 

[app_url]: http://sugo-example-arduino.herokuapp.com
[favicon_url]: doc/images/favicon.png


<!-- Overview End -->


<!-- Sections Start -->
<a name="sections"></a>

<!-- Section from "doc/guides/00.Requirements.md.hbs" Start -->

<a name="section-doc-guides-00-requirements-md"></a>

Requirements
-----

<a href="https://nodejs.org">
  <img src="https://realglobe-inc.github.io/sugos-assets/images/nodejs-banner.png"
       alt="Node.js"
       height="40"
       style="height:40px"
  /></a>
<a href="https://docs.npmjs.com/">
  <img src="https://realglobe-inc.github.io/sugos-assets/images/npm-banner.png"
       alt="NPM"
       height="40"
       style="height:40px"
  /></a>

+ [Node.js ( >=6.x )][node_download_url]
+ [npm ( >=3.x )][npm_url]

[node_download_url]: https://nodejs.org/en/download/
[npm_url]: https://docs.npmjs.com/


<!-- Section from "doc/guides/00.Requirements.md.hbs" End -->

<!-- Section from "doc/guides/01.Quick Start.md.hbs" Start -->

<a name="section-doc-guides-01-quick-start-md"></a>

Quick Start
-----

Deploy to the [Heroku][heroku_url] and play it!

[![Deploy](https://www.herokucdn.com/deploy/button.svg)][heroku_deploy_url]

[heroku_url]: https://www.heroku.com/
[heroku_deploy_url]: https://heroku.com/deploy?template=https://github.com/realglobe-Inc/sugo-example-arduino/tree/heroku


<!-- Section from "doc/guides/01.Quick Start.md.hbs" End -->

<!-- Section from "doc/guides/10.How to.md.hbs" Start -->

<a name="section-doc-guides-10-how-to-md"></a>

How to
-------

<!-- Section from "doc/guides/10.How to.md.hbs" End -->

<!-- Section from "doc/guides/11.Setup Hub.md.hbs" Start -->

<a name="section-doc-guides-11-setup-hub-md"></a>

### Setup Hub

Setup a hub server to provide UI pages and actor/connector API.
This component is build with [SUGO-Hub][sugo_hub_url] package.


Install the CLI:

```bash
$ npm install sugo-example-arduino -g
```

Then, run the server

```bash
$ PORT=3000 sugo-example-arduino hub
```

In the most of cases, you need to setup reverse-proxy (like [nginx][nginx_url]) to exports the server to the outer world.

[nginx_url]: https://www.nginx.com/


<!-- Section from "doc/guides/11.Setup Hub.md.hbs" End -->

<!-- Section from "doc/guides/12.Connect Actor.md.hbs" Start -->

<a name="section-doc-guides-12-connect-actor-md"></a>

### Connect Actor

Connect an actor to provides functionalities with.
This component is build with [SUGO-Actor][sugo_actor_url] package.

Install the CLI:

```bash
$ npm install sugo-example-arduino -g
```

Then, connect the actor to the cloud

```bash
$ HOSTNAME="__your_host__" ACTOR_KEY="__your_actor_name__" sugo-example-arduino actor
```


<!-- Section from "doc/guides/12.Connect Actor.md.hbs" End -->

<!-- Section from "doc/guides/13.Connect Caller.md.hbs" Start -->

<a name="section-doc-guides-13-connect-caller-md"></a>

### Run Caller

Run a caller to call functions defined in actor.
This component is build with [SUGO-Caller][sugo_caller_url] package.


Install the CLI:

```bash
$ npm install sugo-example-arduino -g
```

Then, run the example caller

```bash
$ HOSTNAME="__your_host__" sugo-example-arduino caller
```

Or, you can try it from UI pages on the cloud.


<!-- Section from "doc/guides/13.Connect Caller.md.hbs" End -->


<!-- Sections Start -->


<!-- LICENSE Start -->
<a name="license"></a>

License
-------
This software is released under the [MIT License](https://github.com/realglobe-Inc/sugo-example-arduino/blob/master/LICENSE).

<!-- LICENSE End -->


<!-- Links Start -->
<a name="links"></a>

Links
------

+ [sugos][sugos_url]
+ [sugo-cloud][sugo_cloud_url]
+ [sugo-caller][sugo_caller_url]
+ [sugo-actor][sugo_actor_url]

[sugos_url]: https://github.com/realglobe-Inc/sugos
[sugo_cloud_url]: https://github.com/realglobe-Inc/sugo-cloud
[sugo_caller_url]: https://github.com/realglobe-Inc/sugo-caller
[sugo_actor_url]: https://github.com/realglobe-Inc/sugo-actor

<!-- Links End -->