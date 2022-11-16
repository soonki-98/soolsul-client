import { useCallback, useEffect, useMemo, useState } from "react";

type MenuCoordsType = {
  top: number;
  clientYTemp: number;
  direction: "up" | "down";
};

function useBottomMenu(ref: HTMLDivElement | null) {
  /**
   * 메뉴 시작 위치
   */
  const DEFAULT_POSITION = -70;
  /**
   * 메뉴 최대 높이
   */
  const MAX_POSITION = (-document.body.scrollHeight / 10) * 7;

  const [isActive, setIsActive] = useState(false);
  const [transition, setTransition] = useState(0);
  const [menuCoords, setMenuCoords] = useState<MenuCoordsType>({
    top: DEFAULT_POSITION,
    clientYTemp: 0,
    direction: "up",
  });

  const isShowShadow = useMemo(() => menuCoords.top === MAX_POSITION, [menuCoords.top]);

  const handleEndTouch = useCallback(() => {
    setIsActive(false);
    setTransition(500);
    if (menuCoords.direction === "down") {
      setMenuCoords({ direction: "up", clientYTemp: -9999, top: DEFAULT_POSITION });
    } else {
      setMenuCoords({ direction: "down", clientYTemp: 9999, top: MAX_POSITION });
    }
  }, [menuCoords.direction]);

  const onMouseDown = () => {
    setIsActive(true);
    setTransition(0);
  };

  const setPosition = (position: number, clientY: number) => {
    const direction = menuCoords.clientYTemp < clientY ? "down" : "up";
    const clientYTemp = clientY;
    let top = DEFAULT_POSITION;
    if (position >= DEFAULT_POSITION) {
      top = DEFAULT_POSITION;
    } else if (position < MAX_POSITION) {
      top = MAX_POSITION;
    } else {
      top = position;
    }
    setMenuCoords({
      direction,
      clientYTemp,
      top,
    });
  };

  const onMouseMove = (e: MouseEvent) => {
    if (!isActive) return;
    const position = e.clientY - document.body.scrollHeight;
    setPosition(position, e.clientY);
  };

  const onTouchMove = (e: globalThis.TouchEvent) => {
    if (!isActive) return;
    const position = e.touches[0].clientY - document.body.scrollHeight;
    setPosition(position, e.touches[0].clientY);
  };

  const closeMenu = (e: Event) => {
    const target = e.target as Node;
    if (isShowShadow && !ref?.contains(target)) {
      setMenuCoords({ direction: "up", clientYTemp: -9999, top: DEFAULT_POSITION });
      setTransition(500);
    }
  };

  /**
   * 클릭 or 터치 끝난 시점 메뉴 위치 조정
   */
  useEffect(() => {
    if (!isActive) return;
    document.addEventListener("mouseup", handleEndTouch);
    document.addEventListener("touchend", handleEndTouch);
    return () => {
      document.removeEventListener("mouseup", handleEndTouch);
      document.removeEventListener("touchend", handleEndTouch);
    };
  }, [handleEndTouch]);

  /**
   * 메뉴 끌어올리거나 내리기
   */
  useEffect(() => {
    if (isActive) {
      document.addEventListener("mousemove", onMouseMove);
      document.addEventListener("touchmove", onTouchMove);
      return () => {
        document.removeEventListener("mousemove", onMouseMove);
        document.removeEventListener("touchmove", onTouchMove);
      };
    }
  }, [isActive, menuCoords.clientYTemp]);

  /**
   * 외부 클릭 or 터치 감지해서 메뉴 닫기
   */
  useEffect(() => {
    document.addEventListener("touchstart", closeMenu);
    document.addEventListener("click", closeMenu);
    return () => {
      document.removeEventListener("touchstart", closeMenu);
      document.removeEventListener("click", closeMenu);
    };
  }, [isShowShadow]);

  return { menuCoords, transition, handleStartTouch: onMouseDown, isShowShadow };
}

export default useBottomMenu;
