import { getDataByFileName } from './services/getDataByFileName.js';
import { commissionFees } from './models/index.js';
const main = async() => {
  const inputFileNames = process.argv.slice(2);
  const dataFromFile = await getDataByFileName(inputFileNames[0]);
  const commissionFeesInfo = await commissionFees(dataFromFile);
    for (let i = 0; i < commissionFeesInfo.length; i++) {
        console.log('Commission : '+commissionFeesInfo[i]);
    }
  // console.log((inputFileNames));
}
try {
  main();
} catch (e) {
  console.log('Main', { e });
}