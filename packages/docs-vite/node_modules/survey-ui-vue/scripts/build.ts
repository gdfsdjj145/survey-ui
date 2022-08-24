import { config } from '../vite.config'
import * as path from 'path'
import * as fs from 'fs'
import { build, InlineConfig, defineConfig, UserConfig } from 'vite'

const buildAll = async () => {
  // 全量
  await build(defineConfig(config as UserConfig) as InlineConfig)

  const srcDir = path.resolve(__dirname, '../src/')
  fs.readFileSync(srcDir)
  .filter(name => {
    const componentDir = path.resolve(srcDir, name)
    const isDir = fs.lstatSync(componentDir).isDirectory()
    return isDir && fs.readFileSync(componentDir).includes('index.ts')
  })
  .forEach(async name => {
    const outDir = path.resolve(config.build.outDir, name)
    const custom = {
      lib: {
        entry: path.resolve(srcDir, name),
        name,
        fileName: 'index',
        formats: ['es', 'umd']
      },
      outDir
    }

    Object.assign(config.build, custom)
    await build(defineConfig(config as UserConfig) as InlineConfig)

    fs.outputFile(
      path.resolve(outDir, 'package.json'),
      `
      {
        "name": "survey-ui-vue/${name}",
        "main": "index.umd.js",
        "module": "index.umd.js"
      }`,
      'utf-8'
    )
  })
}

buildAll()
