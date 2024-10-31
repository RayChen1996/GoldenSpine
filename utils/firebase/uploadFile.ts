import storage from '@react-native-firebase/storage';
import {nanoid} from 'nanoid';

/** - 上傳檔案 */
export default async function uploadFile(
  /** - 本地檔案位置 */
  uri: string,
  /** - 伺服器檔名 */
  fileName?: string,
  /** - 檔案id */
  id?: string,
) {
  if (uri && fileName) {
    const path = `${fileName}/${id ?? nanoid()}`;
    try {
      const reference = storage().ref(path);
      const putFile = await reference.putFile(uri);
      const downloadURL = await storage()
        .ref(putFile.metadata.fullPath)
        .getDownloadURL();
      return downloadURL;
    } catch (error) {
      console.log(error);
    }
  }
}
