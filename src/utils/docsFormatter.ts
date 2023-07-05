import { convertToHtml } from 'mammoth';

export const convertDocxToHtml = async (filePath: string) => {
  try {
    const result = await convertToHtml({
      path: filePath,
    });
    //console.log(result);
    return result.value;
  } catch (error) {
    console.log(error);
    return '';
  }
};
