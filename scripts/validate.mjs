import { readFile } from 'node:fs/promises'

const catalog = JSON.parse(await readFile(new URL('../templates/catalog.json', import.meta.url), 'utf8'))
const readmes = await Promise.all(['README.md', 'README.zh-CN.md'].map(async name => {
  const content = await readFile(new URL(`../${name}`, import.meta.url), 'utf8')
  return { name, templateTable: content.split(/^## (?:Templates|模板)\s*$/m)[1]?.split(/^## /m)[0] ?? '' }
}))
if (!Array.isArray(catalog) || catalog.length === 0) {
  throw new Error('templates/catalog.json must contain at least one template')
}

const ids = new Set()
for (const template of catalog) {
  if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(template.id ?? '') || ids.has(template.id)) {
    throw new Error(`Invalid or duplicate template id: ${template.id}`)
  }
  if (![template.title, template.category, template.description].every(value => typeof value === 'string' && value.trim())) {
    throw new Error(`Missing metadata for ${template.id}`)
  }
  if (template.previewHeight !== undefined && (!Number.isInteger(template.previewHeight) || template.previewHeight < 420 || template.previewHeight > 760)) {
    throw new Error(`Invalid preview height for ${template.id}`)
  }
  ids.add(template.id)

  const sourcePath = `templates/${template.id}/index.html`
  for (const readme of readmes) {
    if (!readme.templateTable.includes(`](${sourcePath})`)) {
      throw new Error(`${readme.name} is missing ${sourcePath} from its template table`)
    }
  }

  const html = await readFile(new URL(`../${sourcePath}`, import.meta.url), 'utf8')
  if (!/^<!doctype html>/i.test(html.trimStart()) || !/<style\b/i.test(html)) {
    throw new Error(`${template.id} must be a standalone HTML document with inline CSS`)
  }
  if (/<script\b|<link\b|<iframe\b|\son[a-z]+\s*=|javascript:|@import\b|url\s*\(/i.test(html)) {
    throw new Error(`${template.id} contains a script, embedded page, or external dependency`)
  }
}

console.log(`Validated ${catalog.length} UIgly template(s)`)
