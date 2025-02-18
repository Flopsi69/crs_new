module.exports = {
  apps: [
    {
      name: 'production_website',
      port: '3000',
      exec_mode: 'cluster',
      instances: 'max',
      script: './crs_new/.output/server/index.mjs'
    },
    {
      name: 'development_website',
      port: '3009',
      exec_mode: 'cluster',
      instances: 'max',
      script: './dev/.output/server/index.mjs'
    }
  ]
}
