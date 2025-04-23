/**
 * 객체의 모든 필드가 유효한 값인지 재귀적으로 확인합니다.
 * - null이나 undefined가 아닌지 검사
 * - 문자열인 경우 빈 문자열이 아닌지 검사
 * - 배열인 경우 빈 배열이 아닌지 검사하고 모든 요소가 유효한지 검사
 * - 객체인 경우 모든 속성이 유효한지 재귀적으로 검사
 */
export const ensureAllFieldsExist = (record: unknown): boolean => {
  // 기본 타입(문자열, 숫자, 불리언 등)은 값이 존재하면 true
  if (typeof record !== "object" || record === null) {
    return record !== null && record !== undefined && record !== "";
  }

  // 배열인 경우
  if (Array.isArray(record)) {
    // 빈 배열인지 확인
    if (record.length === 0) {
      return false;
    }
    // 배열의 모든 항목이 유효한지 확인
    return record.every((item) => ensureAllFieldsExist(item));
  }

  // 객체인 경우
  // 객체에 속성이 있는지 확인
  const keys = Object.keys(record);
  if (keys.length === 0) {
    return false;
  }

  // 모든 속성이 유효한지 확인
  return Object.values(record).every((value) => ensureAllFieldsExist(value));
};
