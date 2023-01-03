import {useCameraRoll} from "@react-native-camera-roll/camera-roll";
import CameraRollPickerTemplate from './CameraRollPickerTemplate'
function CameraRollPicker(props) {

  const [photos, getPhotos, save] = useCameraRoll();

  return (
    <CameraRollPickerTemplate {...props} getPhotos={getPhotos} />
  );
}

export default CameraRollPicker;
