'use strict'

const fp = require('fastify-plugin')
const setup = require('./lib/dynamic')

function fastifySwagger (fastify, opts, next) {
  setup(fastify, opts, next)
}

module.exports = fp(fastifySwagger, {
  fastify: '4.x',
  name: '@fastify/swagger'
})
module.exports.fastifySwagger = fastifySwagger
module.exports.default = fastifySwagger
