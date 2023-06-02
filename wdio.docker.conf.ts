//@ts-ignore
import {config as baseConfig} from './wdio.conf.ts'

export const config ={
    ...baseConfig, 
    hostname: 'localhost',
    port: 4444,
    maxInstances: 2,
    capabilities:[
        {
            maxInstances: 1,
            browserName: 'chrome',
            acceptInsecureCerts: true,
            'goog:chromeOptions': {
              args: ['--disable-gpu', '--disable-dev-shm-usage']
            }
          }
    ],
    services: []
}