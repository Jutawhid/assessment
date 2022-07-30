import { getDataByFileName } from './services/getDataByFileName.js';
import { commissionFees } from './models/index.js';
const main = async() => {
  const inputFileNames = process.argv.slice(2);
  const dataFromFile = await getDataByFileName(inputFileNames[0]);
  const commissionFeesInfo = await commissionFees(dataFromFile);
  console.log((commissionFeesInfo));
}
try {
  main();
} catch (e) {
  console.log('Main', { e });
}