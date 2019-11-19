export const getIssueType = (types, option) => {
  const issueTypes = [];
  types.forEach((item) => {
    issueTypes.push({
      id: item.Id,
      value: item[option],
    })
  });
  return issueTypes;
}
