/** - 顯示會員名稱 */
export default function displayMemberName(params?: {
  nickname?: string;
  firstName?: string;
  lastName?: string;
  fullName?: string;
}) {
  if (!params) {
    return '';
  }
  const {nickname, firstName, lastName, fullName} = params;
  return (
    nickname ||
    [firstName, lastName].filter(Boolean).join('\u00A0') ||
    fullName ||
    ''
  );
}
