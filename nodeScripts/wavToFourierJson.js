const path = require('path');
const fs = require('fs');
const WavDecoder = require('wav-decoder');
const Spectrum = require('spectrum-analyzer');
const FFT_RESOLUTION = 16384;
const SAMPLE_RATE = 44100;

const wavFiles = fs.readdirSync(path.join(__dirname, '../sampleFiles')).filter(f => f.endsWith('.wav'));

const wavToFourier = function(fileName) {
  const audioLength = SAMPLE_RATE * 20; // We only want the first 20 seconds of audio
  const buffer = fs.readFileSync(path.join(__dirname, '../sampleFiles', fileName));

  const decoded = WavDecoder.decode.sync(buffer); // Turn audio into float from -1 to 1

  const cutoffLow = 100;
  const cutoffHigh = 20000;

  const windowMultiplier = Math.pow(2, 1 / 4); // We want four bins per octave

  const chunkSize = Math.ceil(FFT_RESOLUTION / 100);
  let array = new Array(FFT_RESOLUTION).fill(0);

  let iterations = 0;
  for (let i = 0; i < audioLength - chunkSize; i = i + chunkSize) {
    const s = new Spectrum(FFT_RESOLUTION);
    const input = decoded.channelData[0].slice(i, i + FFT_RESOLUTION);
    s.appendData(input);
    s.recompute();
    const power = s.getPower();
    array = array.map((arrayValue, arrayIndex) => arrayValue + power[arrayIndex])
    iterations = iterations + 1;
  }

  array = array.map(bin => bin / iterations);

  // Remove the imaginary results
  array = array.splice(0, FFT_RESOLUTION / 2);

  // turn into log-friendly frequency chunks
  const friendlyArray = [];

  const windowSize = SAMPLE_RATE / FFT_RESOLUTION;
  let frequency = windowSize;

  let lastValidValue = null;

  while (frequency <= SAMPLE_RATE / 2) {
    const bucketFrequencies = array.filter((bucket, index) => {
      const comparitor = (index + 1) * windowSize;
      const lowend = frequency;
      const highend = frequency * windowMultiplier;
      return lowend <= comparitor && highend > comparitor;
    });

    let newValue;
    if (bucketFrequencies.length) {
      newValue = bucketFrequencies.reduce((a, b) => a + b) / bucketFrequencies.length;
      lastValidValue = newValue;
    } else {
      // Just grab the last value
      newValue = lastValidValue;
    }

    if (frequency > cutoffLow && frequency < cutoffHigh)
    friendlyArray.push({ x: String(Math.round(frequency)), y: Math.log(newValue) });
    frequency = frequency * windowMultiplier;
  }

  // Write to file
  const outputPath = path.join(__dirname, `../src/audioData/${fileName.replace('.wav', '.json')}`);
  fs.writeFileSync(outputPath, JSON.stringify({ data: friendlyArray }));
}

wavFiles.forEach(wavToFourier);
fs.writeFileSync(path.join(__dirname, '../src/audioData/index.js'), wavFiles.map(w => `export { data as ${w.replace('.wav', '')} } from './${w.replace('.wav', '.json')}'\n`).join(''));
