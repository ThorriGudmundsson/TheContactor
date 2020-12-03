import * as ImagePicker from 'expo-image-picker';
import * as Permission from 'expo-permissions';

const getPermissions = async (permissionTypes) => {
  await Promise.all(permissionTypes.map(async (type) => Permission.askAsync(type)));
};

export const selectFromCameraRoll = async () => {
  await getPermissions([Permission.CAMERA_ROLL]);
  const result = await ImagePicker.launchImageLibraryAsync({
    mediaTypes: ImagePicker.MediaTypeOptions.Images,
    base64: true,
  });

  if (result.cancelled) {
    return '';
  }
  return result.uri;
};

export const takePhoto = async () => {
  await getPermissions([Permission.CAMERA, Permission.CAMERA_ROLL]);
  const result = await ImagePicker.launchCameraAsync({
    mediaTypes: ImagePicker.MediaTypeOptions.Images,
    base64: true,
  });

  if (result.cancelled) {
    return '';
  }
  return result.uri;
};
