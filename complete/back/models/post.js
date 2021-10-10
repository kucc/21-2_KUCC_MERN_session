const Sequelize = require('sequelize');

// Posts 테이블 생성
module.exports = class Post extends Sequelize.Model {
  static init(sequelize) {
    return super.init({
      title: {
        type: Sequelize.STRING(40),
        allowNull: true,
        unique: true,
      },
      writer: {
        type: Sequelize.STRING(30),
        allowNull: false,
      },
      content: {
        type: Sequelize.STRING(100),
        allowNull: true,
      },
    }, {
      sequelize,
      timestamps: true,
      underscored: false,
      modelName: 'Post',
      tableName: 'posts',
      paranoid: true,
      charset: 'utf8',
      collate: 'utf8_general_ci',
    });
  }
};
