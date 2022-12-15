import { inMemoryNotificationsRepository } from '@test/repositories/in-memory-notifications-repository';
import { CountRecipientNotifications } from '@application/use-cases/count-recipient-notifications';
import { makeNotification } from '@test/factories/notification-factory';

describe('Count Recipient Notifications', () => {
  it('should be able to count to many recipient notifications', async () => {
    const notificationsRepository = new inMemoryNotificationsRepository();
    const countRecipientNotification = new CountRecipientNotifications(
      notificationsRepository,
    );

    await notificationsRepository.create(
      makeNotification({ recipientId: 'recipient-1' }),
    );

    await notificationsRepository.create(
      makeNotification({ recipientId: 'recipient-1' }),
    );

    await notificationsRepository.create(
      makeNotification({ recipientId: 'recipient-2' }),
    );

    const { count } = await countRecipientNotification.exetute({
      recipientId: 'recipient-1',
    });

    expect(count).toEqual(2);
  });
});
