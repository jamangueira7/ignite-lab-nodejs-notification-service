import { Content } from './content';
import { Replace } from '../../helpers/Replace';

export interface NotificationProps {
  recipientId: string;
  content: Content;
  category: string;
  readAt?: Date | null;
  createdAt: Date;
}

export class Notification {
  private _props: NotificationProps;

  constructor(props: Replace<NotificationProps, { createdAt?: Date }>) {
    this._props = {
      ...props,
      createdAt: props.createdAt ?? new Date(),
    };
  }

  public set content(content: Content) {
    this._props.content = content;
  }

  public get content(): Content {
    return this._props.content;
  }

  public set category(category: string) {
    this._props.category = category;
  }

  public get category(): string {
    return this._props.category;
  }

  public set recipientId(recipientId: string) {
    this._props.recipientId = recipientId;
  }

  public get recipientId(): string {
    return this._props.recipientId;
  }

  public set readAt(readAt: Date | null | undefined) {
    this._props.readAt = readAt;
  }

  public get readAt(): Date | null | undefined {
    return this._props.readAt;
  }

  public get createdAt(): Date {
    return this._props.createdAt;
  }
}
