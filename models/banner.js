module.exports = function (sequelize, dataTypes) {
  const banner = sequelize.define("Banner", {
    ImageUrl: {
      type: dataTypes.STRING(300),
      allowNull: false,
    },
    href: {
      type: dataTypes.STRING(300),
      allowNull: false,
    },
  });
  return banner;
};
// 데이터베이스는 설정을 변경하기가 어렵다. 오류가 났다면 컴포넌트에서 바꾸는 것이 빠름