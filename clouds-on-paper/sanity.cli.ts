import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: '3t81hoij',
    dataset: 'production'
  },
  deployment: {
    appId: 'wzt3y2dcn85lr5fuqvf5wepi',
    autoUpdates: true,
  }
})
