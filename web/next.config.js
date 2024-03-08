const {PHASE_PRODUCTION_BUILD} = require('next/constants')

module.exports = (phase, {defaultConfig}) => {
    if(phase === PHASE_PRODUCTION_BUILD) {
        return {
            output: 'export',
            images: {
                remotePatterns: [
                  {
                    protocol: 'https',
                    hostname: 'cdn.sanity.io',
                    pathname: '**',
                  }
                ]
              }
        }
    }
    return {
        images: {
            remotePatterns: [
              {
                protocol: 'https',
                hostname: 'cdn.sanity.io',
                pathname: '**',
              }
            ]
          }
    }
}

