import { inMemoryNotificationsRepository } from '@test/repositories/in-memory-notifications-repository';
import { Notification } from '@application/entities/notification';
import { Content } from '@application/entities/content';
import {NotificationNotFound} from "@application/use-cases/errors/notification-not-found";
import {CountRecipientNotifications} from "@application/use-cases/count-recipient-notifications";

describe('Count Recipient Notifications', () => {
  it('should be able to count to many recipient notifications', async () => {
    const notificationsRepository = new inMemoryNotificationsRepository();
    const countRecipientNotification = new CountRecipientNotifications(notificationsRepository);

    const notification = new Notification({
      content: new Content('This is a notification'),
      category: 'social',
      recipientId: 'example-recipient-id',
    });

    await notificationsRepository.create(
      new Notification({
        content: new Content('This is a notification'),
        category: 'social',
        recipientId: 'recipient-1',
      }),
    );

    await notificationsRepository.create(
      new Notification({
        content: new Content('This is a notification'),
        category: 'social',
        recipientId: 'recipient-1',
      }),
    );

    await notificationsRepository.create(
      new Notification({
        content: new Content('This is a notification'),
        category: 'social',
        recipientId: 'recipient-2',
      }),
    );

    const { count } = await countRecipientNotification.exetute({
      recipientId: 'recipient-1',
    });

    expect(count).toEqual(2);
  });
});
