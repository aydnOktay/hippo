const generalSettingModel = require("./generalSetting.model");
const BaseService = require("../base/base.service");

class GeneralSettingService extends BaseService {
  constructor() {
    super(generalSettingModel);
  }
}

module.exports = new GeneralSettingService();
