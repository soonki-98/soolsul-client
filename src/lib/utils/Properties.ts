import { DeviceType } from "@lib/types/user";

/**
 * [전역 프라퍼티]
 * 필요한 값을 로컬스토리지에 세팅하는 method와
 * 필요한 값을 로컬스토리지에서 가져오는 getter로 구성.
 */
class Properties {
  constructor() {
    if (typeof window === "undefined") return;
  }

  /**
   * 로컬스토리지에서 원하는 값을 가져오는 함수
   *
   * @param key 로컬스토리지 키
   */
  private _getItemFromLocalStorage(key: string) {
    return window.localStorage.getItem(key) || "null";
  }

  /**
   * `JSON.stringify`가 빈객체를 반환할때 사용하는 함수
   * @param obj 변환할 객체
   */
  private _cloneAsObject(obj: { [key: string]: any }) {
    if (obj === null || !(obj instanceof Object)) {
      return obj;
    }
    const result = obj instanceof Array ? [] : ({} as { [key: string]: any });

    for (const key in obj) {
      result[key] = this._cloneAsObject(obj[key]);
    }

    return result;
  }

  public setUserLocation(newGeoLocation: GeolocationPosition) {
    window.localStorage.setItem("GeoLocation", JSON.stringify(this._cloneAsObject(newGeoLocation)));
  }

  get userInfo() {
    const location = JSON.parse(this._getItemFromLocalStorage("GeoLocation"));
    const deviceType: DeviceType = /Mobi|Android/i.test(navigator.userAgent) ? "mobile" : "web";
    const isMobile = /Mobi|Android/i.test(navigator.userAgent);
    const isWeb = !/Mobi|Android/i.test(navigator.userAgent);
    return { location, deviceType, isWeb, isMobile };
  }
}

const Property = new Properties();

export default Property;
