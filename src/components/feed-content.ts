import Component from '../component';
import TextItem from './text-item';
import Link from './link';
import FeedContentModel from '../models/feed-content';

export default class FeedContent extends Component {

    private textItem: TextItem;

    constructor(title: string = '', description: string = '', link: string | Link = new Link('')) {

        super();
        this.textItem = new TextItem(title, description, link, true);

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

    set Title(query: string) {
        this.textItem.Title = query;
    }

    set Description(query: string) {
        this.textItem.Description = query;
    }

    set Link(query: Link) {
        this.textItem.Link = query;
    }

    toJson(): FeedContentModel {
        return {
            TI: this.textItem.toJson()
        }
    }

}