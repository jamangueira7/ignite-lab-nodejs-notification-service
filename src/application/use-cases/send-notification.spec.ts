import { SendNotification } from './send-notification';
import { inMemoryNotificationsRepository } from '@test/repositories/in-memory-notifications-repository';

describe('Send Notification', () => {
  it('should be able to send a notification', async () => {
    const notificationsRepository = new inMemoryNotificationsRepository();
    const sendNotification = new SendNotification(notificationsRepository);

    const { notification } = await sendNotification.exetute({
      content: 'This is a notification',
      category: 'social',
      recipientId: 'example-recipient-id',
    });

    expect(notificationsRepository.notifications).toHaveLength(1);
    expect(notificationsRepository.notifications[0]).toEqual(notification);
  });
});
