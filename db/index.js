#!/usr/bin/env babel-node --stage=0

import fs from 'fs'
import * as contentful from 'contentful-management'
import Parser from 'csv-parse'
import prat from 'prat'

const client = contentful.createClient({
  /**
   * Your Management API token. Get one quickly at
   * contentful.com/developers/documentation/content-management-api
   * then set it as an environment variable like
   *
   *     export CONTENTFUL_CMA_TOKEN="abcdef123457890"
   */
  accessToken: process.env.CONTENTFUL_CMA_TOKEN,
})

/**
 * The Content Type ID that matches the rows from the CSV you want to import
 */
const contentTypeId = 'quote'

async function main() {
  const space = await client.getSpace('6mrrvigomqbo')
  const parser = new Parser({ columns: true })
  const rows = fs.createReadStream('./data.csv').pipe(parser)
  const entries = await prat
    .ify(rows)
    .map(row => rowToEntry(space, row))
    .reduce([], (entries, entry) => entries.concat(entry))
  console.log('entries', entries)
}

/**
 * Finds an entry and updates it, or creates a new entry if no existing entry is found.
 *
 * The update logic simply overwrites the existing fields, a deep merge would
 * be a better strategy if the entries also have fields that are edited by humans.
 */
async function rowToEntry(space, row) {
  const id = `${row['first name']}.${row['last name']}`
  const sys = { id }
  const fields = rowToFields(row)
  try {
    const entry = await space.getEntry(id)
    entry.fields = fields
    console.log('Update', id)
    return await space.updateEntry(entry)
  } catch (_) {
    console.log('Create', id)
    return await space.createEntry(contentTypeId, { sys, fields })
  }
}

/**
 * This helper maps a CSV row to the contentful fields structure.
 * Currently it's hard-coded to use en-US, but expanding this script to support
 * multiple locales (maybe by importing different files) would be trivial.
 */
function rowToFields(row) {
  return {
    title: { 'en-US': row['title'] },
    author: { 'en-US': row['author'] },
    twitter_name: { 'en-US': row['twitter_name'] },
    url_reference: { 'en-US': row['url_reference'] },
  }
}

main().catch(err => {
  console.error(err.stack)
  process.exit(1)
})
