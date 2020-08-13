import Component from '../Component';
import KakaoLinkInfoModel from '../models/KakaoLinkInfo';

export default class KakaoLinkInfo extends Component {

    private readonly appID: string;
    private readonly templateID: string;

    constructor() {

        super();
        this.appID = '331278'; // 카카오톡 디벨로퍼에서 생성한 봇의 appID 값
        this.templateID = '3139';

    }

    toJson(): KakaoLinkInfoModel {
        return {
            ai: this.appID,
            ti: this.templateID
        };
    }

}
