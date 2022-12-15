import { inMemoryNotificationsRepository } from '@test/repositories/in-memory-notifications-repository';
import { CancelNotification } from '@application/use-cases/cancel-notification';
import { Notification } from '@application/entities/notification';
import { Content } from '@application/entities/content';
import {NotificationNotFound} from "@application/use-cases/errors/notification-not-found";

describe('Cancel Notification', () => {
  it('should be able to cancel a notification', async () => {
    const notificationsRepository = new inMemoryNotificationsRepository();
    const cancelNotification = new CancelNotification(notificationsRepository);

    const notification = new Notification({
      content: new Content('This is a notification'),
      category: 'social',
      recipientId: 'example-recipient-id',
    });

    await notificationsRepository.create(notification);

    await cancelNotification.exetute({
      notificationId: notification.id,
    });

    expect(notificationsRepository.notifications[0].canceledAt).toEqual(
      expect.any(Date),
    );
  });

  it('should be able to cancel a non exist notification', async () => {
    const notificationsRepository = new inMemoryNotificationsRepository();
    const cancelNotification = new CancelNotification(notificationsRepository);

    await expect(() => {
      return cancelNotification.exetute({
        notificationId: 'fake-notification-id',
      });
    }).rejects.toThrow(NotificationNotFound);
  });
});
