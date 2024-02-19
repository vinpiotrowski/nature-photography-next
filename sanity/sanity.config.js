import {defineConfig} from 'sanity'
import {deskStructure} from './deskStructure'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'

export default defineConfig({
  name: 'default',
  title: 'nature-photography',
  projectId: 'w2in3wfr',
  dataset: 'production',
  plugins: [    
    structureTool({
      structure: deskStructure
    }), 
    visionTool()
  ],
  schema: {
    types: schemaTypes,
  },
})
