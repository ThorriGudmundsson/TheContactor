// import * as Contacts from 'expo-contacts';
import * as FileSystem from 'expo-file-system';

const rootDir = `${FileSystem.documentDirectory}`; // the root uri
export const whatever = FileSystem.getInfoAsync(rootDir); // the root info

const uriDirectory = `${FileSystem.documentDirectory}testDir`; // DIRECTORY NAME

export const writeSomething = async () => {
  const theDirectory = await FileSystem.getInfoAsync(uriDirectory);
  if (!theDirectory.exists) {
    // the directory don/t exist and needs to be created
    await FileSystem.makeDirectoryAsync(uriDirectory);
  }


  const somefile = `${uriDirectory}/thefile.txt`; // FILE NAME and uri
  const sometext = 'Her have some text been written'; // the file content

  await FileSystem.writeAsStringAsync(somefile, sometext); // write and overwrite the file

  console.log(await FileSystem.readAsStringAsync(somefile)); // read the file


};

export const killit = async () => {
  // delete the Directory and its content
  const theDirectory = await FileSystem.getInfoAsync(uriDirectory);
  if (theDirectory.exists) {
    await FileSystem.deleteAsync(uriDirectory);
  }

  console.log(await FileSystem.readDirectoryAsync(rootDir));
};
