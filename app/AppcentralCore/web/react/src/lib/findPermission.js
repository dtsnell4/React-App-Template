export default function findPermission(permissionList, permissionObject) {
  let exists = false;
  permissionList.forEach((e) => {
    if (permissionObject[e]) {
      exists = true;
    }
  });
  return exists;
}
