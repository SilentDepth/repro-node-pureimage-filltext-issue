const fs = require('node:fs')
const PImage = require('pureimage')

PImage.registerFont('Inter-Regular.otf', 'Inter').loadSync()

void async function main () {
  const canvas = PImage.make(100, 100)
  const ctx = canvas.getContext('2d')

  ctx.fillStyle = '#fff'
  ctx.fillRect(0, 0, 100, 100)

  ctx.font = '50px Inter'
  ctx.textAlign = 'center'
  ctx.textBaseline = 'middle'
  ctx.fillStyle = '#000'
  ctx.fillText('A', 50, 50)

  await PImage.encodePNGToStream(canvas, fs.createWriteStream('result.png'))
}()
