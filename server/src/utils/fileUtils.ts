import * as fs from 'fs';

export function copyFileWithReplacement(
  sourcePath: string,
  destinationPath: string,
) {
  try {
    if (fs.existsSync(destinationPath)) {
      fs.unlinkSync(destinationPath);
      console.log('Existing file removed successfully!');
    }

    fs.copyFileSync(sourcePath, destinationPath);
    console.log('File copied successfully!');
  } catch (err) {
    console.error('Error copying file:', err);
  }
}
