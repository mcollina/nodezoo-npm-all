nodezoo-npm-all
===============

nodezoo-npm-all


# Testing

```sh
$ sudo npm install -g underscore-cli
```

```sh
$ node srvs/npm-all-dev.js --seneca.log.all
```

```sh
$ curl -s -d '{"role":"run","cmd":"execute","name":"npm-all"}' http://localhost:9003/act | underscore pretty
{ procid: "PROCID", name: "npm-all" 
```

```sh
curl -s -d '{"role":"run","cmd":"query","procid":"PROCID"}' http://localhost:9003/act | underscore pretty
```
