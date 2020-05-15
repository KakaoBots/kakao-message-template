import Component from '../Component';
import TextItem from './TextItem';
import Link from './Link';
import FeedContentModel from '../models/FeedContent';
import Content from './Content';
import ButtonList from './ButtonList';
import Social from './Social';

export default class FeedContent extends Component implements Content {

    private textItem: TextItem;
    private buttons: ButtonList;
    private buttonLayout: 'Horizontal' | 'Vertical';
    private social?: Social;

    constructor(title: string = '', description: string = '', link: string | Link = new Link('')) {

        super();
        this.textItem = new TextItem(title, description, link, true);
        this.buttons = new ButtonList();
        this.buttonLayout = 'Vertical';

    }

    get Title(): string {
        return this.textItem.Title;
    }

    get Description(): string {
        return this.textItem.Description;
    }

    get Link(): Link {
        return this.textItem.Link;
    }

    get Buttons(): ButtonList {
        return this.buttons;
    }

    get ButtonLayout(): 'Horizontal' | 'Vertical' {
        return this.buttonLayout;
    }

    get Social(): Social {
        if(!this.social) this.social = new Social();
        return this.social;
    }

    set Title(query: string) {
        this.textItem.Title = query;
    }

    set Description(query: string) {
        this.textItem.Description = query;
    }

    set Link(query: Link) {
        this.textItem.Link = query;
    }

    set Buttons(query: ButtonList) {
        this.buttons = query;
    }

    set ButtonLayout(query: 'Horizontal' | 'Vertical') {
        this.buttonLayout = query;
    }

    set Social(query: Social) {
        this.social = query;
    }

    toJson(): FeedContentModel {
        return {
            BUL: this.buttons.toJson(),
            BUT: this.buttonLayout === 'Horizontal' ? 0 : 1,
            TI: this.textItem.toJson(),
            SO: this.social?.toJson()
        }
    }

}