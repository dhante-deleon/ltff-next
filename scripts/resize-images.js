const sharp = require('sharp')
const fs = require('fs').promises
const path = require('path')

async function ensureDir(dir){
  try{ await fs.mkdir(dir, { recursive: true }) }catch(e){}
}

async function resizeAll(){
  const srcDir = path.join(__dirname, '..', 'public', 'images')
  const outDir = path.join(srcDir, 'optimized')
  await ensureDir(outDir)

  const files = await fs.readdir(srcDir)
  const imageFiles = files.filter(f => /\.(jpe?g|png)$/i.test(f))
  const widths = [320, 640, 1024]
  const quality = 80

  for(const file of imageFiles){
    const srcPath = path.join(srcDir, file)
    const { name } = path.parse(file)
    for(const w of widths){
      // jpeg
      const outJpeg = path.join(outDir, `${name}-${w}.jpg`)
      await sharp(srcPath).resize({ width: w }).jpeg({ quality }).toFile(outJpeg)
      // webp
      const outWebp = path.join(outDir, `${name}-${w}.webp`)
      await sharp(srcPath).resize({ width: w }).webp({ quality }).toFile(outWebp)
      console.log(`Wrote ${outJpeg} and ${outWebp}`)
    }
  }
  console.log('Done resizing images. Optimized images are in:', outDir)
}

resizeAll().catch(err=>{
  console.error(err)
  process.exit(1)
})
