import { BarType } from '@lib/types';
import RestAPI from './restapi';


class BarAPI {
/**
 * 술집 목록 조회
 * @param latitude
 * @param longitude
 * @param zoomLevel
 * @param moodTag
 * @param drinkTag
 */
  public async getBarList(data: BarType.barSearchTyoe) {
    try {
      const { latitude, longitude, zoomLevel, moodTag, drinkTag } = data;
      const result = await RestAPI.get(
        `/api/bars?latitude=${latitude}&longitude=${longitude}&level=${zoomLevel}&barMoodTagNames=${moodTag}&barAlcoholTagNames=${drinkTag}`
      );
      return result.data;
    } catch (error) {
      console.log(error);
    }
  }
}

export default new BarAPI();
